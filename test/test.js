const tap = require('tap');

const validate = require('../lib');

tap.equal(validate.isUndefined(), true);
tap.equal(validate.isUndefined(undefined), true);
tap.equal(validate.isUndefined(null), false);
tap.equal(validate.isUndefined(1), false);

tap.equal(validate.isNull(), false);
tap.equal(validate.isNull(null), true);
tap.equal(validate.isNull(undefined), false);
tap.equal(validate.isNull(NaN), false);

tap.equal(validate.isNumber(1), true);
tap.equal(validate.isNumber(0), true);
tap.equal(validate.isNumber('1'), false);
tap.equal(validate.isNumber(1.1), true);
tap.equal(validate.isNumber(NaN), false);
tap.equal(validate.isNumber(true), false);

tap.equal(validate.isNegativeNumber(-1), true);
tap.equal(validate.isNegativeNumber(-1.1), true);
tap.equal(validate.isNegativeNumber('1'), false);
tap.equal(validate.isNegativeNumber(false), false);

tap.equal(validate.isInteger(1), true);
tap.equal(validate.isInteger('1'), false);
tap.equal(validate.isInteger(1.2), false);
tap.equal(validate.isInteger(true), false);
tap.equal(validate.isInteger(NaN), false);

tap.equal(validate.isSafeInteger(1), true);
tap.equal(validate.isSafeInteger(1.1), false);
tap.equal(validate.isSafeInteger('1'), false);
tap.equal(validate.isSafeInteger(Math.pow(2, 53)), false);
tap.equal(validate.isSafeInteger(Math.pow(2, 53) - 1), true);
tap.equal(validate.isSafeInteger(Number.MIN_SAFE_INTEGER), true);
tap.equal(validate.isSafeInteger(Number.MIN_SAFE_INTEGER - 1), false);

tap.equal(validate.isNegativeInteger(-1), true);
tap.equal(validate.isNegativeInteger(0), false);
tap.equal(validate.isNegativeInteger(1), false);
tap.equal(validate.isNegativeInteger(-1.1), false);
tap.equal(validate.isNegativeInteger(NaN), false);

tap.equal(validate.isDecimal(1.1), true);
tap.equal(validate.isDecimal(1), false);
tap.equal(validate.isDecimal('1'), false);
tap.equal(validate.isDecimal(-1), false);
tap.equal(validate.isDecimal(-1.1), true);

tap.equal(validate.isString('1'), true);
tap.equal(validate.isString(1), false);
tap.equal(validate.isString(false), false);
tap.equal(validate.isString(undefined), false);

tap.equal(validate.isBoolean(false), true);
tap.equal(validate.isBoolean(1), false);
tap.equal(validate.isBoolean(false), true);
tap.equal(validate.isBoolean('1'), false);

tap.equal(validate.isSymbol(Symbol()), true);
tap.equal(validate.isSymbol(null), false);
tap.equal(validate.isSymbol(), false);
tap.equal(validate.isSymbol(1), false);

tap.equal(validate.isRegExp(new RegExp()), true);
tap.equal(validate.isRegExp(new RegExp(/1/)), true);
tap.equal(validate.isRegExp(), false);
tap.equal(validate.isRegExp(1), false);
tap.equal(validate.isRegExp(false), false);

tap.equal(validate.isDate(new Date()), true);
tap.equal(validate.isDate(1), false);
tap.equal(validate.isDate(), false);
tap.equal(validate.isDate(false), false);

tap.equal(validate.isObject({}), true);
tap.equal(validate.isObject([]), true);
tap.equal(validate.isObject(new Date()), true);
tap.equal(validate.isObject(), false);
tap.equal(validate.isObject(1), false);

tap.equal(validate.isFunction(function(){}), true);
tap.equal(validate.isFunction(), false);
tap.equal(validate.isFunction(undefined), false);

tap.equal(validate.isArray([]), true);
tap.equal(validate.isArray(new Array()), true);
tap.equal(validate.isArray({}), false);
tap.equal(validate.isArray(true), false);

tap.equal(validate.isError(new Error()), true);
tap.equal(validate.isError({}), false);
tap.equal(validate.isError('error'), false);

tap.equal(validate.isPromise(new Promise((resolve,reject)=>{})), true);
tap.equal(validate.isPromise(function(){}), false);
tap.equal(validate.isPromise({}), false);
tap.equal(validate.isPromise(), false);
tap.equal(validate.isPromise(1), false);

tap.equal(validate.isAsyncFunction(async function(){}), true);
tap.equal(validate.isAsyncFunction(function(){}), false);
tap.equal(validate.isAsyncFunction(), false);
tap.equal(validate.isAsyncFunction({}), false);
tap.equal(validate.isAsyncFunction(1), false);

tap.equal(validate.isGeneratorFunction(function *(){}), true);
tap.equal(validate.isGeneratorFunction(function (){}), false);
tap.equal(validate.isGeneratorFunction(), false);
tap.equal(validate.isGeneratorFunction({}), false);
tap.equal(validate.isGeneratorFunction(true), false);


tap.equal(validate.isUSDateOnly('02/02/2020'), true);
tap.equal(validate.isUSDateOnly('02-02-2020'), true);
tap.equal(validate.isUSDateOnly(02/02/2020), false);
tap.equal(validate.isUSDateOnly('02/02/2099'), true);
tap.equal(validate.isUSDateOnly('2/2/2020'), false);
tap.equal(validate.isUSDateOnly('13/02/2020'), false);
tap.equal(validate.isUSDateOnly('02/32/2020'), false);
tap.equal(validate.isUSDateOnly('02/02/1880'), false);
tap.equal(validate.isUSDateOnly('02/02/2100'), false);

tap.equal(validate.isENDateOnly('02-02-1990'), true);
tap.equal(validate.isENDateOnly(02-02-1990), false);
tap.equal(validate.isENDateOnly('32-02-1990'), false);
tap.equal(validate.isENDateOnly('02-13-1990'), false);
tap.equal(validate.isENDateOnly('02-02-2099'), true);
tap.equal(validate.isENDateOnly('02-02-2100'), false);
tap.equal(validate.isENDateOnly('02/02/2099'), true);

tap.equal(validate.isDateOnly('2000-02-02'), true);
tap.equal(validate.isDateOnly('2000/02/02'), true);
tap.equal(validate.isDateOnly('2100/02/02'), false);
tap.equal(validate.isDateOnly('2000/13/02'), false);
tap.equal(validate.isDateOnly('2000/02/33'), false);

tap.equal(validate.isEmptyObject(), true);
tap.equal(validate.isEmptyObject(null), true);
tap.equal(validate.isEmptyObject([]), true);
tap.equal(validate.isEmptyObject({}), true);
tap.equal(validate.isEmptyObject([1,2,3]), false);
tap.equal(validate.isEmptyObject({a:1}), false);
tap.equal(validate.isEmptyObject(1), true);
tap.equal(validate.isEmptyObject('test'), true);
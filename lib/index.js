'use strict';


// mm/dd/yyyy
const US_DATE_RE = /^(0[1-9]|1[012])[- /\.](0[1-9]|[12][0-9]|3[01])[- /\.](19|20)\d\d$/i
// dd-mm-yyy
const EN_DATE_RE = /^(0[1-9]|[12][0-9]|3[01])[- /\.](0[1-9]|1[012])[- /\.](19|20)\d\d$/i;
// yyyy-mm-dd
const DATE_RE = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/i


const isFinite = Number.isFinite;
const isNaN = Number.isNaN;

const isUndefined = arg => (void 0) === arg;
const isNull = arg => null === arg;

const isNumber = (arg) => ('number' === typeof arg) && !isNaN(arg);
const isNegativeNumber = (arg) => isNumber(arg) && (arg < 0);

const isInteger = arg => isNumber(arg) && arg % 1 === 0;
const isSafeInteger = arg => isInteger(arg) && Number.isSafeInteger(arg);
const isNegativeInteger = arg => isSafeInteger(arg) && isNegativeNumber(arg);

const isDecimal = arg => isNumber(arg) && !isNaN(arg) && arg % 1 !== 0;

const isString = arg => 'string' === typeof arg;

const isBoolean = arg => 'boolean' === typeof arg;

const isSymbol = arg => 'symbol' === typeof arg;

const isRegExp = arg => arg instanceof RegExp;

const isDate = arg => arg instanceof Date;
const isDateOnly = arg => DATE_RE.test(arg);
const isUSDateOnly = arg => US_DATE_RE.test(arg);
const isENDateOnly = arg => EN_DATE_RE.test(arg);
const isTimeOnly = arg => new RegExp(/^\d{2}:\d{2}:\d{2}$/).test(arg);

const isObject = arg => !isNull(arg) && 'object' === typeof arg;
const isEmptyObject = arg => {
    if(isArray(arg)) return !arg.length;
    if(isObject(arg)) return !Object.keys(arg).length;

    return true;
}

const isFunction = arg => 'function' === typeof arg;

const isArray = arg => Array.isArray ? Array.isArray(arg) : ('[object Array]' === typeof arg);

const isError = arg => arg instanceof Error;

const isPromise = arg => !isNull(arg) && !isUndefined(arg) && 'function' === typeof arg.then;

const isAsyncFunction = arg => !isNull(arg) && !isUndefined(arg) && arg.constructor && 'AsyncFunction' === arg.constructor.name;

const isGeneratorFunction = arg => !isNull(arg) && !isUndefined(arg) && arg.constructor && 'GeneratorFunction' === arg.constructor.name;

module.exports = {
    isUndefined,
    isNull,
    isFinite,
    isNaN,
    isNumber,
    isNegativeNumber,
    isInteger,
    isSafeInteger,
    isNegativeInteger,
    isDecimal,
    isString,
    isBoolean,
    isSymbol,
    isRegExp,
    isDate,
    isObject,
    isFunction,
    isArray,
    isError,
    isPromise,
    isAsyncFunction,
    isGeneratorFunction,
    isDateOnly,
    isTimeOnly,
    isUSDateOnly,
    isENDateOnly,
    isEmptyObject
};

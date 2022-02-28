'use strict';

// mm/dd/yyyy

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var US_DATE_RE = /^(0[1-9]|1[012])[- /\.](0[1-9]|[12][0-9]|3[01])[- /\.](19|20)\d\d$/i;
// dd-mm-yyy
var EN_DATE_RE = /^(0[1-9]|[12][0-9]|3[01])[- /\.](0[1-9]|1[012])[- /\.](19|20)\d\d$/i;
// yyyy-mm-dd
var DATE_RE = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/i;

var isFinite = Number.isFinite;
var isNaN = Number.isNaN;

var isUndefined = function isUndefined(arg) {
    return void 0 === arg;
};
var isNull = function isNull(arg) {
    return null === arg;
};

var isNumber = function isNumber(arg) {
    return 'number' === typeof arg && !isNaN(arg);
};
var isNegativeNumber = function isNegativeNumber(arg) {
    return isNumber(arg) && arg < 0;
};

var isInteger = function isInteger(arg) {
    return isNumber(arg) && arg % 1 === 0;
};
var isSafeInteger = function isSafeInteger(arg) {
    return isInteger(arg) && Number.isSafeInteger(arg);
};
var isNegativeInteger = function isNegativeInteger(arg) {
    return isSafeInteger(arg) && isNegativeNumber(arg);
};

var isDecimal = function isDecimal(arg) {
    return isNumber(arg) && !isNaN(arg) && arg % 1 !== 0;
};

var isString = function isString(arg) {
    return 'string' === typeof arg;
};

var isBoolean = function isBoolean(arg) {
    return 'boolean' === typeof arg;
};

var isSymbol = function isSymbol(arg) {
    return 'symbol' === (typeof arg === 'undefined' ? 'undefined' : _typeof(arg));
};

var isRegExp = function isRegExp(arg) {
    return arg instanceof RegExp;
};

var isDate = function isDate(arg) {
    return arg instanceof Date;
};
var isDateOnly = function isDateOnly(arg) {
    return DATE_RE.test(arg);
};
var isUSDateOnly = function isUSDateOnly(arg) {
    return US_DATE_RE.test(arg);
};
var isENDateOnly = function isENDateOnly(arg) {
    return EN_DATE_RE.test(arg);
};
var isTimeOnly = function isTimeOnly(arg) {
    return new RegExp(/^\d{2}:\d{2}:\d{2}$/).test(arg);
};

var isObject = function isObject(arg) {
    return !isNull(arg) && 'object' === (typeof arg === 'undefined' ? 'undefined' : _typeof(arg));
};

var isFunction = function isFunction(arg) {
    return 'function' === typeof arg;
};

var isArray = function isArray(arg) {
    return Array.isArray ? Array.isArray(arg) : '[object Array]' === typeof arg;
};

var isError = function isError(arg) {
    return arg instanceof Error;
};

var isPromise = function isPromise(arg) {
    return !isNull(arg) && !isUndefined(arg) && 'function' === typeof arg.then;
};

var isAsyncFunction = function isAsyncFunction(arg) {
    return !isNull(arg) && !isUndefined(arg) && arg.constructor && 'AsyncFunction' === arg.constructor.name;
};

var isGeneratorFunction = function isGeneratorFunction(arg) {
    return !isNull(arg) && !isUndefined(arg) && arg.constructor && 'GeneratorFunction' === arg.constructor.name;
};

module.exports = {
    isUndefined: isUndefined,
    isNull: isNull,
    isFinite: isFinite,
    isNaN: isNaN,
    isNumber: isNumber,
    isNegativeNumber: isNegativeNumber,
    isInteger: isInteger,
    isSafeInteger: isSafeInteger,
    isNegativeInteger: isNegativeInteger,
    isDecimal: isDecimal,
    isString: isString,
    isBoolean: isBoolean,
    isSymbol: isSymbol,
    isRegExp: isRegExp,
    isDate: isDate,
    isObject: isObject,
    isFunction: isFunction,
    isArray: isArray,
    isError: isError,
    isPromise: isPromise,
    isAsyncFunction: isAsyncFunction,
    isGeneratorFunction: isGeneratorFunction,
    isDateOnly: isDateOnly,
    isTimeOnly: isTimeOnly,
    isUSDateOnly: isUSDateOnly,
    isENDateOnly: isENDateOnly
};

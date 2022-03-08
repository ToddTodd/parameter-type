### Parameter-type
##### Check parameter type

### Install
```
npm i parameter-type 
```

### API
* isUndefined()
```
  ps.isUndefined(undefined); //true
  ps.isUndefined(1); //false
```
* isNull()
```
  ps.isNull(null); //true
  ps.isNull(undefined); //false
```
* isNumber()
```
  ps.isNumber(1); //true
  ps.isNumber('1'); //false
```
* isNegativeNumber()
```
  ps.isNegativeNumber(-1); //true
  ps.isNegativeNumber(-1.1); //true
  ps.isNegativeNumber(1); //false
```
* isInteger()
```
  ps.isInteger(1); //true
  ps.isInteger(1.1); //false
  ps.isInteger(NaN); //false
```
* isSafeInteger()
```
  ps.isSafeInteger(1); //true
  ps.isSafeInteger(Number.MIN_SAFE_INTEGER); //true
  ps.isSafeInteger(1.1); //false
  ps.isSafeInteger(Math.pow(2, 53)); //false
```

* isNegativeInteger()
```
  ps.isNegativeInteger(-1); //true
  ps.isNegativeInteger(1); //false
```
* isDecimal()
```
  ps.isDecimal(1.1); //true
  ps.isDecimal(1); //false
```
* isString()
```
  ps.isString('1'); //true
  ps.isString(1); //false
```
* isBoolean()
```
  ps.isBoolean(false); //true
  ps.isBoolean(1); //false
```
* isBoolean()
```
  ps.isSymbol(Symbol()); //true
  ps.isSymbol(1); //false
```
* isRegExp()
```
  ps.isRegExp(new RegExp()); //true
  ps.isRegExp(1); //false
```
* isDate()
```
  ps.isDate(new Date()); //true
  ps.isDate(1); //false
```
* isObject()
```
  ps.isObject({}); //true
  ps.isObject(new Date()); //true
  ps.isObject(1); //false
```
* isFunction()
```
  ps.isFunction(function(){}); //true
  ps.isFunction(1); //false
```
* isArray()
```
  ps.isArray([]); //true
  ps.isArray(new Array()); //true
```
* isError()
```
  ps.isArray(new Error()); //true
  ps.isArray('error'); //false
```
* isPromise()
```
  ps.isPromise(new Promise((resolve,reject)=>{})); //true
  ps.isPromise(function(){}); //false
```
* isAsyncFunction()
```
  ps.isAsyncFunction(async function(){}); //true
  ps.isAsyncFunction(function(){}); //false
```
* isGeneratorFunction()
```
  ps.isGeneratorFunction(function *(){}); //true
  ps.isGeneratorFunction(function(){}); //false
```
* isUSDateOnly()
```
  ps.isUSDateOnly('02/02/2020'); //true
  ps.isUSDateOnly('02-02-2020'); //true
```
* isENDateOnly()
```
  ps.isENDateOnly('02-02-1990'); //true
  ps.isENDateOnly('02-02-2099'); //true
```
* isDateOnly()
```
  ps.isDateOnly('2000-02-02'); //true
```
* isEmptyObject()
```
  ps.isEmptyObject({}); //true
  ps.isEmptyObject([]); //true
  ps.isEmptyObject({a:1}); //false  
```
* isHexColor()
```
  ps.isHexColor('#F00'); //true
  ps.isHexColor('#000000'); //true
  ps.isHexColor('#000x00'); //false  
```



'use strick';

Array.prototype.myForEach = function(callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new Error('Enter the function');
  }

  let context = this;

  if (thisArg !== undefined) {
    context = thisArg;
  }

  for (let i = 0; i < context.length; i++) {
    callback(context[i], i, context);
  }
};

Array.prototype.myMap = function(callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new Error('Enter the function');
  }

  let newArray = [];
  let context = this;

  if (thisArg !== undefined) {
    context = thisArg;
  }

  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

Array.prototype.myFind = function(callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new Error('Enter the function');
  }

  let context = this;

  if (thisArg !== undefined) {
    context = thisArg;
  }

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i]
    }
  }
};

Array.prototype.myFilter = function(callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new Error('Enter the function');
  }

  let newArray = [];
  let context = this;
  if (thisArg !== undefined) {
    context = thisArg;
  }

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

Array.prototype.newReduce = function(callback, initialValue) {
  if (typeof callback !== 'function') {
    throw new Error('Enter the function');
  }
  if (Array.isArray(this) && this.length === 0) {
    throw new TypeError('Enter array wich have more then zero items');
  }
  if (this.length === 1 && initialValue === undefined) {
    return this;
  }
  if (initialValue !== undefined && this.length === 0) {
    return [initialValue];
  }

  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    initialValue = this[0];
  }
  for(; i < this.length; i++) {
    initialValue = callback(initialValue, this[i], i, this);
  }
  return initialValue;
};

Function.prototype.myBind = function(context, ...args) {
  if (typeof context !== 'object' || typeof context !== 'function' || typeof context !== 'array') {
    throw new Error('Enter the context');
  }

  let symbol = Symbol();
  context[symbol] = this;
  return function() {
    let result = context[symbol](...args);
    delete context[symbol];
    return result;
  };
};

Function.prototype.myApply = function(context, args) {
  if (context.constructor !== Object) {
    throw new Error('Enter the object');
  }

  let symbol = Symbol();
  context[symbol] = this;
  let result;
  if (args !== undefined) {
    result = context[symbol](...args);
  } else {
    result = context[symbol]();
  }
  delete context[symbol];
  return result;
};

Function.prototype.myCall = function(context, ...args) {
  if (Array.isArray(context)) {
    throw new Error('Enter the array');
  }

  let symbol = Symbol();
  context[symbol] = this;
  let result;
  if (args !== undefined) {
    result = context[symbol](args);
  } else {
    result = context[symbol]();
  }
  delete context[symbol];
  return result;
};

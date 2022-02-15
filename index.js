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

  let newArray = [], context = this;

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

  let newArray = [], context = this;
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
  if (this === []) {
    throw new TypeError('this === []');
  }
  if (this.length === 1 && initialValue === undefined) {
    return this;
  }
  if (initialValue !== undefined && this === []) {
    return [initialValue];
  }

  let result = initialValue || 0;

  for (let i = 0; i < this.length; i++) {
    result = callback(this[i], result);
  }

  return result;
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
  }
};

Function.prototype.myApply = function(context, args) {
  if (typeof context !== 'object') {
    throw new Error('Enter the object');
  }

  let symbol = Symbol();
  let result = context[symbol](...args);
  delete context[symbol];
  result();
};

Function.prototype.myCall = function(context, ...args) {
  if (typeof context !== 'array') {
    throw new Error('Enter the array');
  }

  let symbol = Symbol();
  let result = context[symbol](...args);
  delete context[symbol];
  result();
};

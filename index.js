'use strick';

Array.prototype.myForEach = function(callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new Error('Enter the function');
  }

  if (thisArg !== undefined) {
    for (let i = 0; i < thisArg.length; i++) {
      callback(thisArg[i], i, thisArg)
    }
  } else {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this)
    }
  }
};

Array.prototype.myMap = function(callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new Error('Enter the function');
  }

  let newArray = [];

  if (thisArg !== undefined) {
    for (let i = 0; i < thisArg.length; i++) {
      newArray.push(callback(thisArg[i], i, thisArg));
    }
  } else {
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this));
    }
  }
  return newArray;
};

Array.prototype.myFind = function(callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new Error('Enter the function');
  }

  if (thisArg !== undefined) {
    for (let i = 0; i < thisArg.length; i++) {
      if (callback(thisArg[i], i, thisArg)) {
        return thisArg[i]
      }
    }
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

  if (thisArg !== undefined) {
    for (let i = 0; i < thisArg.length; i++) {
      if (callback(thisArg[i], i, thisArg)) {
        newArray.push(thisArg[i]);
      }
    }
  } else {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newArray.push(this[i]);
      }
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

  let res = initialValue || 0;

  for (let i = 0; i < this.length; i++) {
    res = callback(this[i], res);
  }

  return res;
};

Function.prototype.myBind = function(context, ...args) {
  let symbol = Symbol();
  context[symbol] = this;
  return function() {
    let res = context[symbol](...args);
    delete context[symbol];
    return res;
  }
};

Function.prototype.myApply = function(context, args) {
  let symbol = Symbol();
  if (context === null || undefined) {
    context[symbol] = window;
  } else {
    context[symbol] = this;
  }
  let res = context[symbol](...args);
  delete context[symbol];
  res();

};

Function.prototype.myCall = function(context, ...args) {
  let symbol = Symbol();
  if (context === null || undefined) {
    context[symbol] = window;
  } else {
    context[symbol] = this;
  }
  let res = context[symbol](...args);
  delete context[symbol];
  res();
};

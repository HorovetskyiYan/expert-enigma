'use strick';

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
  let symbol = Symbol();
  context[symbol] = this;
  let result = context[symbol](...args);
  delete context[symbol];
  return result;
};

Function.prototype.myCall = function(context, ...args) {
  let symbol = Symbol();
  context[symbol] = this;
  let result = context[symbol](...args);
  delete context[symbol];
  return result;
};

Array.prototype.myForEach = function(callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new Error('Enter the function');
  }
  thisArg = thisArg || this;


  for (let i = 0; i < this.length; i++) {
    callback(thisArg[i], i, this);
  }
};

Array.prototype.myMap = function(callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new Error('Enter the function');
  }

  let result = [];
  thisArg = thisArg || this;

  for (let i = 0; i < this.length; i++) {
    result.push(callback.call(thisArg, thisArg[i], i, this));
  }

  return result;

};

Array.prototype.myFilter = function(callback, thisArgs) {
  let result = []
  thisArgs = thisArgs || this;

  for (let i = 0; i < this.length; i++) {
    if (callback.myCall(thisArgs, thisArgs[i], i, this)) {
      result.push(thisArgs[i])
    }
  }
  return result
}

Array.prototype.myReduse = function(callback, initialValue) {
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

Array.prototype.myFind = function(callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new Error('Enter the function');
  }
  thisArg = thisArg || this;
  if (thisArg.__proto__.constructor === Object) {
    thisArg = this;
  }
  for (let i = 0; i < thisArg.length; i++) {
    if (callback.myCall(thisArg, thisArg[i], i, this)) {
      return this[i]
    }
  }
};

Array.prototype.myForEach = function(callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new Error('Enter the function');
  }

  let result = []
  thisArg = thisArg || this;
  if (thisArg.__proto__.constructor === Object) {
    thisArg = this;
  }

  for (let i = 0; i < this.length; i++) {
    callback.call(thisArg, thisArg[i], i, this);
  }
};

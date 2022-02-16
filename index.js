'use strick';

Function.prototype.myBind = function(context, ...args) {
  if (context === null || undefined) {
    throw new Error('Enter the context');
  }
  const func = this
  return function(...argsTwo) {
    let symbol = Symbol();
    context[symbol] = func;
    let result = context[symbol](...args, ...argsTwo);
    delete context[symbol];
    return result;
  }
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
  const ownContext = this;
  let result = [];
  if(thisArg === undefined) {
      thisArg = window;
  }
  else if (thisArg !== undefined) {
    thisArg = thisArg;
  }


  for (let i = 0; i < ownContext.length; i++) {
    callback.call(thisArg, ownContext[i], i, ownContext);
  }
};

Array.prototype.myMap = function(callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new Error('Enter the function');
  }
  const ownContext = this;
  let result = [];
  if(thisArg === undefined) {
      thisArg = window;
  }
  else if (thisArg !== undefined) {
    thisArg = thisArg;
  }

  for (let i = 0; i < ownContext.length; i++) {
    result.push(callback.call(thisArg, ownContext[i], i, ownContext));
  }

  return result;

};

Array.prototype.myFilter = function(callback, thisArg) {
  let result = []
  const ownContext = this;

  if(thisArg === undefined) {
      thisArg = window;
  }
  else if (thisArg !== undefined) {
    thisArg = thisArg;
  }

  for (let i = 0; i < this.length; i++) {
    if (callback.myCall(thisArg, ownContext[i], i, ownContext)) {
      result.push(ownContext[i])
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

    const ownContext = this;

    if(thisArg === undefined) {
        thisArg = window;
    }
    else if (thisArg !== undefined) {
      thisArg = thisArg;
    }
    for (let i = 0; i < ownContext.length; i++) {
        if (callback.myCall(thisArg, ownContext[i], i, ownContext)) {
            return ownContext[i];
        }
    }
};

Array.prototype.myForEach = function(callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new Error('Enter the function');
  }

  let result = []
  const ownContext = this;

  if(thisArg === undefined) {
      thisArg = window;
  }
  else if (thisArg !== undefined) {
    thisArg = thisArg;
  }


  for (let i = 0; i < ownContext.length; i++) {
    callback.call(thisArg, ownContext[i], i, ownContext);
  }
};

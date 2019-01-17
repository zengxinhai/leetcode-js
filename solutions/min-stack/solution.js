const MinStack = function () {
  this._elem = [];
  this._minStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this._elem.push(x);
  if (this._minStack.length > 0) {
    const lastMinElemInfo = this._minStack[this._minStack.length - 1];
    if (x >= lastMinElemInfo.value) {
      lastMinElemInfo.count += 1;
    } else {
      this._minStack.push({ count: 1, value: x });
    }
  } else {
    this._minStack.push({ count: 1, value: x });
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const lastMinElemInfo = this._minStack[this._minStack.length - 1];
  if (lastMinElemInfo.count === 1) {
    this._minStack.pop();
  } else {
    lastMinElemInfo.count -= 1;
  }
  return this._elem.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this._elem.length > 0) {
    return this._elem[this._elem.length - 1];
  } else {
    return undefined;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this._minStack.length) {
    const lastMinElemInfo = this._minStack[this._minStack.length - 1];
    return lastMinElemInfo.value;
  }
  return undefined;
};
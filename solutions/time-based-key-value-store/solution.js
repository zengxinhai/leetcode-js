/**
 * Initialize your data structure here.
 */
var TimeMap = function () {
  this.map = new Map();
};

/** 
* @param {string} key 
* @param {string} value 
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function (key, value, timestamp) {
  if (this.map.has(key)) {
    const timeArray = this.map.get(key);
    let inserted = false;
    for (let i = timeArray.length - 1; i >= 0; i--) {
      if (timeArray[i].timestamp === timestamp) {
        timeArray[i].value = value;
        inserted = true;
        break;
      } else if (timeArray[i].timestamp < timestamp) {
        timeArray.splice(i+1, 0, { timestamp, value });
        inserted = true;
        break;
      }
    }
    if (!inserted) {
      timeArray.unshift({ timestamp, value });
    }
    this.map.set(key, timeArray);
  } else {
    const timeArray = [{ timestamp, value }]
    this.map.set(key, timeArray);
  }
  return null;
};

/** 
* @param {string} key 
* @param {number} timestamp
* @return {string}
*/
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.map.has(key)) return null;
  console.log(this.map);
  const timeArray = this.map.get(key);
  let returnPos = -1;
  for (let i = 0; i < timeArray.length; i++) {
    if (timeArray[i].timestamp > timestamp) break;
    returnPos++;
  }
  if (returnPos < 0) return null;
  return timeArray[returnPos].value;
};

/**
* Your TimeMap object will be instantiated and called as such:
* var obj = Object.create(TimeMap).createNew()
* obj.set(key,value,timestamp)
* var param_2 = obj.get(key,timestamp)
*/
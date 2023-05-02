Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  } else {
    return this[this.length - 1];
  }
};
//!this.length 보다 this.length === 0이 훨씬 빠르다.

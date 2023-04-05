class Chronometer {
  constructor() {
    this.currentTime = 0,
      this.intervalId = null
  }

  start(printTimeCallback) {

    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (typeof printTimeCallback === 'function') {
        printTimeCallback();
      }
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return (this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    let stringArr = value.toString()
    if (stringArr.length > 2) { return null }

    if (stringArr.length === 1) {

      return (`0${stringArr.slice(-1)}`)
    }
    if (stringArr.length === 2) {
      return stringArr;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {

    this.currentTime = 0;

  }


  split() {
    let secs = this.computeTwoDigitNumber(this.getSeconds());
    let mins = this.computeTwoDigitNumber(this.getMinutes());
    let time = `${mins}:${secs}`
    return time;
  }
}

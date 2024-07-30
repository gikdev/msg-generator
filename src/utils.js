/**
 * Convert Eng-char nums to Fa-char nums
 * @todo write tests...
 * @param {string|number} number
 * @returns {string} the number with Persian characters
 */
function persianifyNumber(number) {
  return String(number)
    .replaceAll("0", "۰")
    .replaceAll("1", "۱")
    .replaceAll("2", "۲")
    .replaceAll("3", "۳")
    .replaceAll("4", "۴")
    .replaceAll("5", "۵")
    .replaceAll("6", "۶")
    .replaceAll("7", "۷")
    .replaceAll("8", "۸")
    .replaceAll("9", "۹")
    .replaceAll(".", "/")
}

/**
 * It's a Persian-compatible version of `Date`
 * @class PersianDate
 * @typedef {PersianDate}
 * @extends {Date}
 */
class PersianDate extends Date {
  toLocaleDateString = () => super.toLocaleDateString("fa-IR")
  getParts = () => super.toLocaleDateString().split("/")
  getDay = () => (super.getDay() === 6 ? 0 : super.getDay() + 1)
  getDate = () => this.getParts()[2]
  getMonth = () => this.getParts()[1] - 1
  getYear = () => this.getParts()[0]
  getMonthName = () => super.toLocaleDateString("fa-IR", { month: "long" })
  getDayName = () => super.toLocaleDateString("fa-IR", { weekday: "long" })
}

/**
 * Returns time in FA
 * @param {Date | string | null | undefined} input - Give a date obj, str to get that specific time or pass null / nothing to get current time...
 * @returns {string} - the time in FA
 */
function getTimeFa(input) {
  const now = new Date(input)
  const h = now.getHours()
  const m = now.getMinutes()
  const time = `${persianifyNumber(h > 9 ? h : `0${h}`)}:${persianifyNumber(m > 9 ? m : `0${m}`)}`
  return time
}

export { persianifyNumber, getTimeFa, PersianDate }

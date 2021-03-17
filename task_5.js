function getNumberOfDaysInMonth(month,year) {
  return new Date(year, month, 0).getDate();
}


module.exports.getNumberOfDaysInMonth = getNumberOfDaysInMonth
console.log(getNumberOfDaysInMonth(3,1997))
console.log(getNumberOfDaysInMonth(2,2021))

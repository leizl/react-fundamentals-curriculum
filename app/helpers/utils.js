var mapDays = {
  '0': 'Sunday',
  '1': 'Monday',
  '2': 'Tuesday',
  '3': 'Wednesday',
  '4': 'Thursday',
  '5': 'Friday',
  '6': 'Saturday'
};

var mapMonths = {
  '0': 'Jan',
  '1': 'Feb',
  '2': 'Mar',
  '3': 'Apr',
  '4': 'May',
  '5': 'Jun',
  '6': 'Jul',
  '7': 'Aug',
  '8': 'Sep',
  '9': 'Oct',
  '10': 'Nov',
  '11': 'Dec'
};

function convertDate(unixTimestmap) {
  var date = new Date(unixTimestmap * 1000);
  var day = mapDays[date.getDay()]
  var month = mapMonths[date.getMonth()] + ' ' + date.getDate();
  return day + ', ' + month;
}

module.exports = {
  convertDate: convertDate
}
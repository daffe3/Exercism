//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const WEEKDAYS = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

export const meetup = (year, month, week, dayOfWeek) => {
  const weekdayIndex = WEEKDAYS.indexOf(dayOfWeek);
  let startDay;

  switch (week) {
    case 'first':  startDay = 1; break;
    case 'second': startDay = 8; break;
    case 'third':  startDay = 15; break;
    case 'fourth': startDay = 22; break;
    case 'teenth': startDay = 13; break;
    case 'last': 
      startDay = new Date(year, month, 0).getDate() - 6; 
      break;
    default: throw new Error('Invalid week descriptor');
  }

  for (let i = 0; i < 7; i++) {
    const date = new Date(year, month - 1, startDay + i);
    if (date.getDay() === weekdayIndex) {
      return date;
    }
  }
};
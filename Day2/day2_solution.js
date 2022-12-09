// // 01/06 is January 6, Thursday. Count.
// // 04/01 is April 1, Friday. Count.
// // 12/25 is December 25, Sunday. Do not count.

const year = 2022;
const holidays = ["01/06", "04/01", "12/25"]; // format MM/DD
function countHours(year, holidays) {
  let additionalHours = 0;
  holidays.forEach((holidayDate) => {
    let holiday = new Date(year.toString() + "/" + holidayDate);
    if (holiday.getDay() > 0 && holiday.getDay() < 6) additionalHours += 2;
  });
  return additionalHours;
}

console.log(countHours(year, holidays)); // 2 days -> 4 extra hours in the year

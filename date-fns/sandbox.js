const now = new Date();

console.log(dateFns.isToday(now));

console.log(dateFns.format(now, 'YYYY'));

console.log(dateFns.format(now, 'MMMM'));

console.log(dateFns.format(now, 'dddd'));

console.log(dateFns.format(now, 'Do'));

//Comparing Dates
const before = new Date('February 1 2019 12:00:00');

//Distance between two dates in Words
console.log(dateFns.distanceInWords(now, before));

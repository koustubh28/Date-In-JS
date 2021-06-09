//Invoking Timestamps
const before = new Date('January 15 2021 06:52');
const now = new Date();

//Getting difference
const diff = now.getTime() - before.getTime();
console.log(diff);

//Timestamps are always in milliseconds from the first date of 1 jan 1970

const mins = Math.round(diff / 1000 / 60);
console.log(mins);

const hours = Math.round(mins / 60);
console.log(hours);

const day = Math.round(hours / 24);
console.log(day);

//Shows the type
console.log(typeof now);

//year, month, day, time
console.log("Full Year", now.getFullYear());
console.log("Month", now.getMonth());
console.log("Day", now.getDay());
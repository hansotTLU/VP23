const firstName = "Hans Oskar";
const lastName = "Trolla";
const dateValue = require("./date_et");
const timeValue = require("./time_et");
console.log("Programmi autor on " + firstName + " " + lastName);

let dateETNow = dateValue.dateETformatted();
let timeETNow = timeValue.timeETformatted();

console.log("Täna on " + dateETNow);
//console.log("Täna on tõesti " + dateValue.dateETformatted());
console.log("Kell on " + timeETNow);
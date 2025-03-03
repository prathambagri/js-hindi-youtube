// Dates

let myDate = new Date();
// console.log(myDate); // Output: 2023-02-20T14:30:
// console.log(myDate.toString()); // Output: Mon Feb 20 2023 14:30:00 GMT+0530
// console.log(myDate.toDateString()); // Output: Mon Feb 20 2023
// console.log(myDate.toTimeString()); // Output: 14:30:00 GMT+0530 (IST)
// console.log(myDate.toLocaleDateString()); // Output: 20/02/2023
// console.log(myDate.toISOString()); // Output: 2023-02-20T14:30:00.000Z
// console.log(myDate.toJSON()); // Output: 2023-02-20T14:30:00.000Z
// console.log(myDate.toLocaleString()); // Output: 20/02/2023, 14:30:00 GMT+053
// console.log(myDate.getTimezoneOffset()); // Output: -330

console.log(typeof myDate); // object

// let myCreatedDate = new Date(2025,0,23)
// let myCreatedDate = new Date(2025,0,23,5,3)
// let myCreatedDate = new Date("2025-01-23")
let myCreatedDate = new Date("01-23-2025")
// console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate =new Date();

console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time

newDate.toLocaleString('default',{
    weekday: "long",
});








const accountId=144553
let accountEmail="pratham@google.com"
var accountPassword="12345"
accountCity="jaipur"
// accountId=2 // not allowed

accountEmail="pb@pb.com"
accountPassword="2121211"
accountCity="kolkata"
let accountState;
console.log(accountId);

/* 
prefer not use var keyword
because of issue in block scope and functional scaope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
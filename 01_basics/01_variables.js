const accountId=14433
let accountEmail="hk23@gmail.com"
var accountPass="124"
city="Banglore"

// accountId=124 not allowed
accountEmail="hk2345@gmail.com"
accountPass="12890"
city="Haryana"
let accountState

/* not to use var
because of issue in block scope and functional scope*/
    
console.table([accountId,accountEmail,accountPass,city,accountState])
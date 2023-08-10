const password = '12345'
const validPassword = '123456'
var retry = 0;

if(password==validPassword) {
    console.log("Welcome!")
} else {
    console.log("Wrong password! Try Again")
}

if(password==validPassword) {
    console.log("Welcome!")
} else if(retry<3) {
    console.log("Try Again!")
    retry=retry++
} else {
    console.log("Limit!")
}

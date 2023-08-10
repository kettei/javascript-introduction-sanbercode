var carData = ["John",24,"Toyota","JOHN 1234",5000,false]

var carRegistration = [
{
    "nama": "John",
    "age": 24,
    "car": "Toyota",
    "carId": "JOHN 1234",
    "invoice": "5000",
    "isInvoice": false
},
{
    "nama": "Budi",
    "age": 22,
    "car": "Hondra",
    "carId": "BUDI 1234",
    "invoice": "3000",
    "isInvoice": true
}]
// Print all carRegistration
console.log(JSON.stringify(carRegistration))

// Print one of the carRegistration in array
console.log(JSON.stringify(carRegistration[1]))

// Print one of the key from carRegistration object in array
console.log(JSON.stringify(carRegistration[1].invoice))
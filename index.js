console.log("Hello everyone")

let number1 = 20

const number2 = 30

console.log(number1)

//BODMAS

//Mathematical Operations
let sum = number1 + number2 + number1 +10
let sub = number2 - number1 - 10
let mul = number1 * number2
let div = number2 / number1
let remainder = number2 % number1

console.log(sum, sub, mul, div, remainder)

//Conditional Operators
let price = 100

let orderedBefore = false

let ShouldGetDiscount = price > 50 && !orderedBefore
ShouldGetDiscount = price > 50 || !orderedBefore

if(ShouldGetDiscount == true)
    {
        console.log("You get a discount")
    }

let message1 = "You got a discount of : "
console.log(message1 + 10 +"%")

let discount = 10

//Template Syntax
//Back Ticks
// ${variable}
console.log(`You got a discount of : ${discount} %`)

let item1 = {
    name: "Laptop",
    price: "10000",
    stock: 10,
    specifications: {
        ram: "32GB",
        storage: "1TB",
    },
    available_colours: ["black", "white", "silver", "gold"]
}

let item2 = {
    name: "Mobile",
    price: "500",
    stock: 20,
    specifications: {
        ram: "16GB",
        storage: "128GB",
    },
    available_colours: ["black", "white", "silver", "gold"]
}

console.log(item1.price)
console.log(item1.specifications.storage)

//console.log(item1.price, item.name, item.specifications.storage)

//const colors = ["black", "white", "silver", "gold"]

//console.log(colors[2])

//console.log("length of array", colors.length)

//const cart = [item1, item2]

//function calculateTotal(){
//    let total = 0
//    for (let i = 0; i < cart.length; i++){
//        total = total + cart[i].price
//    }
//} 

//calculateTotal(10)

//Assignment T3
function fizzbuzz(numbers) {
for (numbers = 1; numbers < 16; numbers++) {

    if (numbers % 15 == 0) {
        console.log("FizzBuzz");
    } else if (numbers % 3 == 0 ) {
        console.log("Fizz");
    } else if (numbers % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(numbers);
    }
}
}
fizzbuzz(16)

//Week 3
window.addEventListener('load', function(event) {
    printText()
    printInputText()
    sendContactDetails()
//  console.log("page loaded", event)
})

function printText(){
    const button = document.getElementById('click-btn')
 // console.log(button)
    button.addEventListener('click', () => {
//  function code
        const login = document.getElementById('login')
        const company = document.getElementById('company')
        const website = document.getElementById('website')
        
//    const h1 = document.getElementById('title')
//    h1.innerHTML = "<p>My name is Aditya</p>"
//Adi Profile: adityar15
        fetch("https://api.github.com/users/samj2024")
        .then((response) => response.json())
        .then((data) => {
            console.log("data we received", data)
            login.innerHTML = data.login
            website.innerHTML = data.blog
            company.innerHTML = data.company
    })
    })
}

function printInputText()
{
    const fnInput = document.getElementById('fn-input')
    const spanText = document.getElementById('input-text')

    fnInput.addEventListener("input", (event) =>{
 //     console.log("event", event)
        const inputValue = fnInput.Value
        spanText.innerHTML = inputValue
    })
}

function sendContactDetails()
{
    const form = document.getElementById('contact-form')

//  console.log(form)

    form.addEventListener("submit", (event) => {
        event.preventDefault()

        const formData = new FormData(form)

        const data = Object.fromEntries(formData.entries())
    
        console.log("formData", data)
    })
}
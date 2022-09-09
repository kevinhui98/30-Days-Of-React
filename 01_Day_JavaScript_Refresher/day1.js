const arr = []
const array = ['kevin', 'hui', 21, true]
console.log(array.length)
console.log(array[0])
console.log(array[array.length / 2])
console.log(array[array.length - 1])
const mixedDataTypes = ['kevin', 'hui', 21, true, 3.14]
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0])
console.log(itCompanies[Math.floor(itCompanies.length / 2)])
console.log(itCompanies[itCompanies.length - 1])
for (const elements of itCompanies) {
    console.log(elements)
}
console.log(itCompanies.join(", ") + ' are bit IT companies')
console.log(itCompanies.includes('Slack'))
let Ocounter = 0
for (const companies of itCompanies) {
    company = companies.split('')
    for (const letter of company) {
        if (letter == "o" || letter == "O") Ocounter++
    }
    if (Ocounter >= 2) {
        console.log(companies)
    }
    Ocounter = 0
}
console.log(itCompanies.sort())
console.log(itCompanies.reverse())
console.log(itCompanies.slice(0, 3))
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length))
if (itCompanies.length % 2 == 0) {
    console.log(itCompanies.slice((itCompanies.length / 2) - 1, itCompanies.length / 2))
} else {
    console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2) + 1))
}
itCompanies.splice(0, 1)
if (itCompanies.length % 2 == 0) {
    itCompanies.splice((itCompanies.length / 2) - 1, itCompanies.length / 2)
} else {
    itCompanies.splice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2) + 1)
}
itCompanies.splice(itCompanies.length - 1)
itCompanies.splice()

//complete exercise lvl 1
//skiping exercise 2
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort())
//complete exercise 3
let input = prompt("enter your age!")
if (input > 17) {
    console.log('You are old enough to drive')
} else {
    console.log(`you are left with ${18 - input} years to drive`)
}
//skip exercise 1 too tedious
let key = prompt("grade? ")
switch (true) {
    case (key >= 80 && key <= 100):
        console.log("A")
        break;
    case (key >= 70 && key <= 89):
        console.log("B")
        break;
    case (key >= 60 && key <= 69):
        console.log("C")
        break;
    case (key >= 50 && key <= 59):
        console.log("D")
        break;
    case (key >= 0 && key <= 49):
        console.log("F")
        break;
}
//skip exercise 2 too tedious
//skip loops
//skipp object
//skip function
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python',
        'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}
function getPersonInfo(person) {
    const { firstName, lastName, age, country, job, skills, languages } = person
    console.log(`${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. he teaches ${skills}. he speaks ${languages}.`)
}
getPersonInfo(person)
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
products.forEach(i => {
    let { product, price } = i
    console.log(`The price of ${product} is ${price} euros.`)
})

let total = 0
products.forEach(i => {
    let price = i.price
    if ((typeof price) == typeof 1) {
        total += price
    }
})
console.log(total)
const priceList = products.map((i) => {
    let price = i.price
    return price
})
console.log(priceList)
//skip th rest of  reduce exercise
class NewPerson {
    constructor(firstName, lastName) {
        console.log(this)
        this.firstName = firstName
        this.lastName = lastName
    }
}
const Per = new NewPerson()
console.log(Per)
class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    getFullInfo() {
        const fullInfo = this.name + ' ' + this.age + ' ' + ' ' + this.color + ' ' + this.legs
        return fullInfo
    }
}
class dog extends Animal {
    constructor(name, age, color, legs, mood) {
        super(name, age, color, legs)
        this.mood = mood
    }
    saySomething() {
        console.log("child of animal")
    }
    set setMood(mood) {
        this.mood = mood
    }
}
const husky = new dog('husky', 1, 'white', '4')
console.log(husky)
husky.setMood = 'happy'
console.log(husky)

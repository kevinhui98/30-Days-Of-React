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


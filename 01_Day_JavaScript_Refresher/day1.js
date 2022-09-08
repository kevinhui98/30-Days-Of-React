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
//line 971
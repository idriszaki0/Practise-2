// function
function describeCountry(country, population, capitalCity) {
    return(`${country} has ${population} million people and its capital city is ${capitalCity}`)
}

const descMalaysia = describeCountry('Malaysia', 9, 'Kelantan');
const descUSA = describeCountry('United States', 20, 'New York');
const descFinland = describeCountry('Finland', 6, 'Helshinki');
console.log(descMalaysia, descUSA, descFinland);

// function declaration vs expression
function percentageOfWorld1(population){
    return(population / 7900) * 100
}
function percentageOfWorld2(population){
    return(population / 7900) * 100
}
const percMalaysia1 = percentageOfWorld1(9).toFixed(2)
const percChina1 = percentageOfWorld1(1441).toFixed(1) // Math.round(percentageOfWorld1(1441))
const percUSA1 = percentageOfWorld1(20)
console.log(percMalaysia1, percChina1, percUSA1);

const percMalaysia2 = percentageOfWorld2(18)
const percChina2 = percentageOfWorld2(1442)
const percUSA2 = percentageOfWorld2(40)
console.log(percMalaysia2, percChina2, percUSA2);

// arrow function
// percentageOfWorld3 = (population) => {
//     return(population / 7900) * 100
// }
// or use like this
const percentageOfWorld3 = population => (population / 7900) * 100

const percChina3 = percentageOfWorld3(2882)
console.log(percChina3)

// function callling other function
// function describePopulation(country, population) {
//     return (`${country} has ${population} million people, which is about ${percChina1}% of the world`)
    
// }
// this.percentageOfWorld1
// const popuChina1 = describePopulation('China', 1441)
// console.log(popuChina1)

const describePopulation = function (country, population) { // same as above
    const percentage = percentageOfWorld1(population).toFixed(1);
    const description = `${country} has ${population} million peoplem which is about ${percentage}% of the world`;
    console.log(description)
}
describePopulation('China', 1441)

// introduction to arrays
const newPopulations = [10, 20, 15, 6];
console.log(newPopulations.length === 4)
const newPercentage = [
    percentageOfWorld1(newPopulations[0]),
    percentageOfWorld1(newPopulations[1]),
    percentageOfWorld1(newPopulations[2]),
    percentageOfWorld1(newPopulations[3])
]
console.log(newPercentage)

const neighbours = ['Malaysia', 'Singapore', 'Thailand'];
neighbours.push('Utopia')
console.log(neighbours)
neighbours.pop()
console.log(neighbours)

if(!neighbours.includes('Germany')) {
    console.log('Probably not a European central country')
}

neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden';
console.log(neighbours)

// introduction to objects
const myCountry = {
    country: 'Malaysia',
    capital: 'Kuala Lumpur',
    language: 'Bahasa Melayu',
    population: '9',
    neighbours: 'Singapore, Thailand'
};
console.log(myCountry);
// dot vs bracket notation
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, 3 neighbouring countries and a capital called ${myCountry.capital}`)
myCountry.population += 2;
console.log(myCountry.population); 
myCountry['population'] -= 2;
console.log(myCountry.population)

// object methods
const myCountry1 = {
    country: 'Malaysia',
    capital: 'Kuala Lumpur',
    language: 'Bahasa Melayu',
    population: 9,
    neighbours: 'Singapore, Thailand',
    describe: function() {
        console.log(`${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`)
    },

    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
}
}
myCountry1.describe();
myCountry1.checkIsland();
console.log(myCountry1);

// iteration the for loop
let voter = "";
for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`)
}

// looping array, breaking and continuing
const population = [10, 20, 15, 6];
const percentages2 = [];
for (let i = 0; i < population.length; i++) {
    const perc = percentageOfWorld1(population[i]).toFixed(2);
    percentages2.push(perc);
}
console.log(percentages2)

// looping backwards and loops in loops
var listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for (var index = listOfNeighbours.length - 1; index >= 0; index--) {
    console.log(listOfNeighbours[index])
}
for (var index = 0; index < listOfNeighbours.length; index++) {
    console.log(listOfNeighbours[index])
}
for (var index = 0; index < listOfNeighbours.length; index++)
    for (var yndex = 0; yndex < listOfNeighbours[index].length; yndex++)
        console.log(`Neighbour: ${listOfNeighbours[index][yndex]}`);

// the while loop
const population3 = [10, 20, 15, 6];
const percentage3 = [];
let i = 0
while (i < population3.length) {
    const perc = percentageOfWorld1(population3[i])
    percentage3.push(perc);
    i++
    console.log(percentage3)
}
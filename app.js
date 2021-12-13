// values and variables
const country = 'Malaysia';
const continent = 'Asia';
let population = '9'; 
console.log(country);
console.log(continent);
console.log(population);

// data types
let isIsland = false;
let language = 'Bahasa Melayu';
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let,const adn var
language = 'English';
isIsland = true;

// basiic operators
console.log(population / 2);
population ++
console.log(population > 6);
console.log(population < 33);
// const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
// console.log(description);

// string and template literals
const description = `${country} is in ${continent} , and its ${population} million people speak ${language}`;
console.log(description);

// if else statements
if (population > 33) {
    console.log(`${country}'s' population is average `)
} else {
    console.log(`${country}'s population is ${33 - population} million'`)
}

// type conversion and coercion
let a = '9'- '5'; // true 4
let b = '19' - '13' + '17'; // 617
let c = '19' - '13' + 17; // 23
let d = '123' < 57 // false 
let e = 5 + 6 + '4' + 9 - 4 - 2; //1143
console.log(b)

// equality operators
// const numNeighbours = prompt('How many neightbour countries does your country have');
// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
// if (numNeighbours === 1) { // use === because is used for comparing data and also check the data type and compare the two values meanwhile == not compare value of variables at all
//     console.log('Only 1 border')
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border')
// } else {
//     console.log('No borders')
// }

// logical operators
if (language === 'English' && population < 50 && !isIsland ) // change language to false to live in malaysia
{
console.log(` you should live in ${country}`)
    
} else {
    console.log(`${country} does not meet your criteria`)
}

// switch statements
switch(language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
        default:
            console.log('Greate language too')
}

// the conditional(ternary) operator
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`,);


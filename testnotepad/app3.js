// Coding Challenge #1
// data 1
const Mark = {
  mass: 78, 
  height: 1.69
};
const John = {
  mass: 92,
  height: 1.95
};

const BMI1 = `${Mark.mass}` / `${Mark.height ** 2}`;
// const BMI2 = Mark.mass / (Mark.height * Mark.height)
const BMI2 = John.mass / John.height ** 2;
console.log(BMI1, BMI2)
// data 2
const Mark2 = {
  mass: 95,
  height: 1.88
};

const John2 = {
  mass: 85,
  height: 1.76
};

const BMI3 = Mark2.mass / Mark2.height ** 2;
console.log(BMI3.toFixed(2))
const BMI4 = John2.mass / John2.height ** 2;
console.log(BMI4.toFixed(2))

// Coding Challenge 2
if(BMI3 > BMI4 ) {
  console.log(`Mark's BMI ${BMI3} is higher than John's`)
} else {
  console.log(`John's BMI ${BMI4.toFixed(2)} is higher than Mark's`)
};

// Coding Challenge 3
const Dolphins = [96 + 108 + 89]; // 98
const Koalas = [88 + 91 + 110]; // 96
const averageDolphins = Dolphins / 3;
const averageKoalas = Koalas / 3;
if (averageDolphins > averageKoalas) {
  console.log('Dolphins Win')
} else if (averageKoalas > averageDolphins) {
  console.log('Koalas Win')
} else if (averageDolphins === averageKoalas) {
  console.log('Draw')
};

// bonus 1
const newDolphins = [97 + 112 + 101];
const newKoalas = [109 + 95 + 110];
if (newDolphins >= 100 && newDolphins === 100) {
  console.log(console.log("newDolphins win"))
} else {
  console.log('newKoalas win')
}

// bonus 2
const Dolphins2 = [97 + 112 + 101]; // 310
const Koalas2 = [109 + 95 + 106]; // 310
if (Dolphins2 >= Koalas2) {
  console.log("draw")
} else if (Dolphins2 != Koalas2) {
  console.log("not draw")
}

// Coding Challenge 4
const bill = 44;
const tip = bill >=50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`the bill was $${bill}, and the tip was $${tip} and the total value $${bill + tip}`)
// if(bill >= 50 && bill <= 300) {
//   console.log(`the bill was ${bill.bill1}, and the tip was $${275*0.15}`)
// } else {
//   console.log(`the bill was $${bill.bill2}, and the tip was $${50*0.2}`)
// }

// fundamental part 2
// Coding Challenge 1
const calAverage =(a, b, c) => (a + b + c) / 3
const scoreDolphins = calAverage(44, 23, 71)
const scoreKoalas = calAverage(65, 54, 49)
console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log(`Dolphine Wins ${scoreDolphins} vs ${scoreKoalas}`)
// } else {
//   console.log(`Koalas Wins ${scoreKoalas} vs ${scoreDolphins}`)
// }

const checkWinner = function(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins Wins ${scoreDolphins} vs ${scoreKoalas}`)
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas Wins ${scoreKoalas} vs ${scoreDolphins}`)
  } else {
    console.log('No team wins')
  }
}
checkWinner(scoreDolphins, scoreKoalas)
// test 2
const scoreDolphins2 = calAverage(85, 54, 41);
const scoreKoalas2 = calAverage(23, 34, 27);
console.log(scoreDolphins2, scoreKoalas2)

const checkWinner2 = function(avgDolphins2, avgKoalas2) {
  if (avgDolphins2 >= 2 * avgKoalas2) {
    console.log(`Dolphins2 Wins ${scoreDolphins2} vs ${scoreKoalas2}`)
  } else if (avgKoalas2 >= 2 * avgDolphins2) {
    console.log(`Koalas2 Wins ${scoreKoalas2} vs ${scoreDolphins2}`)
  } else {
    console.log('No team wins')
  }
}

checkWinner2(scoreDolphins2, scoreKoalas2);

// Coding Challenge 2
const calcTip = function(bills) {
  return bills >=50 && bills <= 300 ? bills * 0.15 : bills * 0.2
}

const bills = [125, 555, 44];
const tips = calcTip(bills[2]);
console.log(tips)
const totalValue = bills[2] + tips;
console.log(totalValue);

// Coding Challenge 3
// const bmi = mass / height ** 2
const pMark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2
    return this.bmi
  }
};
const pJohn = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass/ this.height ** 2
    return this.bmi
  }
};
pJohn.calcBMI();
pMark.calcBMI();
console.log(pMark.bmi.toFixed(2), pJohn.bmi.toFixed(2))
// const calcbmi1 = pMark.mass / pMark.height ** 2
// const calcbmi2 = pJohn.mass / pJohn.height ** 2
if (pJohn.bmi > pMark.bmi) {
  console.log(`${pJohn.fullName}'s BMI ${pJohn.bmi.toFixed(2)} is higher than ${pMark.fullName}'s BMI ${pMark.bmi.toFixed(2)}`)
} else if(pMark.bmi > pJohn.bmi) {
  console.log(`${pMark.fullName}'s BMI ${pMark.bmi.toFixed(2)} is higher than ${pJohn.fullName}'s BMI ${pJohn.bmi.toFixed(2)}`)
}


// Coding Challenge 4
const calcTips = function(billss) {
  return billss >=50 && billss <= 300 ? billss * 0.15 : billss * 0.2 // tip calculator
}

const billss = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipss = []
const total = []


for (let i = 0; i < billss.length; i++) {
  const tips = calcTips(billss[i]);
  tipss.push(tips);
  total.push(tips + billss[i]);
}
console.log(billss, tipss, total)
// Bonus
const calAverages = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
console.log(calAverages([22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]))

const calcAverage = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 8])) // can use this method too same like above
console.log(calcAverage(total))
console.log(calcAverage(billss))

// debug with console and breakpoints
const measureKelvin = function() { // function(in here we called 'argument')
  const measurement = {
    type: 'temp',
    unit: 'celcius',

    // C) FIX
    // value: Number(prompt('Degree celcius:'))
    value: 10,
  };
  // B) FIND
  console.table(measurement)

  // console.log(measurement.value)
  // console.warn(measurement.value)
  // console.error(measurement.value)
  
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin())
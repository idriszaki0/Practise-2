// Developer skills & Editor setup
data1 = [17, 21, 23];
data2 = [12, 5, -5, 0, 4];
// °C
console.log(`${data1[0]}°C in 1 days...${data1[1]}°C in 2 days...${data1[2]}°C in 3 days...`)

const printForecast = function(arr) {
    let temperature = ''
    for (let i = 0; i < arr.length; i++) {
        temperature = temperature + `${arr[i]}°C in ${i + 1} days, `;
    }
    console.log(temperature)
}
printForecast(data1)
printForecast(data2)
// console.log(printForecast([17, 23]))


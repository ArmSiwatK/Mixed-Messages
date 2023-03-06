const dataSet = require('./data.js');
const randomNumber1 = Math.floor(Math.random() * dataSet.data1.length);
const randomNumber2 = Math.floor(Math.random() * dataSet.data2.length);
const randomNumber3 = Math.floor(Math.random() * dataSet.data3.length);

function randomMessage() {
    console.log(`First message: ${dataSet.data1[randomNumber1]}`);
    console.log();
    console.log(`Second message: ${dataSet.data2[randomNumber2]}`);
    console.log();
    console.log(`Third message: ${dataSet.data3[randomNumber3]}`);
}

randomMessage();
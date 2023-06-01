const fs = require('fs');
const path = require('path');
const student = require('./man.json');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


// fs.writeFile('one.txt', 'I hope to meet your expectation', (err) =>{
//     if(err) console.log('Error!');
// });

//*
//*  case 1  запись json file
//*

// const man = {
//     name: 'Serhii',
//     age: 33,
//     department: 'Development',
//     car: 'bmw'
// }
//
// fs.writeFile('man.json', JSON.stringify(man), (err) =>{
//     if(err) console.log('Error!');
// });

//*
//*  case 2  читаем json file
//*

// console.log(student)

//*
//*  case 3  читаем CSV file
//*

const results = [];
// fs.createReadStream('table.csv')
//     .pipe(csv())
//     .on('data', (data) => results.push(data))
//     .on('end', () => {
//         console.log(results);
//
//     });

//*
//*  case 4  запись CSV file
//*

const csvWriter = createCsvWriter({
    path: 'test1.csv',
    header: [
        {id: 'name', title: 'NAME'},
        {id: 'age', title: 'AGE'},
        {id: 'department', title: 'DEP'},
        {id: 'car', title: 'CAR'}
    ]
});

const mens = [
    {
        name: 'Serhii',
        age: 33,
        department: 'Development',
        car: 'bmw'
    },
    {
        name: 'MMM',
        age: 18,
        department: 'Hook',
        car: 'vans'
    },
]
csvWriter.writeRecords(mens)       // returns a promise
    .then(() => {
        console.log('...Done');
    });

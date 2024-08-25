// alert('hello world');

// console.log(1);
// console.log(2);
// console.log(3);

// let age = 25;
// let year = 2024;
// console.log(age, year);

// age = 30;
// console.log(age);

// const points = 100;
// points = 50;
//we use const if we dont want the value to be overwritten.
//it gives the error "Assignment to constant variable"
// console.log(points);

// var score = 75;
// console.log(score);

//strings 
// console.log('hello, world');

// let email = 'mario@thenetninja.co.uk';
// console.log(email);
// string concatentation (joining things together)
// let firstName = 'Brandon';
// let lastName = 'Sanderson';
// let fullName = firstName + ' ' + lastName;

// console.log(fullName);
//getting characters
// console.log(fullName[2])
//string length
// console.log(fullName.length);
//string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result)

// let index = email.indexOf('@');
// console.log(index)

// let email = 'mario@thenetninja.co.uk'
// let result = email.slice(0,10)
// console.log(result)

// let result = email.substr(4,10)

// let result = email.replace('m', 'w')

// let result = email.replace('n','w')
// console.log(result)

// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi)

// math operators +, -, *, /, **, %
// console.log(10/2);
// let result = radius % 3;

// let result = pi * radius**2;

//order of operations - B I D M A S

// let result = 5 * (10-3)**2;
// console.log(result)

// let likes = 10;
// likes = likes + 1;
// likes++;
// likes--;

// likes +=10;
// likes -=5;
// likes *=2;
// likes/=2;

// console.log(likes)

// NaN - not a number
// console.log(5/ 'hello');
// console.log(5* 'hello');

// let result = 'the blog has ' + likes + ' likes';
// console.log(result)

// template strings
// const title = 'Best Reads of 2024';
// const author = 'Mario';
// const likes = 30;

//concatentaiton way
// let result = 'the blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result)

//template string way
// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result)
//creating html templates  
// let html = `
// <h2>${title}</h2>   
// <p>By ${author}</p>
// <span>This blog has ${likes} likes</span>
// `;
// console.log(html)

// let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'ken';
// console.log(ninjas[1])

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20]
// console.log(random)

// console.log(ninjas.length)

//array methods

// let result = ninjas.join(',')
// let result = ninjas.indexOf('chun-li')
// let result = ninjas.concat(['ken', 'crystal']);
// let result = ninjas.push('ken');
// result = ninjas.pop();  

// console.log(result);

// let age = null;

// console.log(age, age + 3, `the age is ${age}`);

//booleans & comparisons
// console.log(true, false, 'true', 'false');

//methods can return booleans 
// let email = 'luigi@thenetninja.co.uk';
// let names = ['mario', 'luigi', 'toad']

// let result = email.includes('!')
// let result = names.includes('bowser')

// console.log(result);

//comparison operators

// let age = 25;
// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age >= 25);

// let name = 'shaun';
// console.log(name == 'shaun');
// console.log(name == 'Shaun');
// console.log(name > 'crystal');
// console.log(name > 'Shaun')
// console.log(name > 'Crystal')

// let age = 25;

// loose comparison (different types can still be equal)

// console.log(age == 25); 
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

//stric comparison (different types can be equal)

// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');

//type conversion
// let score = '100';

// score = Number(score)
// console.log(score + 1);
// console.log(typeof score)

// let result = Number('hello');
// let result = String(50);   
// let result = Boolean(0); 
// let result = Boolean('0');

// console.log(result, typeof result);

//FOR LOOPS

// for (let i = 0; i < 5; i ++)
// {
//     console.log("in loop: ", i)
// }
// console.log("loop has finished");

//VIDEO 71 - FILTER METHOD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const scores = [10, 30, 15, 25,50 ,40 ,5];

// const filteredScores = scores.filter(score => {
//     return score > 20;
// });

// console.log(filteredScores);

// const users = [
//     {name: 'shaun', premium: true},
//     {name: 'yosh', premium: false},
//     {name: 'mario', premium: false},
//     {name: 'chun-li', premium: true}
// ];

// const premiumUsers = users.filter(user => { 
// return user.premium;
// });
//ABOVE FORMAT FOR MULTIPLE LINES, BELOW FOR ONLY ONE LINE
// const premiumUsers = users.filter(user => user.premium);

// console.log(premiumUsers);

//VIDEO 72 - MAP METHOD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const salePrice = prices.map(price => price / 2);
// console.log(salePrice);

// const products = [
//     {name: 'gold star', price: 20},
//     {name: 'mushroom', price: 40},
//     {name: 'green shells', price: 30},
//     {name: 'banana skin', price: 10},
//     {name: 'red shells', price :50}
// ];

// const saleProducts = products.map(product => {
//     if(product.price > 30){
//         return {name: product.name, price: product.price/2}
//     } else{
//         return product;
//     }
// });

//  console.log(saleProducts);

//VIDEO 73 - REDUCE METHOD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const scores = [10, 20, 60, 40, 70, 90, 30];

// const result = scores.reduce((acc, curr) => {
//  if(curr > 50){
//     acc++;
//  }
//  return acc;
// }, 0);

// console.log(result);

// const scores = [
//     {player: 'mario', score: 50},
//     {player: 'yoshi', score: 30},
//     {player: 'mario', score: 70},
//     {player: 'crystal', score: 60}
// ];

// const marioTotal = scores.reduce((acc, curr) => {
//  if(curr.player === 'mario'){
//     acc+= curr.score;
//  }
//  return acc;
// }, 0);

// console.log(marioTotal);

//VIDEO 74 - FIND METHOD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const scores = [10, 5, 0, 40, 30, 10, 90, 70];

// const firstHighScore = scores.find(score =>  score > 50);

// console.log(firstHighScore);

// VIDEO 75 - SORT METHOD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//example 1 - sorting strings
// const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

// names.sort(); 
// names.reverse();
// console.log(names);

//example 2 - sorting numbers
// const scores = [10, 50, 20, 5, 35, 70, 45];

// scores.sort();
// scores.reverse();
// console.log(scores);

//example 3 - sorting objects
// const players = [
//     {name: 'mario', score: 20},
//     {name: 'luigi', score: 10},
//     {name: 'chun-li', score: 50},
//     {name: 'yoshi', score: 30},
//     {name: 'shaun', score: 70}
// ];

// players.sort((a,b) => {
//  if(a.score > b.score){
//     return -1;
//  } else if(b.score > a.score){  
//     return 1;    
//  } else{
//     return 0;
//  }
// });
//ABOVE AND BELOW OUTPUT THE SAME VALUES
// players.sort((a,b) => b.score - a.score);

// console.log(players);

//VIDEO 76 - CHAINING ARRAY METHODS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const products = [
//     {name: 'gold star', price: 30},
//     {name: 'green shell', price: 10},
//     {name: 'red shell', price: 40},
//     {name:'banana skin', price: 5},
//     {name: 'mushroom', price: 50}
// ];

// const filtered = products.filter(product => product.price > 20);

// const promos = filtered.map(product => {
//     return `the ${product.name} is ${product.price / 2} pounds`;
// });

// const promos = products
//  .filter(product => product.price > 20)
//  .map(product => `the ${product.name} is ${product.price / 2} pounds`);

// console.log(promos);

//VIDEO 82 - DATES AND TIMES IN JAVASCRIPT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const now = new Date();
// console.log(now);

//years, months, days
// console.log('getFullYear: ', now.getFullYear());
// console.log('getMonth: ', now.getMonth());
// console.log('getDate: ', now.getDate());
// console.log('getDay: ', now.getDay());
// console.log('getHours: ', now.getHours());
// console.log('getMinutes: ', now.getMinutes());
// console.log('getSeconds: ', now.getSeconds());

//timestamps
// console.log('timestamp: ' , now.getTime());

//date strings
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());

//VIDEO 83 - TIMESTAMPS & COMPARISONS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const before = new Date('February 1 2019 7:30:59');
// const now = new Date();

// console.log(now.getTime(), before.getTime());

// const diff = now.getTime() - before.getTime();
// console.log(diff);

// const mins = Math.round(diff/ 1000 /60);
// const hours = Math.round(mins /60);
// const days = Math.round(hours /24);
// const weeks = Math.round(days /7);
// const months = Math.round(weeks /4);
// const years = Math.round(months /12);
// console.log(mins + ' minutes since Feburary 1st 2019 at 7:30:59am');
// console.log(hours + ' hours since Feburary 1st 2019 at 7:30:59am');
// console.log(days + ' days since Feburary 1st 2019 at 7:30:59am');
// console.log(months + ' months since Feburary 1st 2019 at 7:30:59am');
// console.log(years + ' years since Feburary 1st 2019 at 7:30:59am'); 

//converting timestamps into date objects
// const timestamp = 1675938474990;
// console.log(new Date(timestamp));

//VIDEO 84 - BUILDING A DIGITAL CLOCK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const clock = document.querySelector('.clock');

// const tick = () => {
//     const now = new Date();

//     const h = now.getHours();
//     const m = now.getMinutes();
//     const s = now.getSeconds();

//     const html = `
//     <span>${h}</span> :
//     <span>${m}</span> :
//     <span>${s}</span>
//     `;

//     clock.innerHTML = html;
// } 

// setInterval(tick, 1000);

//VIDEO 85 - DATE-FNS LIBRARY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const now = new Date();

// console.log(dateFns);

//VIDEO 86 - ASYNCHRONOUS JAVASCRIPT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//asynchronous code is code that can start now and finish later

//VIDE 87 - ASYNC CODE IN ACTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// console.log(1);
// console.log(2);

// setTimeout(()=> {
//     console.log("callback function fired.");
// }, 2000);

// console.log(3);
// console.log(4);

//VIDE 88 - WHAT ARE HTTP REQUESTS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//we make http requests to get data from another server

//VIDEO 89 - MAKING HTTP REQUESTS (XHR)

// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState)
//     if(request.readyState === 4){
//         console.log(request.responseText);
//     }
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// request.send();

//VIDEO 90 - RESPONSE STATUS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState)
//     if(request.readyState === 4 &&  request.status == 200){
//         console.log(request, request.responseText);
//     } else if(request.readyState === 4){
//         console.log('could not fetch the data');
//     }
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/');
// request.send();

//VIDEO 91 - CALLBACK FUNCTIONS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const getTodos = (callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         // console.log(request, request.readyState)
//         if(request.readyState === 4 &&  request.status == 200){
//             callback(undefined, request.responseText);
//         } else if(request.readyState === 4){
//             callback('could not fetch data', undefined);
//         }
//     });

//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//     request.send();

// };

// console.log(1);
// console.log(2);

// getTodos((err, data) => {
//     console.log('callback fired');
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// console.log(3);
// console.log(4);

//VIDEO 92 - JSON DATA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const getTodos = (callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         // console.log(request, request.readyState)
//         if(request.readyState === 4 &&  request.status == 200){
//             const data = JSON.parse(request.responseText);
//             callback(undefined, data);
//         } else if(request.readyState === 4){
//             callback('could not fetch data', undefined);
//         }
//     });

//     request.open('GET', 'todos.json');
//     request.send();

// };

// console.log(1);
// console.log(2);

// getTodos((err, data) => {
//     console.log('callback fired');
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// console.log(3);
// console.log(4);

//VIDEO 93 - CALLBACK HELL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const getTodos = (resource, callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         // console.log(request, request.readyState)
//         if(request.readyState === 4 &&  request.status == 200){
//             const data = JSON.parse(request.responseText);
//             callback(undefined, data);
//         } else if(request.readyState === 4){
//             callback('could not fetch data', undefined);
//         }
//     });

//     request.open('GET', resource);
//     request.send();

// };  

// getTodos('todos/luigi.json', (err, data) => {
//     console.log(data);
//     getTodos('todos/mario.json', (err,data) => {
//         console.log(data);
//         getTodos('todos/shaun.json', (err, data) => {
//             console.log(data);
//         })
//     })
// });

//VIDEO 94 - PROMISE BASICS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const getTodos = (resource) => {

//  return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         // console.log(request, request.readyState)
//         if(request.readyState === 4 &&  request.status == 200){
//             const data = JSON.parse(request.responseText);
//             resolve(data);
//         } else if(request.readyState === 4){
//             reject('error getting resource');
//         }
//     });

//     request.open('GET', resource);
//     request.send();

//  })

// };  

// getTodos('todos/luigi.json').then( data => {
// console.log('promise resolved: ', data);
// }).catch( err => {
//     console.log('promise rejected: ', err)
// });

//pomise example

// const getSomething = () => {
    
//     return new Promise((resolve, reject) => {
//         //fetch something
//         resolve('some data');
//         // reject('some error');
//     });

// };

// getSomething().then((data) => {
//  console.log(data);
// }, (err) => {
// console.log(err);
// });

// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

//VIDE0 95 - CHAINING PROMISES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const getTodos = (resource) => {

//     return new Promise((resolve, reject) => {
//        const request = new XMLHttpRequest();
   
//        request.addEventListener('readystatechange', () => {
//            // console.log(request, request.readyState)
//            if(request.readyState === 4 &&  request.status == 200){
//                const data = JSON.parse(request.responseText);
//                resolve(data);
//            } else if(request.readyState === 4){
//                reject('error getting resource');
//            }
//        });
   
//        request.open('GET', resource);
//        request.send();
   
//     })
   
//    };  
   
//    getTodos('todos/luigi.json').then( data => {
//    console.log('promise 1 resolved: ', data);
//    return getTodos('todos/mario.json');
//    }).then(data => {
// console.log('promise 2 resolved: ', data);
// return getTodos('todos/shaun.json');
//    }).then(data => {
//     console.log('promise 3 resolved: ', data);
//    }).catch( err => {
//        console.log('promise rejected: ', err)
//    });

//VIDEO 96 - THE FETCH API!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// fetch('todos/luigi.json').then((response) => {
//     console.log('resolved', response);
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch((err) => {
//     console.log('rejected', err);
// });

//VIDE0 97 - ASYNC & AWAIT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

fetch('todos/luigi.json').then((response) => {
    console.log('resolved', response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch((err) => {
    console.log('rejected', err);
});
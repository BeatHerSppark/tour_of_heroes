// // CALLBACK ST

// //read from api A
// //read from api B
// //a + b

// function readA(apiA, callback) {

// }
// function readB(apiB, callback) {

// }

// readA(apiA, function(dataA) {
//     readB(apiB, function(dataB) {
//         ...
//     })
// }
// } // callback hell

// let a,b, count=0;


// readA(apiA, function(dataA) {
//     count++:
//     if(count == 2) {
//         a + b;
//     }
// })

// readB(apiB, function(dataB) {
//     count++;
//     if(count == 2) {
//         a + b;
//     }
// })

// // PROMISES
// const pA = readA(pathA);
// pA.then(dataA => {});

// const pB = readB(pathB);
// pB.then(dataB => {});

// Promise.all(pA,pB).then((dataA, dataB) => {});


// // Observable / async/await
// const oA = readA(pathA);
// const oB = readB(pathB);
// concatAll(oA, oB).subscribe(a, b);

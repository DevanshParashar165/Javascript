//                               callback
// It is just a function that takes the another function as arguement , which then called when the rest of the initial function has finished.

// function doSomething(callback){
//     callback();
// }

// function sayHi(){
//     console.log("Hi!");
// };

// doSomething(sayHi);


// function judge(grade) {
//     switch (true) {
//         case grade == 'A':
//             console.log("You got an ", grade, " : amazing!");
//             break;
//         case grade == 'B':
//             console.log("You got an ", grade, " : amazing!");
//             break;
//         case grade == 'C':
//             console.log("You got an ", grade, " : amazing!");
//             break;
//         case grade == 'D':
//             console.log("You got an ", grade, " : amazing!");
//             break;
//         default:
//             console.log("An ", grade, " !what")

//     }
// }

// function getGrade(score, callback) {
//     let grade;
//     switch (true) {
//         case score >= 90:
//             grade = "A"
//             break;

//         case score >= 80:
//             grade = "B"
//             break;
//         case score >= 70:
//             grade = "C"
//             break;
//         case score >= 60:
//             grade = "D"
//             break;
//         default:
//             grade = 'F'
//             break;
//     }
//     callback(grade);
// }

// getGrade(89,judge);


//                                       Pomises
// This function need to parameters and both the parameters are callbacks (rsolve,reject)

//When resolve() is calle, the promise is preasumed to be successful.

// 

// const promise = new Promise((resolve,reject)=>{
//     // resolve("Success !");
//     reject("Oops....!!")
// }).then(value=>{
//     console.log(value);
//     return "We";
// }).then(value=>{
//     console.log(value);
//     return "can";
// }).then(value=>{
//     console.log(value);
//     return "chain";
// }).then(value=>{
//     console.log(value);
//     return "promises";
// }).then(value=>{
//     console.log(value);
// }).catch(value=>{
//     console.log(value)
// })

//                                       Async await


function saySomething(x){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve("Something "+x);
        },2000);
    });
}

async function talk(x) {
    const word = await saySomething(x);
    console.log(word);
}
talk(2);
talk(4);
talk(8);
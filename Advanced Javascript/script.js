// function sayHello(){
//     let you = prompt("What is your name?")
//     console.log("Hello "+you+"!")
// }

// sayHello();


// let varContainingFunction= function(){
//     let varInFunction = "I'm in a function";
//     console.log("hi there!",varInFunction);
// };

// varContainingFunction();

// function tester(para1,para2){
//     return para1 + " " + para2
// }

// const arg1 = "argument 1";
// const arg2 = "argument 2";
// console.log(tester(arg1,arg2));

// function addTwoNumbers(x,y){
//     console.log(x + y)
// }

// let a = parseInt(prompt("Enter the first number : "));
// let b = parseInt(prompt("Enter the Second number : "));

// let a = 20;
// let b = 30

// addTwoNumbers(a,b)

// let arr = [];
// arr.push("argument 1");
// console.log(arr)

// function addTwoNumbers(x=2,y=3){
//     console.log(x+y);
// }

// addTwoNumbers(4,8);
// addTwoNumbers();
// addTwoNumbers(10)

// Default arguments must be trailing arguments


//Arrow functions are great for sending functions around as parameters and using shorter notation



// let doingStuff = x => console.log(x);
// doingStuff(4);

// const arr = ["sqirrel","alpaca","buddy"]
// arr.forEach(e => console.log(e))



//     Spread Operator



// let spread = ["so","much","fun"];
// let message = ["Javascript","is",spread,"and","very","powerful"] 
// console.log(message)


// let spread = ["so","much","fun"];
// let message = ["Javascript","is",...spread,"and","very","powerful"] 
// console.log(message)

// function addTwoNumbers(x,y){
//     console.log(x+y);
// }

// let arr = [5,9]
// addTwoNumbers(...arr)

// function addFourNumbers(x,y,z,a){
//     console.log(x+y+z+a);
// }

// let arr = [5,9]
// let arr2 = [6,7]
// addFourNumbers(...arr,...arr2)


//    Rest Operator


// function someFunction(para1,para2){
//     console.log(para1,para2);
// }

// someFunction("hi","there!","How are you");


// function someFunction(para1,...para2){
//     console.log(para1,para2);
// }

// someFunction("hi","there!","How are you?");


//           Return function values


// function addTwoNumbers(x,y){
//         console.log(x+y);
//     }

// let result = addTwoNumbers(4,5)
// console.log(result)

// function addTwoNumbers(x,y){
//     console.log(x+y);
// }

// let result = addTwoNumbers(4)
// console.log(result)

// function addTwoNumbers(x,y){
//     return x+y;
// }

// let result = addTwoNumbers(4,5)
// console.log(result)

// let resultArr = [];

// for(let i = 0;i<10;i++){
//     let result = addTwoNumbers(i,2*i);
//     resultArr.push(result);
// }

// console.log(resultArr)


//              Returning with arrow function


// let addTwoNumbers = (x,y) => x+y;

// let result = (addTwoNumbers(12,15));
// console.log(result)

// let addTwoNumbers = (x,y) =>{
//     console.log("Adding......")
//     return x+y;
// }

// console.log(addTwoNumbers(12,17))

 
//                   Variable scope in functions 

//                    Local variables in functions


// function testAvailability(x){
//     console.log("Available here : " , x)
// }

// testAvailability("Hi!")
// console.log("Not available here : ", x);

// function testAvailability(){
//     let y = "Local variable"
//     console.log("Available here : " , y)
// }

// testAvailability()
// console.log("Not available here : ", y);

// function testAvailability(){
//     let y = "I'll return"
//     console.log("Available here : " , y)
//     return y;
// }

// let z = testAvailability()
// console.log("Outside the function : ", z)
// console.log("Not available here : ", y);

// function doingStuff(){
//     if(true){
//         var x = "local";
//     }
//     console.log(x);
// }
// doingStuff();

// function doingStuff(){
//     if(true){
//         console.log(x);
//         var x = "local";
//     }
// }
// doingStuff();

// function doingStuff(){
//     if(true){
//         console.log(x);
//         let x = "local";
//     }
// }
// doingStuff();

// function doingStuff(){
//     if(true){
//         const x = "local";
//     }
//     console.log(x);
// }
// doingStuff();


//                       Global Variables


// let globalVar = "Accessible everywhere!";
// console.log("Outside function : ", globalVar);

// function creatingNewScope(x){
//     console.log("Access to global vars inside function.",globalVar);
// }

// creatingNewScope("Some parameter");

// console.log("Still available : ", globalVar);


// To hide the global variable e have to create local variable ith the same name of global variable in that scope


// let x = "global";

// function doingStuff(){
//     let x= "local";
//     console.log(x);
// }

// doingStuff();
// console.log(x);

// let x ="global";

// function doingStuff(x){
//     console.log(x);
// }

// doingStuff("param")

// function confuseReader(){
//     x = "Guess my scope.......";
//     console.log("Inside the functon : ",x);
// }

// confuseReader();
// console.log("Outside the function : ",x);

//                   IIFE(Immediately invoked function expression)

// (function(){
//     console.log("IIFE!");
// })();

// (()=>{
//     console.log("Run rigth away");
// })();


//                              Recursive functions


// function getRecursive(nr){
//     console.log(nr);
//     if(nr>0){
//        getRecursive(--nr);
//     }
    
// }

// getRecursive(3);


// function getRecursive(nr){
//     if(nr>0){
//        getRecursive(--nr);
//     }
//     console.log(nr);
// }

// getRecursive(3);

// function logRecursive(nr){
//     console.log("Started function: ",nr);
//     if(nr>0){
//         logRecursive(nr-1);
//     }else{
//         console.log("done with recursion");
//     }
//     console.log("Ended function: ",nr);
// }

// logRecursive(3);

// function doOuterFunctionStuff(nr){
//     console.log("Outer function");
//     function doInnerFunctionStuff(x){
//         console.log(x+7);
//         console.log("I can access outer variables : ",nr);
//     }
// }
// doOuterFunctionStuff(2);

//                                Anonymous function

let functionVariable = function(){
    console.log("Not so secret though")
};

// functionVariable();

//                               Function callback

// function doFlexibleStuff(executeStuff){
//     executeStuff();
//     console.log("Inside doFlexibleStuff Function");
// }

// doFlexibleStuff(functionVariable);


//                                  setTime Functions

// let youGotThis = function(){
//     console.log("You're doing really well,'keep coding!");
// };

// // setTimeout(youGotThis,3000);
// setInterval(youGotThis,3000);

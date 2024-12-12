// function sayHello() {
//     alert("Hello World !")
// }
// document.write("<h1>This is my first javascript page</h1>");


// var pi=3.14;
// var person="are you GOD";
// var answer="Yes I am!";
// document.write(pi + "<br>");
// document.write(person + "<br>");
// document.write(answer + "<br>");

// function myFunction(){
//     var carname = "Welcome";
//     document.getElementById("demo").innerHTML=carname;
// }
// var num = 10;
// console.log(num);
// console.log(typeof(num));
// var num = false;
// console.log(num);
// console.log(typeof(num));
// var num = "Devansh";
// console.log(num);
// console.log(typeof(num));
// var num = null;
// console.log(num);
// console.log(typeof(num));
// var num = undefined;
// console.log(num);
// console.log(typeof(num));
// var numberArray = [1,2,3];
// var animals = new Array("cat","dog","mouse","lion");
// var person = {
//     name:"Barack"

// }
// function myFunction(){
// var person = {
//     firstname : "John",
//     lastname: "Doe",
//     id : 5566,
//     getinfo:function(){
//         return this.firstname + " " +this.lastname
//     }
// };
// document.getElementById("demo").innerHTML=person.getinfo();

// }

// var person={
//     name : 'Ramesh',
//     age : 30,
//     isMarried : true,
//     address : {
//         street : 'Vijay Nagar',
//         flatNo :201
//     }
// };
// console.log(person);

// var person2 = new Object();
// person2.name = 'Krishnkant',
// person2.age = 32,
// person2.isMarried = true;
// person2.address={};
// person2.address.street="nagar road";
// person2['address']['flatNO']=33;
// console.log(person2);

// var person ={
//     name : 'Jitendra Chauhan',
//     age:30,
//     isMarried:true,
//     child : 'cheeku',
//     getInfo : function(){
//     },
//     address : {
//         street :'Vijay nagar',
//         flatNO:201
//     }
// }

// console.log(person.name);
// document.write(person.name);
// document.write("<br>")
// document.write(person.age)

// function myFunction(){
//     var carName = "Volvo";
//     document.getElementById('demo1').innerHTML = typeof carName +" "+ carName
// }
// myFunction();
// document.getElementById('demo2').innerHTML = typeof carName

// var locales = {
//     europe : function(){
//         var myFriend = "Monique";
//         var france = function(){
//         var paris = function(){
//             console.log(myFriend);
//         };
//         paris();
//         };
//         france();
//     } 
// }

// locales.europe();

// function show(){
//     var a = "a is a local outer variable";
//     document.write(a + "<br>");
//     function disk(){
//         var b = "b is a local variable";
//         document.write(b + "<br>");

//     }
//     disk();
// }
// show();

// var myVar ="global";
// function check(){
//     var myVar = "local";
//     document.write(myVar);
// }

// var name = 'Krishan kant';
// function first() {
//     var a = 'Hello!';
//     Second();
//     var x = a + name;
//     console.log(x)
// }

// function Second() {
//     var b = 'Hi!'
//     third();
//     var z = b + name;
//     console.log(z)
// }
// function third() {
//     var c = 'Hey!'
//     var z = c + name;
//     console.log(z)
// }
// first();

var age = 20;
if(age>18){
    document.write("<b>You are eligible to vote</b>");
}
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

// var age = 20;
// if(age>18){
//     document.write("<b>You are eligible to vote</b>");
// }

// var grade = 'A';
// document.write("Entering switch block<br>");
// switch (grade) {
//     case 'A':
//         document.write("Good job<br>");
//         break;

//     case 'B':
//         document.write("Pretty Good<br>");
//         break;

//     case 'C' :
//         document.write("Passed<br>");
//         break;   
//     case 'D':
//         document.write("Not so good<br>");
//         break;

//     case 'F':
//         document.write("Failed<br>");
//         break;   
//     default:
//         document.write("Unknown grade<br>");
//         break; 
// }
// document.write("Exiting switch block");

// var i;
// for(i=0;i<3;i=i+1){
//     console.log(i)
// }

// var count;
// document.write("Starting Loop" + "<br>");
// for(count=0;count<10;count++){
//     document.write("Current Count : "+ count);
//     document.write("<br>")
// }
// document.write("Loop Stopped!");

// for(var i = 0;i<100;i++){
//     if(i%2==0){
//         console.log(i + " is an even number");
//     }
//     else{
//          console.log(i + " is an odd number");
//     }
// }

// var myArray = ["A","B","C"]
// for(var i = 0;i<myArray.length;i++){
//     console.log("The member of myArray in index "+i+" is "+myArray[i]);
// }
// var count = 0;
// document.write("Starting Loop<br>");
// while(count<10){
//     document.write("Current Count : " + count + "<br>")
//     count++;
// }

// document.write("Loop Stopped!");

// function myFunction(){
//     alert("Hello world");
// }

// function sayHello(name,age){
//     document.write(name + " is "+ age +" year old");
// }

// function add(a,b){
//     console.log(a+b);
//     document.write(a+b);
// }

// add(10,20);

// var res = mul(12,30);
// function mul(x,y){
//     return x*y;
// }
// document.write(`Addition is : ${res}`);

// const square = function(number){
//     return number*number;
// };
// const x = square(4);
// console.log(x);

// function myFunction(g1,g2) {
//     return g1/g2;
// }

// const value = myFunction(8,2);
// console.log(value);

// var add2 = (a,b)=>{
//     console.log(a+b);
// };

// add2(102,20);
// var add3 = (a,b)=> console.log(a+b);
// add3(30,20);

// var a = 100;
// var b = 13;
// var c = 10;
// var linebreak = "<br>";
// document.write("a + b - c = ")
// result = a+b-c;
// document.write(result);
// document.write(linebreak);

// document.write("a+b = ");
// result = a+b;
// document.write(result);
// document.write(linebreak);

// document.write("a-b = ");
// result = a-b;
// document.write(result);
// document.write(linebreak);

// document.write("a/b = ");
// result = a/b;
// document.write(result);
// document.write(linebreak);

// document.write("a%b = ");
// result = a%b;
// document.write(result);
// document.write(linebreak);

// function myFunction(){
//     var x = 5+5;
//     var y = "5"+5
//     var z="Hello"+5;
//     var demoP=document.getElementById("demo");
//     demoP.innerHTML= x + "<br>"+ y +"<br>" + z;
// }

// if("5"===5){
//     console.log("True")
// } else {
//     console.log("False")
// }

// if("5"==5){
//     console.log("True")
// } else {
//     console.log("False")
// }


// var a = 10;
// var b = 10;
// var linebreak = "<br>";

// document.write("(a,b)=> ");
// result = (a==b);
// document.write(result);
// document.write(linebreak);

// document.write("(a<b)=> ");
// result = (a<b);
// document.write(result);
// document.write(linebreak);

// let x = 6;
// let y = 3;
// console.log("x==10&&y>1 : " + (x==10&&y>1))
// console.log("x==6||y==5 : "+(x==6||y==5))
// console.log("!(x==y) : "+!(x==y))

// let age = prompt("Enter Your age : ")
// var votable = (age<18)?"Too young":"Old enough";
// console.log(votable)

var myCollection = [1,"meera maam",true,{name:"Sanjeev",age:30},function(name){console.log(name)},"abhishek","bacchan","amitabh","bacchan"]
console.log(myCollection)
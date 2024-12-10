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

var person = {
    firstname : "John",
    lastname: "Doe",
    id : 5566,
    getinfo:function(){
        return this.firstname + " " +this.lastname
    }
};
document.getElementById("demo").innerHTML=
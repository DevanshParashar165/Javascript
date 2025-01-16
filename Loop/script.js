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

car = ["Bughati","Nexon","Lamborgini"]
// let text=""
// for(let i=0;i<car.length;i++){
//     text+=car[i] + "<br>"
// }

// document.getElementById('demo').innerHTML= text

// person = {
//     fname:"John",
//     lname:"Doe",
//     age:25
// }

// for (let x in person){
//     text +=person[x] + '<br>';
//     console.log(text)
// }
// document.getElementById('demo').innerHTML= text

const numbers = [45,4,9,16,2];

let txt="";
for(let x in numbers){
    txt += numbers[x] + " ";
    console.log(txt )
}

let text=""

function myFunction(value){
    text+=value;
    console.log(text)
}

numbers.forEach(myFunction);

let tx=""

for (let x of car){
    tx += x + " "
    console.log(tx)
}
st= ""
let language = "Javascript"

for(let x of language){
   st += x ;
   console.log(st)
}

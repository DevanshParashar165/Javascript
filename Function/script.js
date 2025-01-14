function myFunction(){
    alert("Hello world");
}

function sayHello(name,age){
    document.write(name + " is "+ age +" year old");
}

function add(a,b){
    console.log(a+b);
    document.write(a+b);
}

add(10,20);

var res = mul(12,30);
function mul(x,y){
    return x*y;
}
document.write(`Addition is : ${res}`);

const square = function(number){
    return number*number;
};
const x = square(4);
console.log(x);

function myFunction(g1,g2) {
    return g1/g2;
}

const value = myFunction(8,2);
console.log(value);

var add2 = (a,b)=>{
    console.log(a+b);
};

add2(102,20);
var add3 = (a,b)=> console.log(a+b);
add3(30,20);

var a = 100;
var b = 13;
var c = 10;
var linebreak = "<br>";
document.write("a + b - c = ")
result = a+b-c;
document.write(result);
document.write(linebreak);

document.write("a+b = ");
result = a+b;
document.write(result);
document.write(linebreak);

document.write("a-b = ");
result = a-b;
document.write(result);
document.write(linebreak);

document.write("a/b = ");
result = a/b;
document.write(result);
document.write(linebreak);

document.write("a%b = ");
result = a%b;
document.write(result);
document.write(linebreak);

function myFunction(){
    var x = 5+5;
    var y = "5"+5
    var z="Hello"+5;
    var demoP=document.getElementById("demo");
    demoP.innerHTML= x + "<br>"+ y +"<br>" + z;
}

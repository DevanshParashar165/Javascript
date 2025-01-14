document.write("<h1 style=color:green;>View on Console</h1>")

console.log("Math.round : " + Math.round(4.6))
console.log("Math.round : " + Math.round(4.5))
console.log("Math.round : " + Math.round(4.4))
console.log("Math.ceil : " + Math.ceil(4.5))
console.log("Math.floor : " + Math.floor(4.5))
console.log("Math.ceil : " + Math.ceil(-4.5))
console.log("Math.floor : " + Math.floor(-4.5))
console.log("Math.truncate : " + Math.trunc(4.5))
console.log("Math.truncate : " + Math.trunc(-4.5))
console.log("Math.sign : " + Math.sign(-4.5))
console.log("Math.sign : " + Math.sign(4.5))
console.log("Math.sign : " + Math.sign(0))
console.log("Math.Pow : " + Math.pow(8, 2))
console.log("Math.sqrt : " + Math.sqrt(64))
console.log("Math.abs : " + Math.abs(-4.7))
console.log("Math.cos : " + Math.cos(1))
console.log("Math.sin : " + Math.sin(1))
console.log("Math.min : " + Math.min(0, 3, 6, 3, 5, 32))
console.log("Math.max : " + Math.max(0, 3, 6, 3, 5, 32))
console.log("Math.log2 : " + Math.log2(10))
console.log("Math.random : " + Math.random())
console.log("Math.random : " + Math.floor(Math.random()))
console.log("Math.random : " + Math.floor(Math.random() * 10))
console.log("Math.random : " + Math.floor(Math.random() * 100))
console.log("Math.random : " + Math.floor(Math.random() * 101))

rd = Math.random()

function getRndInteger(min, max) {
    return Math.floor(rd * (max - min)) + min;
}

console.log(getRndInteger(0, 9));

function getNewRndInteger(min, max) {
    return Math.floor(rd * (max - min + 1)) + min;
}

console.log(getNewRndInteger(0, 9));


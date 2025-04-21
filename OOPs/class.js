// class ClassName {
//     constructor(prop1,prop2) {
//         this.prop1=prop1;
//         this.prop2=prop2;
//     }
// }

// let obj =new ClassName("arg1","arg2");
// console.log(obj.prop1);
// console.log(obj.prop2);

// class Dog {
//     constructor(dogname,weight,color,breed) {
//         this.dogname = dogname;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }

// let dog =  new Dog("Javascipt",2.4,"brown","chihuahua")
// // console.log(dog.dogname);

// console.log(dog.dogname,"is a ",dog.breed," and weighs ",dog.weight,"kg")

                  
                                          //Classes
//There should be one constructor in class

// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }

// let p = new Person("Devansh","Parashar");
// console.log("Hi ",p.firstname);



// class Person{
//     constructor(firstname,lastname ){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }

// let p = new Person("Devansh");
// console.log("Hi ",p.firstname,p.lastname)



//                             Methods


// class Person{
//     constructor(firstname,lastname ){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     greet(){
//         console.log("Hi there ! I'am ",this.firstname)
//     }
// }

// let p =new Person("Devansh","Parashar")
// p.greet();

// class Person{
//     constructor(firstname,lastname ){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     greet(){
//         console.log("Hi there ! I'am ");
//     }
//     compliment(name,object){
//         return "That's a wonderful " + object + ","+name;
//     }
// }

// let p =new Person("Devansh","Parashar")
// let compliment =p.compliment("Harry","Hat");
// console.log(compliment);
// let x = p.greet()
// console.log(x)


//                           Properties


// class Person{
//     constructor(firstname,lastname ){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     greet(){
//         console.log("Hi there ! I'am ");
//     }
//     compliment(name,object){
//         return "That's a wonderful " + object + ","+name;
//     }
// }

// let p =new Person("Devansh","Parashar")


// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
// }

// let p =new Person("Devansh","Parashar")
// console.log(p.firstname)



// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//         if(firstname.startsWith("M")){
//             this.#firstname = firstname;
//         }else{
//             this.#firstname ="M"+ firstname;
//         }
//         this.#lastname = lastname;
//     }
// }

// let p =new Person("Devansh","Parashar")
// console.log(p.firstname)


//                          Getters and Setters
 
// class Person{
//         #firstname;
//         #lastname;
//         constructor(firstname,lastname){
//             this.#firstname = firstname;
//             this.#lastname = lastname;
//         }
//         get firstname(){
//             return this.#firstname= firstname;
//         }
//         set firstname(firsname){
//             this.#firstname = firsname;
//         }
//         get lastname(){
//             return this.#lastname= lastname;
//         }
//         set lastname(firsname){
//             this.#lastname =lastname;
//         }
//     }

//     let  p =new Person("Devansh","Parashar");
//     console.log(p.firstname="Devansh")


//                                    Inheritance


// class Vechile {
//     constructor(color,currentSpeed,maxSpeed) {
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }
//     move(){
//         console.log("Moving at ",this.currentSpeed);
//     }
//     accelerate(amount){
//         this.currentSpeed+=amount;
//     }
// }

// class Motorcycle extends Vechile{
//     constructor(color,currentSpeed,maxSpeed,fuel){
//         super(color,currentSpeed,maxSpeed);
//             this.fuel=fuel;
//     }
//     doWheelie(){
//         console.log("Drivimg on one wheel!");
//     }
// }

// let motor  = new Motorcycle("Black",0,250,"gasoline");
// console.log(motor.color)
// motor.accelerate(50);
// motor.move()


//                              Prototypes
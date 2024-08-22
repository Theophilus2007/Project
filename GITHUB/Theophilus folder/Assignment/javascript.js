// console.log("Hello World")

// var Name = "javascript class"
// console.log(Name);

//  let color ="yelow";
// let lastName ="Johnson";

// let length =16;
// let weight =7.5;

// let x = true;
// let y =false;

// const person = {firstName:"John", lastName:"Doe"};

// const cars = ["Sabb","Volvo","Bmw"];
// const date = new Date("2024-08-05");

// console.log(color);
// console.log(lastName);
// console.log(weight);
// console.log(length);
// console.log(x,y);
// console.log(person);
// console.log(date);
// console.log(cars);

// var a = 2;
// var b = 3;

// console.log(a+b)//addition
// console.log(a-b)//subtraction
// console.log(a/b)//division
// console.log(a*b)//multiplication
// console.log(a**b)//exponential
// console.log(b%a)//module
// console.log(++a)//increment
// console.log(a--)//decrement

// //Assignment Operators
// var num = 3 //assignment
// var num2 =4 //assignment

// console.log(num += num2)
// console.log(num -= num2)
// console.log(num /= num2)
// console.log(num %= num2)
// console.log(num *= num2)

// //comparison operators
// var a=20
// var b = 30
// var c = "30"
// console.log(a==b); //true
// console.log(a===b); //false
// console.log(a!=b); //true
// console.log(a!==c); //false
// console.log(a>b); //true
// console.log(a<b); //false
// console.log(a>=b);//true
// console.log(a<=b); //false

// //Logical Operators
// var t = true;
// var f = false;
// //AND OPERATORS
//     console.log(t && f) //false
//     console.log(t && t) //true
//     console.log(f && f) //false

//     //OR OPERATORS
//     console.log(t || f) //true
//     console.log(t || t) //true
//     console.log(f || f) //false

//     //NOT OPERATORS
//     console.log(!f) //true
//     console.log(!t) //false

//     //TYPE OPERATORS 
//     var Name = "Quadri"
//     var age = 14
//      var list = [12, 18, 27]
//     var bool = true
//     var obj = {fname: "ade", lname:"ola"}

//     console.log(typeof (Name))
//     console.log(typeof(age))
//     console.log(typeof(list))
//     console.log(typeof(bool))
//     console.log(typeof(obj))
   
//     function myfunction(){
//         console.log("This is a function")
//     }
//     myfunction()

//     function add(a,b){
//         console.log(a+b);
//     }
//     add(10, 30)

//     function greeting(greet){
//         console.log(greet)
//     }
//     greeting("No Go Far My Brother.... okay...")

//     var ab = "No Go Far My Brother Okay" // global variable
    
//     function variable(){
//         var ba = "World"; //local variable
//         console.log(ab)
//     }
//     console.log(ba)
//     variable()
function valform(){
var div1 = document.getElementById("").value;
var lname = document.getElementById("lname").value;
var email = document.getElementById("email").value;
var gender = document.getElementById("gender").value;
var age = document.getElementById("age").value;

var header = document.getElementById("h3").innerHTML;
if(fname==='' || lname==='' || email==='' || password==='' || age==='' || gender===''){
    alert("you cannot submit an empty value");
    return false;
}
else{
    alert("form successfully registered");
    return true;
}

}
// //var userAge = prompt("Enter Your age:")
//   //  if(userAge >= 18){
//     //    console.log("You are eligible to register");
//     //}
//     //else{
//       //  console.log("You are not Eligible to Register");
//         //}  
        
//         // var score = prompt("Enter your Grade");
//         // if(score<40){
//         //     console.log("your grade is F");
//         // }
//         // else if(score>=40 && score<45){
//         //     console.log("your grade is E");
//         // }
//         // else if(score>=45 && score<50){
//         //     console.log("your grade is D");
//         // }
//         // else if(score>=50 && score<55){
//         //     console.log("your grade is CD");
//         // }
//         // else if(score>=55 && score<60){
//         //     console.log("your grade is C");
//         // }
//         // else if(score>=60 && score<65){
//         //     console.log("your grade is BC");
//         // }
//         // else if(score>=65 && score<70){
//         //     console.log("your grade is B");
//         // }
//         // else if(score>=70 && score<75){
//         //     console.log("your grade is AB");
//         // }
//         // else if(score>=75 && score<80){
//         //     console.log("your grade is A");
//         // }
//         // else if(score>=80 && score<85){
//         //     console.log("your grade is A+");
//         // }
//         // else if(score>=85 && score<90){
//         //     console.log("your grade is A+*");
//         // }
//         // else if(score>=90 && score<95){
//         //     console.log("your grade is A+**");
//         // }
//         // else if(score>=95 && score>=100){
//         //     console.log("your grade is A***");
//         // }
//         // else{
//         //     console.log("Unable to generate your score visit the admin officer for your result");
//         // }

//         // for(var i = 0; i<5; i++){
//         //     console.log('Theophilus')
//         // }

//         var student = {Name:"Theophilus", Age : 22,
//             Department: "Computer Science"}
//         for(var key in student){
//             console.log(key)
//         }


//         var list = ["car","life","church","school"
//         ]
//         var str = "Moor tech students"
//         for(var i of str){
//             console.log(i)
//         }

// for(var m of list){
//     console.log(m)
// }
        
function ChangeColor(){
    document.getElementById("demo").style.color ="Gold"
    document.getElementById("return").style.color ="black"
    document.getElementById("demo").style.textTransform = "lowercase"
      document.getElementById("demo").style.textDecoration= "underline"
}
var num = document.getElementById("num")
setInterval(function(){
    Number(num.innerHTML++)
},1000)


function wrt(){
    var inp = document.getElementById("inp").value;
    para = document.getElementById("p1").innerHTML = inp;
}
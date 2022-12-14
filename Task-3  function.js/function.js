//all function and function type

 //1)normal/regualr function
   //i)function declarion
     //   1)function without parameters

    //eg.1)
    function  message(){
         console.log("Hello world");
     }
     message();

    //eg.2)
     //function add(){
        // let a=10,b=20;
         //console.log("addtion of two number is:" +(a+b));
     //}
     //add();

    //eg.3)
     function mult(){
         let x=5,y=10;
         console.log("multiplication of two number is:"+(x*y));
     }
     mult();

    //eg.4)
       function sub(){
           let num1=Number(prompt("Enter the first number"));
           let num2=Number(prompt("Enter the second number"));
           console.log("Substraction of two number is:"+(num1-num2));
       }
       sub();

    //eg.5)
     function div(){
         let num1=+(prompt("Enter  the first number"));
         let num2=+(prompt("Enter the second number"));
         console.log(`Divistion of Two number is ${num1/num2}`);
     }
     div();

    //   ------------------------------------------------------------------------------------

     //Q2)function with parameters
    //  eg .1
    //  function message(msg){
    //      console.log("Print the message:"+(msg));
    //  }
    //  message("hello world");

    //  eg.2
    // function add(num1,num2){
    //     console.log("Addtion of two number is: "+(num1+num2));
    // }
    // add(20,40);

    //  eg.3
    //   function sub(num1,num2){
    //    console.log("Substraction of two number is:" +(num1-num2));
    //   }
    //    div(40,10);

    //  eg.4
    // function multi(a,b){
    //     console.log("Multiplication of two number is: "+(a*b));
    // }
    // multi(40,40);
    
    //  eg.5
    // function div(num1,num2){
    //     console.log("Divistion of two number is:" +(num1/num2));
    // }
    // div(50,10);

// ---------------------------------------------------------------------------------------
//Q3) default parameters 
// // without parameters
//     function  defaultfun(){
//        let msg="hello world";
//        console.log("Print the message :" +msg);
//     }
//     defaultfun();

//     // with parameters
//     function  default_add(a,b=20){
//         console.log(`Print addtion of default parameter: ${a+b}`);
//      }
//      default_add(50);
 
// -----------------------------------------------------------------------------------

// 4.) 1)function without parameters  with return statement<br>
// function  parameters with return statement

// eg .1
// function message(){
//     let msg=prompt("enter the message");
//     return msg;
// }
// console.log("print the message:" +(message()));
//   eg .2
// function add(){
//     let num1=10,num2=20;
//     return num1+num2; 
// }
// let sum=add();
// console.log("Addtion of Two number is:"+(sum));


//   eg .3
// function multi(num1,num2){
//     return num1*num2; 
// }
// let multiplication=multi(50,10);
// console.log("Multiplication two number is:" +(multiplication));

// eg 4
// function sub(a,b){
//     return a-b; 
// }
// console.log("Substraction two number is:" +(sub(50,10)));


// eg 5
// function div(){
//     let num1=+(prompt("enter the first number"));
//     let num2=+(prompt("enter the second number"));
//     return num1/num2;
// }
// console.log("Divistion of two number is:"+(div()));

// ----------------------------------------------------------------------------

// ***************************************************************************
// ANONYMOUS FUNCTION (function Expression)

// eg.1
//   const message =function(){
//       let msg="hello world";
//       console.log("print the message:"+msg);
//   }
//   message();

//eg.2
//   const add= function(){
//     let num1=50,num2=20;
//     return num1+num2;
// }
// console.log("Addtion of Two number is:"+(add()));

//eg.3
// const  multi= function(){
//     let num1=+(prompt("enter the first number"));
//     let num2=+(prompt("enter the second number"));
//     return num1*num2;
// }
// console.log("multiplication of Two number is:"+(multi()));

// eg.4
// const  div= function(a,b){
//     return a/b;
// }
// let Divistion=div(50,10);
// console.log("Divistion of Two number is:"+(Divistion));


// eg.5
// const  sub= function(a,b){
//     return a-b;
// }
// console.log(`Substraction of Two number is:${sub(30,10)}`);

// -----------------------------------------------------------------------

// FAT ARROW FUNCTION 
// 1)parameterized arrow function 

// eg 1

// const sum =(a,b)=>{
 //console.log("Addtion of two number is:" +(a+b));
 //};
 //sum(20,50);

// 2)arrow function(without parameters)
//sub();

// 3)arrow function(with parameters and return statement)
// const multi = (a,b) =>{
//   return a*b;
// }
// let multiplication=multi(10,10);
// console.log(`Multiplication of two number is:${multiplication}`);

// 4)arrow function(without curly braces)
// const message =(msg) => console.log("Print the message:"+(msg));
// message("hello world");

// // 5)arrow function(without parenthesis)
// const print_msg =msg => console.log("Print the message:"+(msg));
// print_msg("How are you");


// -------------------------------------------------------------

// 2)IIFE(FUNCTION Expression) 
// Immediately involed function Expression
// eg 1
// ((msg)=>{
// console.log("print the msg:"+(msg));
// })("Hello word!");

// eg 2
// ((a,b)=>console.log("Mutiplication of two number is:"+(a*b)))(10,10);

// eg 3
// (()=>{
//     let rollno=25;
//     console.log("Roll number of student is:"+rollno);
// })();
 
// eg 4
// ((studname)=>{
//     console.log(`student name is:${studname}`);
// })("sonali");

// eg 5
// (()=>{ 
//     let courseName="MERN STACK";
//     console.log(`Course name is:${courseName}`);
// })();

// -------------------------------------------------------------

// function with  three parameters 
// function sum(num1=10,num2=20,num3=30){
//     if(typeof num1!="number"){
//         // return "Please Enter a valid Number: + (num1)";
//         alert("Please enter the valid number");
//     }
//     console.log("Addtion of Three Numbers is:" +(num1+num2+num3));
// }
// sum();



// function with three parameters and return  statement
// function mult(num1=5,num2=6,num3=7){
//     if(typeof num1!="number"){
//         // return "Please Enter a valid Number: + (num1)";
//         alert("Please enter the valid number");
//     }
//     return num1*num2*num3;  
// }
// let Multiplication=mult();
// console.log("Multiplication of Three Numbers is:" +(Multiplication));



const add=(num1,num2)=>{
    return num1+num2;

}
let Addtion=add(20,30);
console.log("Addtion of two number is:"+(Addtion));

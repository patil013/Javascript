// Types of variables in js
//1).var

var myname="Bhakti";
 var myname="patil";
 console.log(myname);
 
 //2).let
 let Name="Bhakti";
 let myfriendname = Name ;
 
 console.log(Name);
 console.log(myfriendname);



// checking globle scope and block scope in var and let

// {
//     var flower="Rose";
//     let myfavfruit = "mango";
//     console.log(myfavfruit); 
// }
// // console.log(myfavfruit); 
// console.log(flower); 

// let myfavcolor="pink";
// {
//   var myfavdish="pizza";
// console.log(myfavdish);
// console.log(myfavcolor);
// }
// console.log(myfavcolor);
// console.log(myfavdish);

//3).const

// const PI=3.14;
// // const PI=3.14;
// // PI=28;
// fixedvalue=PI;
// console.log(fixedvalue);
// console.log(PI);

// const block scope
// const animal="cat";
// const bird="peacock";
// {
//     // const animal="cat";
//     // const bird="peacock";
//     console.log(animal);
//     // console.log(bird);
// }
// console.log(bird);



// 1)
// let admin;
// let Name="john";
// admin=Name;
// alert(admin);


// i) 2)
let planet="earth";
let myPlanet="earth";
console.log(planet);
console.log(myPlanet);

// ii)
let currentvistor="Biradar sir ";
console.log(currentvistor);


// 3)
const birthday="28/11/2001";
console.log(birthday);
const BIRTHDAY="28/11/2001";
console.log(BIRTHDAY);




// external js link
alert("This is external js link");

// this used with let keyword
// let x=10;
// let y=x*2;
// console.log(x);
// console.log(y);

// this is not used variable
//  x=20;
//  y=x*2;
// console.log(x);
// console.log(y);

// we can use " user strict" mode
//"use strict";

  let x=10;
 let y=x*2;
 console.log(x);
 console.log(y);
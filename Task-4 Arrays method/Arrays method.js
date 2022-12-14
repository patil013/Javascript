//console.log("creating Array")
//let number=[10,20,30,40]
//console.log('length of array is:${number.length}');

//Arrays methods
//Push method
//eg.1)
console.log("push method")
let fruits=["apple", "banana", "mango"];
console.log(fruits);
let newfruits=fruits.push("orange");
console.log(fruits);

//eg.2)
let friends=['ajay','vijay','vinayak'];
console.log(friends);
let newfriends=friends.push('megh');
console.log(friends); 

//Unshift
//eg.1
let numbers=['10','20','30','40'];
console.log(numbers);
let addnumbers=numbers.unshift('5');
console.log(numbers);

//eg.2
let color=["pink","red","blue","white"];
console.log(color);
let addcolor=color.unshift("purple");
console.log(color);

//pop
//eg.1
let friend=['megh','bhakti','vinu'];
console.log(friend);
let removefriend=friend.pop('');
console.log(friend);
//eg.2
let friendship=['colourful','mindblowing','memorable'];
console.log(friendship);
let newfriendship=friendship.pop('');
console.log(friendship);

//shift
//eg.1)
let colours=["red","pink","black"];
console.log(colours);
let newcolours=colours.shift();
console.log(colours); 
//eg.2)
let colour=["orange","green","yellow","white"];
console.log(color);
let newcolour=color.shift("");
console.log(color);

//modifying array method
//1)splice
//eg1).
let fruit=['banana','mango','orange','corn'];
console.log(fruit);
let favfruit=fruit.splice(1,2,'grephs');
console.log(fruit);
//eg2).
let sub=["java","php","cpp","html"];
console.log(sub);
let mycoursesub=sub.splice(0,4,"javascript");
console.log(sub);

//2)slice
//eg1)
let favsub=["c","cpp","html","css","angularjs"];
console.log(favsub);
let myfavsub=favsub.slice(1,0);
console.log(favsub);


//3) fill
//eg1)
let Name=['bhakti','varsha','arati'];
console.log(Name);
console.log(Name.fill('bhakti'));
//eg2)
let myName=['yash','veera','meera'];
console.log(myName);
console.log(myName.fill('yash'));

//4)tostring
//eg1)
let flower=['rose','lotus','jai','jui']
console.log(flower);
console.log(flower.toString());
//eg2)
let favflower=['rose','lotus','jai','jui']
console.log(favflower);
console.log(favflower.toString());

//5)join
//eg1)
let clg=['SMS','KBP','JSPM','KJ'];
console.log(clg);
console.log(clg.join(" "));
//eg2)
let myclg=['SMS','KBP','JSPM','KJ'];
console.log(myclg);
console.log(myclg.join(" "));

//serching and sorting method
//1) sort()
//eg1)
let stringValue=["sona","dipa","sayli"];
console.log(stringValue);
console.log(stringValue.sort());
//eg2)
let string=["sona","dipa","sayli"];
console.log(string);
console.log(string.sort());

//2)reverse
//eg1)
let stringValues=["sona","dipa","sayli","rupa"];
console.log(stringValues);
console.log(stringValues.sort());
//eg2)
let classNames=["sakshi","tina","dipa","rupa"];
console.log(classNames);
//console.log(classNames.sort());
console.log(classNames.reverse());

//3) include
//eg1)
let food=["noodles","pizza","eggrice"];
console.log(food);
console.log(food.includes("pizza"));
//eg2)
console.log(food.includes("maggie"));
console.log(" ");

//4)indexof
let favFood=["pizza","roti","maggie","eggrice"];
console.log(favFood);
console.log(favFood.indexOf("eggrice"));

// eg 2
console.log(favFood.indexOf("bhel"));
console.log(" ");

//4) Static Array method 
   //1)Array.of
   let myNames=Array.of("sona","dipa","rupa");
  console.log(myNames);
  //eg 2
  let animals=Array.of("dog","cat","pig","goat",1);
  console.log(animals);

// 2) Array.from 
//eg 1
  let favName=("yashu");
  console.log(favName);
  console.log(Array.from(favName));
  //eg2)
  let animal=("cat");
  console.log(animal);
  console.log(Array.from(animal));

//3)Array isArray
//eg1)
console.log(Array.isArray(["siya","kiran","diya"]));
console.log(Array.isArray("radha"));
console.log(" ");

// 5) Array Iterrator Method 
//1) every method
//eg1)
let price=[100,78,60,80,45,20];
console.log(price);
const checkprice=price.every((currentvalue,index)=>{
      return currentvalue >30;
});
console.log(checkprice);

//2) some method
let prices=[25,78,59,40,98,67];
console.log(prices);
const newprices=prices.some((currentvalue)=>{
    return currentvalue >78;
});
console.log(newprices);
console.log(" ");

//3) find 
//eg1)
let studMark=[45,90,78,56,59,95];
console.log(studMark);
const checkstudMark=studMark.find((currentvalue)=>{
     return currentvalue >70;
});
console.log(checkstudMark);
console.log(" ");

//4) filter 
//eg1)
let studMarks=[45,90,78,56,59,95];
console.log(studMarks);
const checkstudMarks=studMark.filter((currentvalue)=>{
     return currentvalue >70;
});
console.log(checkstudMarks);

const mobile=[
    {
        brand:"vivo",
        model:"vivo 30",
        price:"15000",
    },
    {
        brand:"mi",
        model:"8 pro",
        price:"40000",
    },
    {
        brand:"oppo",
        model:"opp0 30",
        price:"20000",
    },
    {
        brand:"mi",
        model:"6 pro",
        price:"30000",
    },
    {
        brand:"vivo",
        model:"vivo 20",
        price:"8000",
    }
];

const mimobile=mobile.filter((mobile)=>{
    //   console.log(mobile);
         if(mobile.brand === "mi"){
             return true ;
         }
});
console.log(mimobile);
console.log(" ");

// 5) map 
console.log("map method");
let numArray=[30,78,56,98,58];
console.log(numArray);
const mapnum=numArray.map((currentvalue)=>{
         return currentvalue *2;
});
console.log(mapnum);
console.log(" ");

// 6) foreach 
console.log("for each method");
let numArrays=[47,89,30,78,56,98,58];
console.log(numArrays);
const mapnums=numArrays.forEach((currentvalue)=>{
         console.log(currentvalue+2);   
});
console.log(" ");
// eg 2
console.log("reduce method");

let numReduce=[2,4,7,5];
const totalnum=numReduce.reduce((total,number)=>{
     sum=total+number;
     return sum;
});
console.log(totalnum);


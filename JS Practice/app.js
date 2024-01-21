let para = document.createElement('p');
para.innerHTML = "(: Learning JavaScript :)";
para.classList.add('para');
document.querySelector('body').prepend(para);


// // Object Literals
// const college = {
//   name: "Chandigarh University",
//   estd: 2012,
//   stdCnt: 65000
// };

// const product = {
//   name: "fruits",
//   weight: 10,
//   colors: ["pink", "yellow", "orange"]
// };



// Practice Problems
// const post = {
//   username: "@raviranjan_143",
//   content: "Video Creator",
//   likes: "100k",
//   repost: 840,
//   tags: ["@cuians", "@davians", "@chandigarh", "@jharkhand", "@mohali"]
// };

// // how to access object literals
// post.username;
// post.content;
// post["likes"];
// let prop = "repost";
// post[prop];



// const obj = {
//   1: "a",
//   2: "b",
//   true: "c",
//   null: "d",
//   undefined: "e"
// };


// // obj[] firstly convert the keys to sting to get the values declared in object
// obj[1];
// obj[2];
// obj[null];
// obj[true];
// obj[undefined];
// obj.null;
// obj.undefined;
// obj.true;
// obj[1]; //it can't be accessed because "." is unable to convert the keys to string
// obj[2]; //same as avove


// // updating, deleting and creating new key pairs in same object
// const student = {
//   name: "Ravi Ranjan",
//   age: 23,
//   marks: 95.4,
//   city: "Mohali"
// };

// student.city = "Chandigarh"; //Updating
// student.marks = "A";
// student.gender = "Male"; //Creating
// delete student.marks; //deleting


// // Nested Object
// const collegeInfo = {
//   Ravi:{
//     grade: "A+",
//     city: "Delhi"
//   },
//   Utkarsh:{
//     grade: "A++",
//     city: "Pune"
//   },
//   Shubham:{
//     grade: "A++",
//     city: "Mumbai"
//   }
// };

// //nested object can be accessed by
// collegeInfo.Ravi;
// collegeInfo.Ravi.city;
// collegeInfo.Ravi.city = "Bangalore";
// collegeInfo.Ravi;


// //array of objects
// const classInfo = [
//   {
//     name: "Ravi",
//     grade: "A",
//     city: "Bokaro"
//   },
//   {
//     name: "Rahul",
//     grade: "B+",
//     city: "Bhilai"
//   },
//   {
//     name: "Raj",
//     grade: "B",
//     city: "Bikaner"
//   }
// ];

// //array of object can be accessed through
// classInfo[0];
// classInfo[0].city;
// classInfo[0].gender = "Male";



// // Math object and methods/functions
// Math.PI; 
// -> 3.141592653589793

// Math.E;
// -> 2.718281828459045

// Math.abs(5); 
// -> 5

// Math.abs(-5); //gives absolute value of given no.
// -> 5

// Math.pow(2,3); //gives power functionality
// -> 8

// Math.floor(5.001); //round-of to the smaller 
// -> 5

// Math.ceil(5.2); //round-of to the largest 
// -> 6

// Math.random(); //generates random nos. of range 0 to 1
// -> 0.04898793977376403



// //Math.random() Function
// let num = 10;
// let rand = Math.floor(Math.random()*num) // it will generates the no. in range of 1 to 9

// // if we want to generate the no. from range 1 to 10, then
// let random = Math.floor(Math.random()*num)+1;



// //Practice Questions
// //Q1. random no. from 1 to 100
// Math.floor(Math.random()*100)+1;

// //Q2. random no. from 1 to 5
// Math.floor(Math.random()*5)+1;

// //Q3. random no. from 21 to 25
// Math.floor(Math.random()*5)+21;


// // Guess Game
// const max = prompt("Enter the maximum no. :");
// const random = Math.floor(Math.random()*max)+1;
// let guess = prompt("Enter the guess: ")

// while(true) {
//   if(guess == "quit"){
//     console.log("User quit the game.");
//     break;
//   }

//   if(guess == random){
//     console.log("Your guess was right! Congrats!! The no.was", random);
//     break;
//   }
//   else if(guess < random){
//     guess = prompt("Your guess was small, guess the largest no.");
//   }
//   else{
//     guess = prompt("Your guess was large, guess the smaller no.");
//   }
// }



// //Functions
// function hello() { //function definition
//   console.log("hello");
// }

// hello(); //function calling

// function print(){
//   for(let i=1; i<=5; i++){
//     console.log(i);
//   }
// }

// print();

// function poem(){
//   console.log("Twinkle Twinkle Little Star.");
//   console.log("How I wonder what you are.");
//   console.log("Up above the world so high.");
//   console.log("Like a diamond in the sky.");
// }

// poem();


// function diceRoll() {
//   const dice = Math.floor(Math.random()*6)+1;
//   console.log(dice);
// }

// diceRoll();


// // Function with arguments
// function sum(a, b){
//   console.log(a+b);
// }
// sum(10,20);
// sum(2,21);

// function avgOfThree(a, b, c){
//   let ans = (a+b+c)/3;
//   console.log(ans);
// }
// avgOfThree(23, 2, 5);

// function mulTable(n){
//   for(let i=1; i<=10; i++){
//     console.log(n*i);
//   }
// }
// mulTable(12);


// // Function with *return* keyword
// function sum(a, b){
//   return a+b;
// }
// console.log(sum(1,3));
// console.log(sum(sum(1,3), 4));


// function isAdult(age){
//   if(age>= 18)
//     return "Adult";
//   else
//     return "Not-Adult";
// }

// console.log(isAdult(23));

// function getSum(n){
//   let sum=0;
//   for(let i=1; i<=n; i++){
//     sum += i;
//   }
//   return sum;
// }

// console.log(getSum(10));
// console.log(getSum(100));
// console.log(getSum(1000));
// console.log(getSum(10000));
// console.log(getSum(100000));


// let str = ["I", "Am", "ComputerScience", "Engineer", "!"];
// function concat(str){
//   let result = "";
//   for(let i=0; i<str.length; i++){
//     result += str[i];
//   }
//   return result;
// }

// console.log(concat(str));



// //lexical Scope
// let greet = "Hello";
// function changeGreet(){
//   let greet = "Namaste";
//   console.log(greet);
//   function innerGreet(){
//     console.log(greet);
//   }
//   innerGreet();
// }
// console.log(greet);
// changeGreet();



// //Function Expression
// let hello = function(){
//   console.log("Hello!");
// }

// hello();

// hello = function(){
//   console.log("Namaste");
// }

// hello();

// let sum = function(a, b){
//   console.log(a+b);
// }

// sum(1, 5);



// // Higher  Order Functions
// const greet = function(){
//   console.log("Hello Ji!!");
// }

// function highFunc(func, n) {
//   for(let i=1; i<=n; i++){
//     greet();
//   }
// }

// console.log(highFunc(greet, 10));


// function funcFactory(request){
//   if(request == "odd"){
//     return function(n) {
//       console.log(!(n%2 == 0));
//     }
//   }else if(request == "even"){
//     return function(n){
//       console.log(n%2 == 0);
//     }
//   }else{
//     console.log("wrong input");
//   }
// }

// let request = "odd";
// let func = funcFactory(request);
// console.log(func(3));
// console.log(func(4));

// let request = "even";
// let func = funcFactory(request);
// console.log(func(5));
// console.log(func(8));


// //Methods --> Functions which are declared under object is known as *Methods* in JavaScript
// const calculator = {
//   add: function(a, b){
//     console.log(a+b);
//   },
//   sub(a, b){
//     console.log(a-b);
//   },
//   mult(a, b){
//     console.log(a*b);
//   }
// }

// calculator.add(2, 1);
// calculator.sub(4, 2);
// calculator.mult(5, 2);


//Practice Questions

//Q.1 --> Write a JavaScript function that returns array elements larger than a number.
// let arr = [10, 2, 4, 6, 8, 1, 9];
// let num = 6;
// function getLarger(arr, num) {
//   for(let i=0; i<arr.length; i++){
//     if(arr[i] > num){
//       console.log(arr[i]);
//     }
//   }
// }
// getLarger(arr, num);


//Q.2 --> Write a JavaScript function to extract unique characters from a string.
//Example: str = “abcdabcdefgggh” ans = “abcdefgh”
// let str = "abcdabcdefgggh";
// function getUnique(str){
//   let ans = "";
//   for(let i=0; i<str.length; i++){
//     let currChar = str[i];
//     if(ans.indexOf(currChar) == -1){
//       ans += currChar;
//     }
//   }
//   return ans;
// }
// console.log(getUnique(str));


//Q.3 --> Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
//Example : country = ["Australia", "Germany", "United States of America"] output : "United States of America"
// let country = ["Australia", "Germany", "United States of America"];
// function getLongCntryName(country){
//   let ans = 0;
//   for(let i=0; i<country.length; i++){
//     let ansLen = country[ans].length;
//     let currLen = country[i].length;
//     if(currLen > ansLen){
//     ans = i; 
//     }
//   }
//   return country[ans];
// }
// console.log(getLongCntryName(country));
 

//Q.4 --> Write a JavaScript function to count the number of vowels in a String argument.
// let str = "RaviRanjan";
// function countVowel(str){
//   let cnt = 0;
//   for(let i=0; i<str.length; i++){
//     if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
//       cnt++;
//     }
//   }
//   return cnt;
// }
// console.log(countVowel(str));


//Q.5 --> Write a JavaScript function to generate a random number within a range (start, end).
// let start = 100;
// let end = 200;
// function rand(start, end){
//   let diff = end - start;
//   let random = Math.floor(Math.random()*diff)+start;
//   return random;
// }
// console.log(rand(start, end));


// // *this* this keyword in js --> keyword of window object 
// const student = {
//   name: "Ravi Ranjan",
//   age: 23,
//   eng: 97,
//   math: 93,
//   sci: 98,
//   getAvg(){
//     let avg = (this.eng+this.math+this.sci)/3;
//     console.log(avg);
//     console.log(`${this.name} got average marks = ${avg}`);
//   }
// }

// student.getAvg();



// // try and catch statements
// console.log("Hello!!0");
// console.log("Hello!!1");
// try{
//   console.log(a);
// }catch(e){
//   console.log("Caught an eror!");
//   console.log(e);
// }
// console.log("Hello!!2");
// console.log("Hello!!3");
// console.log("Hello!!4");


// // Arrow Functions
// const getSum = (a, b) => {
//   console.log(a+b);
// }
// getSum(12, 90);

// // it will run without parenthesis, if we have only one argument
// const cube = n => {
//   return n*n*n;
// }
// console.log(cube(9));

// // if we have no arguments then also we have to mention the parenthesis
// const hello = () => {
//   console.log("Hello-World!");
// }
// hello();


// // Implicit return in Arrow Function
// const sum = (a, b) => (a+b);
// console.log(sum(23, 2));

// const sub = (a, b) => (a-b);
// console.log(sub(23, 2));

// const mul = (a, b) => a*b; //parenthesis is not necessary in case of single return statement
// console.log(mul(23, 2));


// // setTimeout(function, timeout) --> Method of windows object
// console.log("Hello! Everyone");
// setTimeout(() => {
//   console.log("Chandigarh University");
// }, 3000);
// console.log("Welcome to ");



// // setIterval(function, timeout)
// // clearInterval(id)
// console.log("Namaskar Mitro");
// let id = setInterval(() =>{
//   console.log("Hello guys");
// }, 3000);
// clearInterval(id);



// // *this* with arrow function
// // lexical scope is used with arrow function while using *this* keyword
// const student = {
//   name: "RaviRanjan",
//   age: 23,
//   marks: 97,
//   prop: this, //global scope
//   getName: function(){
//     console.log(this);
//     return this.name;
//   },
//   getMarks: () => {
//     console.log(this); // parent's scope --> Window
//     return this.marks;
//   },
//   getInfo1: function(){
//     setTimeout( () => {
//       console.log(this); // Student
//     },2000);
//   },
//   getInfo2: function(){
//     setTimeout( function() {
//       console.log(this); // Window
//     },2000);
//   }
// };



// Practice Questions
// const getSquare = (n) => (n*n);
// console.log(getSquare(8));

// const id = setInterval( (n) => {
//   console.log("Namaskar Mitro 🙏");
// }, 2000);

// setTimeout( () => {
//   clearInterval(id);
// }, 12000);


// const arr = [1,4,5,7,8];
// let ans = 0;
// const arrAvg = (arr) => {
//   let sum = 0;
//   for(let i=0; i<arr.length; i++){
//     sum += arr[i];
//     ans = sum/arr.length;
//   }
//   return ans;
// }
// console.log(arrAvg(arr));

// const isEven = (n) => {
//   if(n%2 == 0)
//     console.log("No. is Even");
//   else
//     console.log("No. is Odd");
// }
// isEven(5);

//let num = 4;
//const isEven = (num) => num%2 == 0;


// const object = {
//   message: 'Hello World',
//   logMessage(){
//     console.log(this.message);
//   }
// };
// setTimeout(object.logMessage, 1000); //output will be undefined which displayed after 1 sec


// let length = 4;
// function callback(){
//   console.log(this.length);
// }
// const object1 = {
//   length: 5,
//   method(callback){
//     callback();
//   }
// };
// object1.method(callback, 1, 2);


// // Array Methods
// // forEach() method
// let arr = [1,2,3,4,5];
// arr.forEach((el) => {
//   console.log(el*2);
// });
// const func = (e) => {
//   console.log(e*e);
// }
// arr.forEach(func);

// map() method --> it stores the elements in new array of same size after the process completion 
// let students = [
//   {
//     name: "Ravi",
//     marks: 95,
//   },
//   {
//     name: "Shubh",
//     marks: 97,
//   },
//   {
//     name: "Rajat",
//     marks: 94.4,
//   },
// ];

// let cgpa = students.map( (el) => {
//   return el.marks/10;
// });

// let num = [1,2,3,4];
// let double = num.map((ele) => {
//   return ele*2;
// });


// filter() method --> same as map method but it will only store the elements(values) if the condition is true, in case of false it will display the empty array
// let nums = [1, 2, 3, 4, 5, 6, 7, 8];
// let store = nums.filter((n) => {
//  return n % 2 == 0;
// }); // return true
// let nums1 = [1, 3, 5, 7, 9, 11];
// let store1 = nums1.filter((n) => {
//  return n % 2 == 0;
// }); // return []


// every() method --> It will return true only if every elements will return true in the array -- Like Logical AND operator
// let ans = [2, 4, 6, 8].every( (n) => n%2 == 0 ); // return true
// let ans1 = [2, 4, 6, 8, 1].every( (n) => n%2 == 0 ); // return false


// some() method --> Like Logical OR
// let ans = [2,3,  4, 6, 8].some( (n) => n%2 == 0 ); // return true

// let ans1 = [1, 3, 5].some( (n) => n%2 == 0 ); // return false


// reduce(accumulator, element) method --> Reduce the array to single value
// let nums = [1, 2, 3, 4, 5];
// let finalVal = nums.reduce( (ans, el) => (ans+el)); 
// console.log(finalVal);


// maximum in array
// let arr = [1, 3, 6, 9, 17, 2, 4];
// let maxEle = arr.reduce( (max, ele) => {
//   if(max < ele) return ele;
//   else return max;
// });


// //Practice Questions
// //check if all numbers in our array is multiple of 10
// let arr = [2, 20, 50, 100, 70];
// let multiOfTen = arr.every( (n) => n%10 == 0);
// console.log(multiOfTen);

// //create a function to find the min. in an array
// function getMin(){
//   let min = arr.reduce((min, ele) => {
//     if(min < ele) return min;
//     else return ele;
//   });
//   return min;
// }
// console.log(getMin(arr));


// // Default Paramenters
// function defaultPara(a, b=2){
//   return a+b;
// }
// console.log(defaultPara(3));

// function defPara(a=2, b){
//   return a*b;
// }
// console.log(defPara(3, 3)); //run perfectly
// console.log(defPara(3)); //give NaN because we can only pass values in order to the functions


// spread operators
// let str = "RaviRanjan";
// console.log(...str);
// let nums = [-1,4,3,6,4,7,18,2];
// let ans = Math.max(...nums);
// let res =  Math.min(...nums);
// console.log("Min. element : " + res)
// console.log("Max. element : " + ans);


// // spread with literals
// let arr = [1, 2, 3, 4, 5];
// let newArr = [...arr];

// let chars = [..."hello"];

// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8, 10];
// let nums = [...odd, ...even];

// // spread with object literals
// const data = {
//   email: "20bcs1382@gmail.com",
//   password: "ravi143"
// };
// let cpyData = {...data, id: 1382};

// // we can also convert the array and string into object literals using spread operator
// let array = [1, 3, 8, 2]; // only value
// let newArray = {...array}; // it will be key: value pair like ->  {0:1, 1:3, 2:8, 3:2}

// let str = "Chandigarh";
// let newStr = {...str}; // {0:'C', 1:'h', 2:'a', 3:'n', 4:'d', 5:'g', 6:'h', 7:'a', 8:'r', 9:'h'};


// //REST -> its just opposite to spread
// // It allows a function to take an indefinite number of arguments and bundle them in an array 
// function func(...args){
//   for(let i=0; i<args.length; i++){
//     console.log("Your argument is: ",args[i]);
//   }
// }
// func(1, 3, 8, 2);

// function min(){
//   console.log(arguments);
//   console.log(arguments.length);
//   //console.log(arguments.push(7)); // show error
// }
// min(1, 2, 3, 8, 2);

// function max(...args){
//   console.log(args);
//   console.log(args.length);
//   console.log(args.push(7)); 
//   console.log(args);
//   console.log(args.length);
// }
// max(1, 2, 6, 4, 2);

// function sum(...args){
//   return args.reduce((sum, el) => sum+el);
// }
// console.log(sum(4,5,8,10,40));

// function min(...args){
//   return args.reduce((min, el) => {
//     if(min > el) return el;
//     else return min;
//   });
// }
// console.log(min(2, 4, 8, 1, 7));

// function max(msg, ...args){
//   console.log(msg);
//   return args.reduce((max, el) => {
//     if(max > el) return max;
//     else return el;
//   });
// }
// console.log(max("Maximum is:",2, 4, 28, 1, 7));


// // Destructuring --> Storing values of an array into multiple variables without individual initialisations
// let names = ["Ravi", "Anand", "Shubham", "Utkarsh", "Nitish", "Harsh", "CaptaiN"];
// let [winner, runnerUp, secRunnerUp, ...others] = names;
// console.log(winner);
// console.log(runnerUp);
// console.log(secRunnerUp);
// console.log(others);


// //Destructuring in object
// const student = {
//   name: "Rahul Arora",
//   age: 18,
//   class: 11,
//   subject: ["Maths", "Computer", "Science", "English"],
//   username: "rahulArora10",
//   password: "aroraR#9871"
// };

// let {username, password, subject} = student; //in this way we can access it simply using same variable names as of object literals

// let {username:user,password:psKey, city:place = "Nagpur"} = student; // we can also assign different names to point out the object literals
// // we can also define new object property during destructuring the object


// // Practice Questions
// // Q.1 -->
// let nums = [2, 3, 5, 7, 8, 9];
// function func(nums){
//   let square = nums.map((sq)=>sq*sq);
//   console.log(square);
//   let sum = square.reduce((acc, curr) => acc+curr);
//   let avg = Math.ceil(sum/nums.length);
//   return avg;
// }
// console.log(func(nums));

// // Q.2 -->
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map((el) => el+5);
// console.log(newArr);

// // Q.3 -->
// let str = ["ravi", "Deep", "Anand", "shubh", "adams"];
// let newStr = str.map((strings) => strings.toUpperCase());
// console.log(newStr);

// // Q.4 -->
// function doubleAndReturnArgs(arr, ...args){
//   return [...arr, ...args.map((a) => a*2)];
// }
// console.log(doubleAndReturnArgs([1, 2, 3, 4], 5, 6));
// console.log(doubleAndReturnArgs([2, 3], 10, 4, 5));

// // Q.5 -->
// const mergeObjects = (firstObj, secondObj) => ({...firstObj, ...secondObj});
// console.log(
//   mergeObjects(
//     {
//       name: "Ravi Ranjan",
//       age: 23,
//       college: "Chandigarh University"
//     }, 
//     {
//       course: "BE-CSE",
//       currYearSem: "4th Year/8th Semester",
//       domain: "Web Development and C++" 
//     })
// );


// JS DOM --> console.dir(); --> used to get the default methods and properties(objects)
// getElementById
// --> document.getElementById("main-img");
// getElementByClassName
// --> document.getElementByClassName("wrapper");
// getElementByTagName
// --> document.getElementByTagName("p");
// querySelector
// --> document.querySelector('p');
// --> document.querySelector('.container');
// --> document.querySelector('#logo');
// --> document.querySeectorAll('p');

// Properties and Methods
// innerText --> Shows the visible text contained in a node/screen
// textContent --> Shows the all full text
// innerHTML --> Shows the full markup

// Manipulating Attributes
// obj.getAttribute(attr); --> getters
// obj.setAttribute(attr, val); --> setters
// attributes will be set only once

// Manipulating Style
// style Property
// obj.style.color = "red";

// classList Property
// obj.classList.add('green') -> to add new classes
// obj.classList.remove('green') -> to remove classes
// obj.classList.contains('red') -> to check if class exists and return in true & false
// obj.classList.toggle('') -> toggle between add & remove -> it checks if specified class exists then toggle remove it otherwise not exists then it adds the class


// Navigation - 
// childElementCount - counts the no. of childrens
// parentElement (single)
// children (multiple)
// previousElementSibling / nextElementSibling 


// Adding Elements
// document.createElement('p');
// appendChild(element);
// append(element); -> text/string(last)
// prepend(element); -> Starting (first)
// insertAdjacent(where(position), element);
// position -> beforebegin, afterbegin, beforeend, afterend


// Removing Element
// removeChild(element);
// remove(element);


// // Practice Questio
// const body = document.querySelector('body');
// let para1 = document.createElement('p');
// para1.innerText = "Chandigarh University";
// body.append(para1);
// para1.classList.add('red');

// let head3 = document.createElement('h3');
// head3.innerText = "Computer Science Engineering";
// body.append(head3);
// head3.classList.add('blue');

// let div = document.createElement('div');
// let h2 = document.createElement('h2');
// let p2 = document.createElement('p');

// h2.innerText = "I am inside div box..";
// p2.innerText = "I am also...";

// div.append(h2);
// div.append(p2);
// div.classList.add('box');
// body.prepend(div);


// // Assignment Questions
// // Q.1 -->
// const body = document.querySelector('body');
// body.classList.add('body');
// let input = document.createElement('input');
// let btn = document.createElement('button');
// btn.innerText="Click me";
// body.append(input);
// body.append(btn);

// // Q.2 -->
// btn.setAttribute("id", "btn");
// input.setAttribute("placeholder", "username");
// input.classList.add('input');

// // Q.3 -->
// let btn1 = document.querySelector("#btn");
// btn.classList.add("btn");

// // Q.4 -->
// let h1 = document.createElement('h1');
// h1.innerHTML = "<u>DOM Practice</u>";
// body.prepend(h1);

// //Q.5 -->
// let para = document.createElement('p');
// para.innerHTML = " Apna College <b>Delte</b> Practice";
// h1.append(para);




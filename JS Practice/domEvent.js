// DOM Events
// onclick = "console.log("Button was clicked";) --> inline events, written in html

// let btn = document.querySelectorAll('button');
// console.dir(btn);

// onclick event
// btn.onclick = () => {
//   console.log('Button was clicked');
// };

// function sayHello(){
//   alert('Hello Guys :)')
// }
// btn.onclick = sayHello;

// onmouseenter event
// btn.onmouseenter = function() {
//   console.log('You Entered a button');
// };

// Event Listener --> addEventListener
// for(b of btn){
//   b.addEventListener("click", sayHello);
//   b.addEventListener("click", sayName);
// }

// function sayHello() {
//   alert('hello! how are you?');
// }

// function sayName() {
//   alert('My Name is Ravi Ranjan');
// }

// let pg = document.querySelector("p");
// pg.addEventListener("click", function() {
//   console.log("para is clicked");
// });

// let div = document.querySelector('div');
// div.addEventListener("mouseenter", function(){
//   console.log("entered into div");
// });


// // 'this' in Event Listeners
// let btn = document.querySelector('button');
// btn.addEventListener("click", function(){
//   console.log(this.innerText);
//   this.style.backgroundColor = "orange";
// });


// Keyboard Events


function randomArray(){
  return new Promise(resolve => {
    setTimeout(() => {
      let arr = [];
      for(let i=0; i<10; i++){
         arr[i] = [];
         for(let j=0; j<10; j++){
         //filling the arr with random values
           arr[i][j] = Math.floor(Math.random() * 9)+1;
         }
      }
      resolve(arr);
    }, 2000);
  });
}



async function loading(arr){
  let arr1 = [];
  let arr2 = [];
  for(let i=0; i<10; i++){
    arr1[i] = arr[i][0];
    arr2[i] = arr[i][1];
  }
  return {arr1, arr2};
}


async function printArr(){
  try{
    console.log('Loading...');

    const orgArr = await randomArray();

    const storeArr = await loading(orgArr);

    console.log('Original 2D Array of 10x10', orgArr);

    console.log('Array1: ', storeArr.arr1);
    console.log('Array2: ', storeArr.arr2);

  }catch(e){
    console.error('have error',e);
  }
}

printArr();
























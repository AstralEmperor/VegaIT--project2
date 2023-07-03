// Made with help from https://codepen.io/duvander/pen/KXOpXw
const number1 = document.querySelector('.stats__number--1');
const number2 = document.querySelector('.stats__number--2');
const number3 = document.querySelector('.stats__number--3');

numberAnimator = (number,endNum) =>{
    // let endNum = Number(number.innerText)
    let i = 0;
    incrementNubrRec(i, endNum, number);
    // console.log(endNum,'endNumber')
}
/*A recursive function to increase the number.*/
function  incrementNubrRec(i, endNum, number) {
    if (i <= endNum && endNum <= 1000) {
    let speed = 25;
      number.innerHTML = i;
      setTimeout(()=> {//Delay a bit before calling the function again.
        incrementNubrRec(i + 1, endNum, number);
      }, speed);
    }
    if (i <= endNum && endNum >= 1000) {
        let speed = 2;
        number.innerHTML = i;
        setTimeout(()=> {//Delay a bit before calling the function again.
          incrementNubrRec(i + 25, endNum, number);
        }, speed);
      }
  }
const statSection = document.querySelector('.stats');

statSection.addEventListener('mouseover', () =>{
    numberAnimator(number1, 83);
    numberAnimator(number2, 77);
    numberAnimator(number3, 15000);
}, {once: true})



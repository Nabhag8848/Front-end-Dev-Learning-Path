// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Written using Javascript';

document.querySelector('img').onclick = function(){
    alert('Don\'t touch me!!');
}
//
// let a = 10;
// let b = [1,2,3,4,5];
// let str = 'Nabhag';
// let bool = true;
//
// let iceCream = 'Eminem';
// if(iceCream === 'Eminem') {
//     alert('Stan Stan son listen man dad isn\'t mad!');
// } else {
//     alert('Awwww, but Eminem is my favorite...');
// }
//
// function greeting(arr){
//     arr[0] = 2;
//     arr[1] = 1;
// }
// let arr = [1,2,3,4,5];
// greeting(arr);
// console.log(arr);

let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Eminem.jpg'){
        myImage.setAttribute('src','images/Eminem1.jpg');}
    else{
            myImage.setAttribute('src','images/Eminem.jpg');
        }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Eminem is cool, ' + myName;
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Eminem is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

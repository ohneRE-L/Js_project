"use strict";
const button1 = document.createElement('button');
button1.innerText = '18_1';
button1.addEventListener('click', function() {
    let a=10;
    let b=2;

    alert(a+b);
    alert(a-b);
    alert(a*b);
    alert(a/b);

});
document.getElementById('buttonContainer1').appendChild(button1);

const button2 = document.createElement('button');
button2.innerText = '18_2';
button2.addEventListener('click', function() {
    let c=10, d=5;
    let result = c+d;
    alert(result);

});
document.getElementById('buttonContainer2').appendChild(button2);
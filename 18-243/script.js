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

const button3 = document.createElement('button');
button3.innerText = '18_3';
button3.addEventListener('click', function() {
    let a=1, b=2, c=3;
    alert(a+b+c);

});
document.getElementById('buttonContainer3').appendChild(button3);

const button4 = document.createElement('button');
button4.innerText = '18_4';
button4.addEventListener('click', function() {
    let a=10, b=5, c=a-b, d=7, result=c+d;
    alert(result);
});
document.getElementById('buttonContainer4').appendChild(button4);

const button5 = document.createElement('button');
button5.innerText = '19_1';
button5.addEventListener('click', function() {
    let a = 5 + 5 * 3;
    alert(a); // выведет 20
});
document.getElementById('buttonContainer5').appendChild(button5);

const button6 = document.createElement('button');
button6.innerText = '19_2';
button6.addEventListener('click', function() {
    let a = 5 + 5 * 3 + 3;
    alert(a); // выведет 23
});
document.getElementById('buttonContainer6').appendChild(button6);

const button7 = document.createElement('button');
button7.innerText = '19_3';
button7.addEventListener('click', function() {
    let a = 8 / 2 + 2;
    alert(a); // выведет 6
});
document.getElementById('buttonContainer7').appendChild(button7);

const button8 = document.createElement('button');
button8.innerText = '19_4';
button8.addEventListener('click', function() {
    let a = 8 + 2 / 2;
    alert(a); // выведет 9
});
document.getElementById('buttonContainer8').appendChild(button8);

const button9 = document.createElement('button');
button9.innerText = '20_1';
button9.addEventListener('click', function() {
    let a = 8 / 2 * 2;
    alert(a); // выведет 8
});
document.getElementById('buttonContainer9').appendChild(button9);

const button10 = document.createElement('button');
button10.innerText = '20_2';
button10.addEventListener('click', function() {
    let a = 8 * 4 / 2 / 2;
    alert(a); // выведет 8
});
document.getElementById('buttonContainer10').appendChild(button10);

const button11 = document.createElement('button');
button11.innerText = '21_1';
button11.addEventListener('click', function() {
    let a = (2 + 3) * (2 + 3);
    alert(a); // выведет 25
});
document.getElementById('buttonContainer11').appendChild(button11);

const button12 = document.createElement('button');
button12.innerText = '21_2';
button12.addEventListener('click', function() {
    let a = (2 + 3) * 2 + 3;
    alert(a); // выведет 13
});
document.getElementById('buttonContainer12').appendChild(button12);

const button13 = document.createElement('button');
button13.innerText = '21_3';
button13.addEventListener('click', function() {
    let a = 2 * (2 + 4 * (3 + 1));
    alert(a); // выведет 36
});
document.getElementById('buttonContainer13').appendChild(button13);

const button14 = document.createElement('button');
button14.innerText = '21_4';
button14.addEventListener('click', function() {
    let a = 2 * 8 / 4;
    alert(a); // выведет 4
});
document.getElementById('buttonContainer14').appendChild(button14);

const button15 = document.createElement('button');
button15.innerText = '21_5';
button15.addEventListener('click', function() {
    let a = (2 * 8) / 4;
    alert(a); // выведет 4
});
document.getElementById('buttonContainer15').appendChild(button15);

const button16 = document.createElement('button');
button16.innerText = '21_6';
button16.addEventListener('click', function() {
    let a = 2 * (8 / 4);
    alert(a); // выведет 4
});
document.getElementById('buttonContainer16').appendChild(button16);

const button17 = document.createElement('button');
button17.innerText = '22_1';
button17.addEventListener('click', function() {
    let a=1.5, b=0.75;
    alert(a+b);
});
document.getElementById('buttonContainer17').appendChild(button17);

const button18 = document.createElement('button');
button18.innerText = '23_1';
button18.addEventListener('click', function() {
    let a=-100;
    alert(a);
});
document.getElementById('buttonContainer18').appendChild(button18);

const button19 = document.createElement('button');
button19.innerText = '23_2';
button19.addEventListener('click', function() {
    let a=-52;
    alert(-a);
});
document.getElementById('buttonContainer19').appendChild(button19);

const button20 = document.createElement('button');
button20.innerText = '25_1';
button20.addEventListener('click', function() {
    let a = 13;
    let b = 5;
    alert(a % b);
});
document.getElementById('buttonContainer20').appendChild(button20);

const button21 = document.createElement('button');
button21.innerText = '26_1';
button21.addEventListener('click', function() {
    alert(2 ** 10);
});
document.getElementById('buttonContainer21').appendChild(button21);

const button22 = document.createElement('button');
button22.innerText = '27_1';
button22.addEventListener('click', function() {
    let a = 3 * 2 ** 3;
    alert(a); // выведит 24
});
document.getElementById('buttonContainer22').appendChild(button22);

const button23 = document.createElement('button');
button23.innerText = '27_2';
button23.addEventListener('click', function() {
    let a = (3 * 2) ** 3;
    alert(a); // выведит 216
});
document.getElementById('buttonContainer23').appendChild(button23);

const button24 = document.createElement('button');
button24.innerText = '27_3';
button24.addEventListener('click', function() {
    let a = 3 * 2 ** (3 + 1);
    alert(a); // выведит 48
});
document.getElementById('buttonContainer24').appendChild(button24);

const button25 = document.createElement('button');
button25.innerText = '27_4';
button25.addEventListener('click', function() {
    let a = 2 ** 3 * 3;
    alert(a); // выведит 24
});
document.getElementById('buttonContainer25').appendChild(button25);

const button26 = document.createElement('button');
button26.innerText = '27_5';
button26.addEventListener('click', function() {
    let a = 3 * 2 ** 3 * 3;
    alert(a); // выведит 72
});
document.getElementById('buttonContainer26').appendChild(button26);

const button27 = document.createElement('button');
button27.innerText = '28_1';
button27.addEventListener('click', function() {
    let name = 'Ruslan ', surname = 'Fazilov';
    alert(name + surname);
});
document.getElementById('buttonContainer27').appendChild(button27);

const button28 = document.createElement('button');
button28.innerText = '29_1';
button28.addEventListener('click', function() {
    let str = '!!!';
    alert(str);
});
document.getElementById('buttonContainer28').appendChild(button28);

const button29 = document.createElement('button');
button29.innerText = '29_2';
button29.addEventListener('click', function() {
    let java = 'java', script = 'script';
    alert(java + script);
});
document.getElementById('buttonContainer29').appendChild(button29);

const button30 = document.createElement('button');
button30.innerText = '29_3';
button30.addEventListener('click', function() {
    let hello = 'Hello', world = 'world!';
    alert(hello + ' ' + world);
});
document.getElementById('buttonContainer30').appendChild(button30);

const button31 = document.createElement('button');
button31.innerText = '30_1';
button31.addEventListener('click', function() {
    alert('ab asdasdde'.length); // выведет 11
});
document.getElementById('buttonContainer31').appendChild(button31);

const button32 = document.createElement('button');
button32.innerText = '31_1';
button32.addEventListener('click', function() {
    let str1 = 'xxx';
    let str2 = 'yyy';
    let txt  = `aaa ${str1} bbb ${str2} ccc`;

    alert(txt);
});
document.getElementById('buttonContainer32').appendChild(button32);

const button33 = document.createElement('button');
button33.innerText = '32_1';
button33.addEventListener('click', function() {
    let str = `a
        b
        c`;

    alert(str);
});
document.getElementById('buttonContainer33').appendChild(button33);

const button34 = document.createElement('button');
button34.innerText = '34_1';
button34.addEventListener('click', function() {
    let a = undefined;
    alert(a); // выведет undefined
});
document.getElementById('buttonContainer34').appendChild(button34);

const button35 = document.createElement('button');
button35.innerText = '35_1';
button35.addEventListener('click', function() {
    let a = null;
    alert(a); // выведет null
});
document.getElementById('buttonContainer35').appendChild(button35);

const button36 = document.createElement('button');
button36.innerText = '36_1';
button36.addEventListener('click', function() {
    let a = true;
    alert(a);
});
document.getElementById('buttonContainer36').appendChild(button36);

const button37 = document.createElement('button');
button37.innerText = '36_2';
button37.addEventListener('click', function() {
    let a = false;
    alert(a);
});
document.getElementById('buttonContainer37').appendChild(button37);

const button38 = document.createElement('button');
button38.innerText = '37_1';
button38.addEventListener('click', function() {
    let a = 'txt1', b = 'txt2';
    alert(a * b);
});
document.getElementById('buttonContainer38').appendChild(button38);

const button39 = document.createElement('button');
button39.innerText = '38_1';
button39.addEventListener('click', function() {
    alert(10/0);
});
document.getElementById('buttonContainer39').appendChild(button39);

const button40 = document.createElement('button');
button40.innerText = '38_2';
button40.addEventListener('click', function() {
    alert(-10/0);
});
document.getElementById('buttonContainer40').appendChild(button40);

const button41 = document.createElement('button');
button41.innerText = '39_1';
button41.addEventListener('click', function() {
    let a = 'text in console';
    console.log(a);
});
document.getElementById('buttonContainer41').appendChild(button41);

const button42 = document.createElement('button');
button42.innerText = '39_2';
button42.addEventListener('click', function() {
    let a='text ', b='in', c=' console';
    console.log(a + b + c);
});
document.getElementById('buttonContainer42').appendChild(button42);

const button43 = document.createElement('button');
button43.innerText = '40_1';
button43.addEventListener('click', function() {
    console.log(123);
    console.log('123');
});
document.getElementById('buttonContainer43').appendChild(button43);

const button44 = document.createElement('button');
button44.innerText = '41_1';
button44.addEventListener('click', function() {
    alert(eee);
});
document.getElementById('buttonContainer44').appendChild(button44);

const button45 = document.createElement('button');
button45.innerText = '42_1';
button45.addEventListener('click', function() {
    const PI = 3.14;
    let r = 5;
    alert(2*PI*r);
});
document.getElementById('buttonContainer45').appendChild(button45);

const button46 = document.createElement('button');
button46.innerText = '44_1';
button46.addEventListener('click', function() {
    let a = '10', b = '20';
    alert(Number(a) + Number(b))
});
document.getElementById('buttonContainer46').appendChild(button46);

const button47 = document.createElement('button');
button47.innerText = '44_2';
button47.addEventListener('click', function() {
    alert( Number('2') + Number('3') ); // 5
});
document.getElementById('buttonContainer47').appendChild(button47);

const button48 = document.createElement('button');
button48.innerText = '44_3';
button48.addEventListener('click', function() {
    alert( 2 + Number('3') ); // 5
});
document.getElementById('buttonContainer48').appendChild(button48);

const button49 = document.createElement('button');
button49.innerText = '44_4';
button49.addEventListener('click', function() {
    alert( '2' + Number('3') ); // 23
});
document.getElementById('buttonContainer49').appendChild(button49);

const button50 = document.createElement('button');
button50.innerText = '45_1';
button50.addEventListener('click', function() {
    let a = '2';
    let b = '3';
    alert(+a + +b); // выведет '5'
});
document.getElementById('buttonContainer50').appendChild(button50);

const button51 = document.createElement('button');
button51.innerText = '47_1';
button51.addEventListener('click', function() {
    let a = parseFloat('5px'), b = parseFloat('6px');
    alert(a+b);
});
document.getElementById('buttonContainer51').appendChild(button51);

const button52 = document.createElement('button');
button52.innerText = '47_2';
button52.addEventListener('click', function() {
    let a = parseFloat('5.5px'), b = parseFloat('6.25px');
    alert(a+b);
});
document.getElementById('buttonContainer52').appendChild(button52);

const button53 = document.createElement('button');
button53.innerText = '47_3';
button53.addEventListener('click', function() {
    let a = parseFloat('5.5px'), b = parseFloat('6.25px');
    alert(a+b + 'px');
});
document.getElementById('buttonContainer53').appendChild(button53);

const button54 = document.createElement('button');
button54.innerText = '48_1';
button54.addEventListener('click', function() {
    let num1 = 1;
    let num2 = 2;

    alert(String(num1) + String(num2)); // выведет '12'
});
document.getElementById('buttonContainer54').appendChild(button54);

const button55 = document.createElement('button');
button55.innerText = '49_1';
button55.addEventListener('click', function() {
    let num = 1234512312312321;
    alert(String(num).length); // найдем длину строки
});
document.getElementById('buttonContainer55').appendChild(button55);

const button56 = document.createElement('button');
button56.innerText = '49_2';
button56.addEventListener('click', function() {
    let num1 = 1234512312312321;
    let num2 = 1234512312312321;

    alert(String(num1).length + String(num2).length);
});
document.getElementById('buttonContainer56').appendChild(button56);

const button57 = document.createElement('button');
button57.innerText = '48_1';
button57.addEventListener('click', function() {
    let num1 = 1;
    let num2 = 2;

    alert(String(num1) + String(num2)); // выведет '12'
});
document.getElementById('buttonContainer57').appendChild(button57);

const button58 = document.createElement('button');
button58.innerText = '52_1';
button58.addEventListener('click', function() {
    let str = 'abcde';
    let num = 0;
    alert(str[num]);
    num = 2;
    alert(str[num]);
    num = 4;
    alert(str[num]);
});
document.getElementById('buttonContainer58').appendChild(button58);

const button59 = document.createElement('button');
button59.innerText = '52_2';
button59.addEventListener('click', function() {
    let str = 'abcde';
    let num;
    alert(str[num=4] + str[num=3] + str[num=2] + str[num=1] + str[num=0]);
});
document.getElementById('buttonContainer59').appendChild(button59);

const button60 = document.createElement('button');
button60.innerText = '52_3';
button60.addEventListener('click', function() {
    let str = 'abcde';
    let num = 2;
    alert(str[num]);
});
document.getElementById('buttonContainer60').appendChild(button60);

const button61 = document.createElement('button');
button61.innerText = '54_1';
button61.addEventListener('click', function() {
    let str = 'abcde';
    alert(str[str.length - 1]); // выведет 'e'
});
document.getElementById('buttonContainer61').appendChild(button61);

const button62 = document.createElement('button');
button62.innerText = '54_2';
button62.addEventListener('click', function() {
    let str = 'abcde';
    alert(str[str.length - 2]);
});
document.getElementById('buttonContainer62').appendChild(button62);

const button63 = document.createElement('button');
button63.innerText = '54_3';
button63.addEventListener('click', function() {
    let str = 'abcde';
    alert(str[str.length - 3]);
});
document.getElementById('buttonContainer63').appendChild(button63);

const button64 = document.createElement('button');
button64.innerText = '55_1';
button64.addEventListener('click', function() {
    let test = '12345';
    alert(Number(test[0]) + Number(test[1]) + Number(test[2]) + Number(test[3]) + Number(test[4]));
});
document.getElementById('buttonContainer64').appendChild(button64);

const button65 = document.createElement('button');
button65.innerText = '56_1';
button65.addEventListener('click', function() {
    let test = '12345';
    alert(Number(test[0]) + Number(test[1]) + Number(test[2]) + Number(test[3]) + Number(test[4]));
});
document.getElementById('buttonContainer65').appendChild(button65);

const button66 = document.createElement('button');
button66.innerText = '56_2';
button66.addEventListener('click', function() {
    let test = '12345';
    alert(Number(test[0]) * Number(test[1]) * Number(test[2]) * Number(test[3]) * Number(test[4]));
});
document.getElementById('buttonContainer66').appendChild(button66);

const button67 = document.createElement('button');
button67.innerText = '56_3';
button67.addEventListener('click', function() {
    let test = '12345';
    alert(test[4] + test[3] + test[2] + test[1] + test[0]);
});
document.getElementById('buttonContainer67').appendChild(button67);

const button68 = document.createElement('button');
button68.innerText = '58_1';
button68.addEventListener('click', function() {
    let num = 47;
    num += 7;
    num -= 18;
    num *= 10;
    num /= 15;
    alert(num);
});
document.getElementById('buttonContainer68').appendChild(button68);

const button69 = document.createElement('button');
button69.innerText = '49_1';
button69.addEventListener('click', function() {
    let num = 10;
    num++;
    num++;
    num--;
    alert(num);
});
document.getElementById('buttonContainer69').appendChild(button69);

const button70 = document.createElement('button');
button70.innerText = '61_1';
button70.addEventListener('click', function() {
    alert(0.1 * 0.2);
});
document.getElementById('buttonContainer70').appendChild(button70);

const button71 = document.createElement('button');
button71.innerText = '61_2';
button71.addEventListener('click', function() {
    alert(0.3 - 0.1);
});
document.getElementById('buttonContainer71').appendChild(button71);

const button72 = document.createElement('button');
button72.innerText = '62_1';
button72.addEventListener('click', function() {
    alert('Ваше имя: ' + prompt('Ваше имя?'));
});
document.getElementById('buttonContainer72').appendChild(button72);

const button73 = document.createElement('button');
button73.innerText = '63_1';
button73.addEventListener('click', function() {
    let num1 = prompt('Введите первое число');
    let num2 = prompt('Введите второе число');

    alert(Number(num1) + Number(num2));
});
document.getElementById('buttonContainer73').appendChild(button73);

const button74 = document.createElement('button');
button74.innerText = '63_2';
button74.addEventListener('click', function() {
    let num = prompt('Введите сторону квадрата');

    alert(num*num + ' площадь квадарата')
});
document.getElementById('buttonContainer74').appendChild(button74);

const button75 = document.createElement('button');
button75.innerText = '63_3';
button75.addEventListener('click', function() {
    let num1 = prompt('Введите сторону треугольника 1');
    let num2 = prompt('Введите сторону треугольника 2');
    let num3 = prompt('Введите сторону треугольника 3');

    alert(Number(num1) + Number(num2) + Number(num3) + ' периметр треугольника')
});
document.getElementById('buttonContainer75').appendChild(button75);

const button76 = document.createElement('button');
button76.innerText = '64_1';
button76.addEventListener('click', function() {
    document.write('text');
});
document.getElementById('buttonContainer76').appendChild(button76);

const button77 = document.createElement('button');
button77.innerText = '64_2';
button77.addEventListener('click', function() {
    document.write('<i>text</i>');
});
document.getElementById('buttonContainer77').appendChild(button77);

const button78 = document.createElement('button');
button78.innerText = '64_3';
button78.addEventListener('click', function() {
    let str = 'text';
    document.write("<i>" + str + "</i>");
});
document.getElementById('buttonContainer78').appendChild(button78);

const button79 = document.createElement('button');
button79.innerText = '64_4';
button79.addEventListener('click', function() {
    for (let i = 1; i <= 5; i++) {
        document.write(i + "<br>");
    }
});
document.getElementById('buttonContainer79').appendChild(button79);

const button80 = document.createElement('button');
button80.innerText = '65_1';
button80.addEventListener('click', function() {
    let num1 = 1;
    let num2 = 2;
    console.log('сумма: ' + (Number(num1) + Number(num2)));
});
document.getElementById('buttonContainer80').appendChild(button80);

const button81 = document.createElement('button');
button81.innerText = '65_2';
button81.addEventListener('click', function() {
    let a = 1;
    let b = 2;
    let c = prompt('Введите значение С:')
    console.log(a + b + Number(c));
});
document.getElementById('buttonContainer81').appendChild(button81);

const button82 = document.createElement('button');
button82.innerText = '65_3';
button82.addEventListener('click', function() {
    let num = '123';
    let sum = Number(num[0]) + Number(num[1]) + Number(num[2]);
    console.log(sum);
});
document.getElementById('buttonContainer82').appendChild(button82);

const button83 = document.createElement('button');
button83.innerText = '65_4';
button83.addEventListener('click', function() {
    let num = 123;
    console.log(String(num)[0]);
});
document.getElementById('buttonContainer83').appendChild(button83);

const button84 = document.createElement('button');
button84.innerText = '65_5';
button84.addEventListener('click', function() {
    let a = 0;
    a++;
    console.log(a);
});
document.getElementById('buttonContainer84').appendChild(button84);

const button85 = document.createElement('button');
button85.innerText = '65_6';
button85.addEventListener('click', function() {
    let num = 123;
    console.log(String(num).length);
});
document.getElementById('buttonContainer85').appendChild(button85);

const button86 = document.createElement('button');
button86.innerText = '65_7';
button86.addEventListener('click', function() {
    let a = 24 * 60 * 60;
    console.log(a);
});
document.getElementById('buttonContainer86').appendChild(button86);

const button87 = document.createElement('button');
button87.innerText = '65_8';
button87.addEventListener('click', function() {
    let num = 123;
    console.log(String(num).length);
});
document.getElementById('buttonContainer87').appendChild(button87);

const button88 = document.createElement('button');
button88.innerText = '65_9';
button88.addEventListener('click', function() {
    let num = 123;
    console.log(String(num)[String(num).length - 1]);
});
document.getElementById('buttonContainer88').appendChild(button88);

const button89 = document.createElement('button');
button89.innerText = '65_10';
button89.addEventListener('click', function() {
    let num = 123;
    let str = String(num);
    console.log(str.length);
});
document.getElementById('buttonContainer89').appendChild(button89);

const button90 = document.createElement('button');
button90.innerText = '65_11';
button90.addEventListener('click', function() {
    let num = 123;
    let str = String(num);
    console.log(str[str.length - 1]);
});
document.getElementById('buttonContainer90').appendChild(button90);

const button91 = document.createElement('button');
button91.innerText = '65_12';
button91.addEventListener('click', function() {
    let a = '123';
    let b = '456';
    let s = Number(a) + Number(b);

    console.log(s);
});
document.getElementById('buttonContainer91').appendChild(button91);

const button92 = document.createElement('button');
button92.innerText = '65_13';
button92.addEventListener('click', function() {
    let aaa = 1;
    let bbb = 2;
    let ccc = 3;

    console.log(aaa + bbb + ccc);
});
document.getElementById('buttonContainer92').appendChild(button92);

const button93 = document.createElement('button');
button93.innerText = '66_1';
button93.addEventListener('click', function() {
    alert(24 * 60 * 60);
});
document.getElementById('buttonContainer93').appendChild(button93);

const button94 = document.createElement('button');
button94.innerText = '66_2';
button94.addEventListener('click', function() {
    alert(30 * 24 * 60 * 60);
});
document.getElementById('buttonContainer94').appendChild(button94);

const button95 = document.createElement('button');
button95.innerText = '66_3';
button95.addEventListener('click', function() {
    alert(365 * 24 * 60 * 60);
});
document.getElementById('buttonContainer95').appendChild(button95);

const button96 = document.createElement('button');
button96.innerText = '66_4';
button96.addEventListener('click', function() {
    alert(24 * 60);
});
document.getElementById('buttonContainer96').appendChild(button96);

const button97 = document.createElement('button');
button97.innerText = '66_5';
button97.addEventListener('click', function() {
    alert(365 * 24 * 60);
});
document.getElementById('buttonContainer97').appendChild(button97);

const button98 = document.createElement('button');
button98.innerText = '66_6';
button98.addEventListener('click', function() {
    alert(1024 * 1024);
});
document.getElementById('buttonContainer98').appendChild(button98);

const button99 = document.createElement('button');
button99.innerText = '66_7';
button99.addEventListener('click', function() {
    alert(1024 * 1024 * 1024);
});
document.getElementById('buttonContainer99').appendChild(button99);

const button100 = document.createElement('button');
button100.innerText = '66_8';
button100.addEventListener('click', function() {
    alert(10 * 1024 * 1024 * 1024);
});
document.getElementById('buttonContainer100').appendChild(button100);

const button101 = document.createElement('button');
button101.innerText = '66_9';
button101.addEventListener('click', function() {
    alert(1024 * 1024 * 1024 * 1024);
});
document.getElementById('buttonContainer101').appendChild(button101);

const button102 = document.createElement('button');
button102.innerText = '66_10';
button102.addEventListener('click', function() {
    alert(1024 * 1024 * 1024);
});
document.getElementById('buttonContainer102').appendChild(button102);

const button104 = document.createElement('button');
button104.innerText = '67_1';
button104.addEventListener('click', function() {
    const r = 5; // Пример радиуса
    const s = Math.PI * Math.pow(r, 2);
    alert(s);
});
document.getElementById('buttonContainer104').appendChild(button104);

const button105 = document.createElement('button');
button105.innerText = '67_2';
button105.addEventListener('click', function() {
    const a = 4; // Пример длины стороны
    const s = Math.pow(a, 2);
    alert(s);
});
document.getElementById('buttonContainer105').appendChild(button105);

const button106 = document.createElement('button');
button106.innerText = '67_3';
button106.addEventListener('click', function() {
    const a = 4; // Пример длины стороны a
    const b = 6; // Пример длины стороны b
    const s = a * b;
    alert(s);
});
document.getElementById('buttonContainer106').appendChild(button106);

const button107 = document.createElement('button');
button107.innerText = '67_4';
button107.addEventListener('click', function() {
    const a = 4; // Пример длины стороны a
    const b = 6; // Пример длины стороны b
    const p = 2 * (a + b);
    alert(p);
});
document.getElementById('buttonContainer107').appendChild(button107);

const button108 = document.createElement('button');
button108.innerText = '67_5';
button108.addEventListener('click', function() {
    const tc = 25; // Пример температуры в Цельсиях
    const tf = (tc * 9/5) + 32;
    alert(tf);
});
document.getElementById('buttonContainer108').appendChild(button108);

const button109 = document.createElement('button');
button109.innerText = '67_6';
button109.addEventListener('click', function() {
    const tf = 77; // Пример температуры в Фаренгейтах
    const tc = (tf - 32) * 5/9;
    alert(tc);
});
document.getElementById('buttonContainer109').appendChild(button109);

const button110 = document.createElement('button');
button110.innerText = '68_1';
button110.addEventListener('click', function() {
    let arr = [1, 2, 3, 4, 5];

    alert(arr);
    console.log(arr);
});
document.getElementById('buttonContainer110').appendChild(button110);

const button111 = document.createElement('button');
button111.innerText = '68_2';
button111.addEventListener('click', function() {
    let arr = ['a', 'b', 'c'];

    alert(arr);
    console.log(arr);
});
document.getElementById('buttonContainer111').appendChild(button111);

const button112 = document.createElement('button');
button112.innerText = '69_1';
button112.addEventListener('click', function() {
    let arr = [1, 2, 3];

    alert(arr[0]);
    alert(arr[1]);
    alert(arr[2]);
});
document.getElementById('buttonContainer112').appendChild(button112);

const button113 = document.createElement('button');
button113.innerText = '69_2';
button113.addEventListener('click', function() {
    let arr = [1, 2, 3];

    alert(arr[0]);
    alert(arr[1]);
    alert(arr[2]);
});
document.getElementById('buttonContainer113').appendChild(button113);

const button114 = document.createElement('button');
button114.innerText = '69_3';
button114.addEventListener('click', function() {
    let arr = [1, 2, 3];

    alert(arr[0] + arr[1] + arr[2])
});
document.getElementById('buttonContainer114').appendChild(button114);

const button115 = document.createElement('button');
button115.innerText = '69_4';
button115.addEventListener('click', function() {
    let arr = ['a', 'b', 'c', 'd'];

    alert(arr[0] + '+' + arr[1] + '+' + arr[2] + '+' + arr[3])
});
document.getElementById('buttonContainer115').appendChild(button115);

const button116 = document.createElement('button');
button116.innerText = '70_1';
button116.addEventListener('click', function() {
    let arr = ['a', 'b', 'c'];
    console.log(arr.length);
});
document.getElementById('buttonContainer116').appendChild(button116);

const button117 = document.createElement('button');
button117.innerText = '70_2';
button117.addEventListener('click', function() {
    let arr = ['a', 'b', 'c'];
    console.log(arr[arr.length - 1])
});
document.getElementById('buttonContainer117').appendChild(button117);

const button118 = document.createElement('button');
button118.innerText = '71_1';
button118.addEventListener('click', function() {
    let arr = ['a', 'b', 'c'];

    arr[0] = '1';
    arr[1] = '2';
    arr[2] = '3';
    console.log(arr);
});
document.getElementById('buttonContainer118').appendChild(button118);

const button119 = document.createElement('button');
button119.innerText = '72_1';
button119.addEventListener('click', function() {
    let arr = [11, 12, 13];

    arr[0] += 3;
    arr[1] += 3;
    arr[2] += 3;

    alert(arr);
});
document.getElementById('buttonContainer119').appendChild(button119);

const button120 = document.createElement('button');
button120.innerText = '73_1';
button120.addEventListener('click', function() {
    let arr = [1, 2, 3];

    arr[0]++;
    arr[1]++;
    arr[2]++;

    alert(arr);
});
document.getElementById('buttonContainer120').appendChild(button120);

const button121 = document.createElement('button');
button121.innerText = '74_1';
button121.addEventListener('click', function() {
    let arr = [];

    arr[0] = '1';
    arr[1] = '2';
    arr[2] = '3';

    alert(arr);
});
document.getElementById('buttonContainer121').appendChild(button121);

const button122 = document.createElement('button');
button122.innerText = '74_2';
button122.addEventListener('click', function() {
    let arr = [1, 2, 3];

    arr[3] = 4;
    arr[4] = 5;

    alert(arr);
});
document.getElementById('buttonContainer122').appendChild(button122);

const button123 = document.createElement('button');
button123.innerText = '75_1';
button123.addEventListener('click', function() {
    let arr = [];

    arr[3] = 'a';
    arr[8] = 'b';

    alert(arr.length);
});
document.getElementById('buttonContainer123').appendChild(button123);

const button124 = document.createElement('button');
button124.innerText = '76_1';
button124.addEventListener('click', function() {
    let arr = [];

    arr.push('1');
    arr.push('2');
    arr.push('3');

    alert(arr);
});
document.getElementById('buttonContainer124').appendChild(button124);

const button125 = document.createElement('button');
button125.innerText = '76_2';
button125.addEventListener('click', function() {
    let arr = [1, 2, 3];

    arr.push('4');
    arr.push('5');

    alert(arr);
});
document.getElementById('buttonContainer125').appendChild(button125);

const button126 = document.createElement('button');
button126.innerText = '77_1';
button126.addEventListener('click', function() {
    let arr = ['a', 'b', 'c'];

    let key = 2;

    alert(arr[key]);
});
document.getElementById('buttonContainer126').appendChild(button126);

const button127 = document.createElement('button');
button127.innerText = '77_2';
button127.addEventListener('click', function() {
    let arr = [1, 2, 3, 4, 5];

    let key1 = 1;
    let key2 = 2;

    alert(arr[key1] + arr[key2]);
});
document.getElementById('buttonContainer127').appendChild(button127);

const button128 = document.createElement('button');
button128.innerText = '78_1';
button128.addEventListener('click', function() {
    let arr = ['a', 'b', 'c', 'd', 'e'];

    delete arr[1], arr[2];

    alert(arr);
    alert(arr.length);
});
document.getElementById('buttonContainer128').appendChild(button128);

const button129 = document.createElement('button');
button129.innerText = '79_1';
button129.addEventListener('click', function() {
    let arr = [1, 2, 3, 4, 5];
    console.log(arr[arr.length -1]);
});
document.getElementById('buttonContainer129').appendChild(button129);

const button130 = document.createElement('button');
button130.innerText = '79_2';
button130.addEventListener('click', function() {
    let arr = [1, 2, 3, 4, 5];
    console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4]);
});
document.getElementById('buttonContainer130').appendChild(button130);

const button131 = document.createElement('button');
button131.innerText = '79_3';
button131.addEventListener('click', function() {
    let arr = [1, 2, 3, 4, 5];
    console.log(arr.length);
});
document.getElementById('buttonContainer131').appendChild(button131);

const button132 = document.createElement('button');
button132.innerText = '79_4';
button132.addEventListener('click', function() {
    let arr = [1, 2, 3, 4, 5];
    console.log(arr.length);
});
document.getElementById('buttonContainer132').appendChild(button132);

const button133 = document.createElement('button');
button133.innerText = '80_1';
button133.addEventListener('click', function() {
    let obj = {1: 'mon', 2: 'tue', 3: 'wed', 4: 'thu', 5: 'fri', 6: "sat", 7: 'sun'};

    alert(obj[1] + ' ' + obj[2] + ' ' + obj[3] + ' ' + obj[4] + ' ' + obj[5] + ' ' + obj[6] + ' ' + obj[7]);
});
document.getElementById('buttonContainer133').appendChild(button133);

const button134 = document.createElement('button');
button134.innerText = '81_1';
button134.addEventListener('click', function() {
    let obj = {1: 'Junuary', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'};
    console.log(obj);
});
document.getElementById('buttonContainer134').appendChild(button134);

const button135 = document.createElement('button');
button135.innerText = '82_1';
button135.addEventListener('click', function() {
    let obj = {named: 'Ruslan', surname: 'Fazilov', patronymis: 'Akimovich'};

    alert(obj.surname + ' ' + obj.named + ' ' + obj.patronymis);
});
document.getElementById('buttonContainer135').appendChild(button135);

const button136 = document.createElement('button');
button136.innerText = '83_1';
button136.addEventListener('click', function() {
    const now = new Date();
    const date = {
        year: now.getFullYear(),
        month: String(now.getMonth() + 1).padStart(2, '0'), // Месяцы в JS начинаются с 0
        day: String(now.getDate()).padStart(2, '0')
    };

    alert(`${date.year}-${date.month}-${date.day}`);
});
document.getElementById('buttonContainer136').appendChild(button136);

const button137 = document.createElement('button');
button137.innerText = '84_1';
button137.addEventListener('click', function() {
    let obj = {
        '1a': 1,
        'b2': 2,
        'с-с': 3,
        'd 4': 4,
        'e5': 5
    };

    // Для каких ключей обязательны кавычки:
    /*
        1. '1a' - кавычки обязательны, потому что ключ начинается с цифры.
        2. 'b2' - кавычки не обязательны, так как ключ состоит из букв и цифр, и начинается с буквы.
        3. 'с-с' - кавычки обязательны, потому что ключ содержит дефис.
        4. 'd 4' - кавычки обязательны, потому что ключ содержит пробел.
        5. 'e5' - кавычки не обязательны, так как ключ состоит из букв и цифр, и начинается с буквы.
        */
});
document.getElementById('buttonContainer137').appendChild(button137);


const button138 = document.createElement('button');
button138.innerText = '84_2';
button138.addEventListener('click', function() {
    let obj = {
        '1a': 1,
        'b2': 2,
        'с-с': 3,
        'd 4': 4,
        'e5': 5
    };

    // Исправление ошибок:
    console.log(obj['1a']);    // Исправлено: для ключа '1a' нужны кавычки
    console.log(obj.b2);       // Ошибки нет, можно использовать без кавычек
    console.log(obj['с-с']);   // Исправлено: для ключа с дефисом нужны кавычки
    console.log(obj['d 4']);   // Исправлено: для ключа с пробелом нужны кавычки
    console.log(obj.e5);       // Ошибки нет, можно использовать без кавычек
});
document.getElementById('buttonContainer138').appendChild(button138);

const button139 = document.createElement('button');
button139.innerText = '85_1';
button139.addEventListener('click', function() {
    let obj = {x: 1, y: 2, z: 3};

    for (let key in obj) {
        obj[key] = obj[key] ** 2;
    }

    console.log(obj);
});
document.getElementById('buttonContainer139').appendChild(button139);

const button140 = document.createElement('button');
button140.innerText = '86_1';
button140.addEventListener('click', function() {
    let obj = {};

    obj.name = 'John';
    obj.age = 30;
    obj.country = 'USA';

    alert(`Name: ${obj.name}, Age: ${obj.age}, Country: ${obj.country}`);
});
document.getElementById('buttonContainer140').appendChild(button140);

const button141 = document.createElement('button');
button141.innerText = '87_1';
button141.addEventListener('click', function() {
    let obj = {7: 'a', 50: 'b', 23: 'c'};

    console.log(obj[50]); // выведет 'b'
    console.log(obj[7]); // выведет 'a'
    console.log(obj[23]); // выведет 'c'
});
document.getElementById('buttonContainer141').appendChild(button141);

const button142 = document.createElement('button');
button142.innerText = '88_1';
button142.addEventListener('click', function() {
    let obj = {x: 1, y: 2, z: 3};

    let keys = Object.keys(obj);

    console.log(keys);
});
document.getElementById('buttonContainer142').appendChild(button142);

const button143 = document.createElement('button');
button143.innerText = '89_1';
button143.addEventListener('click', function() {
    let obj = {x: 1, y: 2, z: 3};

    console.log(Object.keys(obj).length); // выведет 3
});
document.getElementById('buttonContainer143').appendChild(button143);

const button144 = document.createElement('button');
button144.innerText = '90_1';
button144.addEventListener('click', function() {
    let obj = {x: 1, y: 2, z: 3};

    let key = 'x';

    alert(obj[key]);
});
document.getElementById('buttonContainer144').appendChild(button144);

const button145 = document.createElement('button');
button145.innerText = '91_1';
button145.addEventListener('click', function() {
    let obj = {x: 1, y: 2, z: 3};
    console.log(obj['x']);
});
document.getElementById('buttonContainer145').appendChild(button145);

const button146 = document.createElement('button');
button146.innerText = '91_2';
button146.addEventListener('click', function() {
    let obj = {x: 1, y: 2, z: 3};
    let key = 'x';
    console.log(obj[key]);
});
document.getElementById('buttonContainer146').appendChild(button146);

const button147 = document.createElement('button');
button147.innerText = '92_1';
button147.addEventListener('click', function() {
    let obj = {x: 1, y: 2, z: 3};
    let prop = 'x';
    console.log(obj[prop]);
});
document.getElementById('buttonContainer147').appendChild(button147);

const button148 = document.createElement('button');
button148.innerText = '92_2';
button148.addEventListener('click', function() {
    let obj = {x: 1, y: 2, z: 3};
    let prop = 'x';
    console.log(obj[prop]);
});
document.getElementById('buttonContainer148').appendChild(button148);

const button149 = document.createElement('button');
button149.innerText = '93_1';
button149.addEventListener('click', function() {
    let key = 'x';
    let obj = {
        [key]: 1,
        y: 2,
        z: 3
    };
    console.log(obj[key]);
});
document.getElementById('buttonContainer149').appendChild(button149);

const button150 = document.createElement('button');
button150.innerText = '93_2';
button150.addEventListener('click', function() {
    let obj = {
        x: 1,
        y: 2,
        z: 3
    };
    let key1 = 'x';
    let key2 = 'y';
    let key3 = 'z';
    alert(`x: ${obj[key1]}, y: ${obj[key2]}, z: ${obj[key3]}`);
});
document.getElementById('buttonContainer150').appendChild(button150);

const button151 = document.createElement('button');
button151.innerText = '94_1';
button151.addEventListener('click', function() {
    let obj = {x: 1, y: 2, z: 3};

    // Проверяем наличие ключей в объекте
    console.log('x' in obj); // Выводит true, так как ключ 'x' существует в объекте
    console.log('w' in obj); // Выводит false, так как ключ 'w' отсутствует в объекте
});
document.getElementById('buttonContainer151').appendChild(button151);

const button152 = document.createElement('button');
button152.innerText = '95_1';
button152.addEventListener('click', function() {
    let obj = {x: 1, y: 2, z: 3};
    delete obj.x;

    // Проверяем наличие ключа 'x' в объекте
    console.log('x' in obj); // Выводит false, так как ключ 'x' был удалён
});
document.getElementById('buttonContainer152').appendChild(button152);

const button153 = document.createElement('button');
button153.innerText = '96_1';
button153.addEventListener('click', function() {
    console.log(typeof {x: 1, y: 2, z: 3}); // Выводит 'object', так как это объект
});
document.getElementById('buttonContainer153').appendChild(button153);

const button154 = document.createElement('button');
button154.innerText = '96_2';
button154.addEventListener('click', function() {
    console.log(typeof {}); // Выводит 'object', так как это пустой объект
});
document.getElementById('buttonContainer154').appendChild(button154);

const button155 = document.createElement('button');
button155.innerText = '96_3';
button155.addEventListener('click', function() {
    let obj = {x: 1, y: 2, z: 3};
    console.log(typeof obj); // Выводит 'object', так как obj является объектом
});
document.getElementById('buttonContainer155').appendChild(button155);

const button156 = document.createElement('button');
button156.innerText = '96_4';
button156.addEventListener('click', function() {
    let obj = {x: 1, y: 2, z: 3};
    console.log(typeof obj['x']); // Выводит 'number', так как значение obj['x'] равно 1
});
document.getElementById('buttonContainer156').appendChild(button156);

const button157 = document.createElement('button');
button157.innerText = '97_1';
button157.addEventListener('click', function() {
    console.log(typeof {x: 1, y: 2, z: 3}); // Выводит 'object', так как это объект
});
document.getElementById('buttonContainer157').appendChild(button157);

const button158 = document.createElement('button');
button158.innerText = '97_2';
button158.addEventListener('click', function() {
    console.log(typeof [1, 2, 3]); // Выводит 'object', так как массивы также являются объектами
});
document.getElementById('buttonContainer158').appendChild(button158);

const button159 = document.createElement('button');
button159.innerText = '97_3';
button159.addEventListener('click', function() {
    let arr = [1, 2, 3];
    console.log(typeof arr); // Выводит 'object', так как переменная arr — это массив (объект)
});
document.getElementById('buttonContainer159').appendChild(button159);

const button160 = document.createElement('button');
button160.innerText = '97_4';
button160.addEventListener('click', function() {
    let arr = [1, 2, 3];
    console.log(typeof arr[0]); // Выводит 'number', так как arr[0] равно 1
});
document.getElementById('buttonContainer160').appendChild(button160);

const button161 = document.createElement('button');
button161.innerText = '97_5';
button161.addEventListener('click', function() {
    let arr = ['1', '2', '3'];
    console.log(typeof arr[0]); // Выводит 'string', так как arr[0] равно '1', что является строкой
});
document.getElementById('buttonContainer161').appendChild(button161);

const button162 = document.createElement('button');
button162.innerText = '98_1';
button162.addEventListener('click', function() {
    console.log(Array.isArray([1, 2, 3])); // Выводит true, так как [1, 2, 3] является массивом
});
document.getElementById('buttonContainer162').appendChild(button162);

const button163 = document.createElement('button');
button163.innerText = '98_2';
button163.addEventListener('click', function() {
    console.log(Array.isArray({x: 1, y: 2, z: 3})); // Выводит false, так как {x: 1, y: 2, z: 3} является объектом, а не массивом
});
document.getElementById('buttonContainer163').appendChild(button163);

const button164 = document.createElement('button');
button164.innerText = '99_1';
button164.addEventListener('click', function() {
    let test = {x: 1, y: 2, z: 3};
    console.log(test); // Выводит объект: {x: 1, y: 2, z: 3}. Это объект, не примитив.
});
document.getElementById('buttonContainer164').appendChild(button164);

const button165 = document.createElement('button');
button165.innerText = '99_2';
button165.addEventListener('click', function() {
    let test = {x: 1, y: 2, z: 3};
    console.log(test.x); // Выводит 1. Это примитив (число).
});
document.getElementById('buttonContainer165').appendChild(button165);

const button166 = document.createElement('button');
button166.innerText = '99_3';
button166.addEventListener('click', function() {
    let test = [1, 2, 3];
    console.log(test); // Выводит массив: [1, 2, 3]. Это объект, не примитив.
});
document.getElementById('buttonContainer166').appendChild(button166);

const button167 = document.createElement('button');
button167.innerText = '99_4';
button167.addEventListener('click', function() {
    let test = [1, 2, 3];
    console.log(test[1]); // Выводит 2. Это примитив (число).
});
document.getElementById('buttonContainer167').appendChild(button167);

const button168 = document.createElement('button');
button168.innerText = '99_5';
button168.addEventListener('click', function() {
    let test1 = [1, 2, 3];
    let test2 = 1;
    console.log(test1); // Выводит массив: [1, 2, 3]. Это объект, не примитив.
});
document.getElementById('buttonContainer168').appendChild(button168);

const button169 = document.createElement('button');
button169.innerText = '99_6';
button169.addEventListener('click', function() {
    let test1 = [1, 2, 3];
    let test2 = 1;
    console.log(test1[test2]); // Выводит 2. Это примитив (число).
});
document.getElementById('buttonContainer169').appendChild(button169);

const button170 = document.createElement('button');
button170.innerText = '99_7';
button170.addEventListener('click', function() {
    // Перечисляем примитивные типы данных в JavaScript
    console.log("Примитивные типы данных в JavaScript: undefined, null, boolean, number, string, symbol, bigint.");
});
document.getElementById('buttonContainer170').appendChild(button170);

const button171 = document.createElement('button');
button171.innerText = '100_1';
button171.addEventListener('click', function() {
    let arr1 = [1, 2, 3];
    let arr2 = arr1;

    arr1[0] = 'a';
    console.log(arr2); // Выводит ['a', 2, 3]. arr2 ссылается на тот же массив, что и arr1.
});
document.getElementById('buttonContainer171').appendChild(button171);

const button172 = document.createElement('button');
button172.innerText = '100_2';
button172.addEventListener('click', function() {
    let arr1 = [1, 2, 3];
    let arr2 = arr1;

    arr1[0] = 'a';
    arr2[1] = 'b';

    console.log(arr1); // Выводит ['a', 'b', 3]. Изменения в arr2 отражаются в arr1, так как это один и тот же массив.
});
document.getElementById('buttonContainer172').appendChild(button172);

const button173 = document.createElement('button');
button173.innerText = '100_3';
button173.addEventListener('click', function() {
    let arr1 = [1, 2, 3];
    let arr2 = arr1;

    arr1[0] = 'a';
    arr2[0] = 'b';

    console.log(arr2); // Выводит ['b', 2, 3]. arr2 ссылается на тот же массив, поэтому изменение arr2[0] также изменяет arr1[0].
});
document.getElementById('buttonContainer173').appendChild(button173);

const button174 = document.createElement('button');
button174.innerText = '101_1';
button174.addEventListener('click', function() {
    const arr = ['a', 'b', 'c'];
    arr[1] = '!'; // Изменяем второй элемент массива на '!'
    console.log(arr); // Выводит ['a', '!', 'c'].
});
document.getElementById('buttonContainer174').appendChild(button174);

const button175 = document.createElement('button');
button175.innerText = '101_2';
button175.addEventListener('click', function() {
    const arr = ['a', 'b', 'c'];
    arr = [1, 2, 3]; // Попытка изменить ссылку на массив, что вызовет ошибку.
    console.log(arr); // Ошибка: TypeError: Assignment to constant variable.
});
document.getElementById('buttonContainer175').appendChild(button175);

const button176 = document.createElement('button');
button176.innerText = '101_3';
button176.addEventListener('click', function() {
    const arr = ['a', 'b', 'c'];
    arr = ['a', 'b', 'c']; // Попытка изменить ссылку на массив, что вызовет ошибку.
    console.log(arr); // Ошибка: TypeError: Assignment to constant variable.
});
document.getElementById('buttonContainer176').appendChild(button176);

const button177 = document.createElement('button');
button177.innerText = '102_1';
button177.addEventListener('click', function() {
    const arr = [1, 2, 3, 4, 5];
    const res = arr[1] + arr[2];

    console.log(res); // Выводит 5 (2 + 3).
});
document.getElementById('buttonContainer177').appendChild(button177);

const button178 = document.createElement('button');
button178.innerText = '103_1';
button178.addEventListener('click', function() {
    let obj = {x: 1, y: 2, z: 3};
    console.log(obj['x']);
});
document.getElementById('buttonContainer178').appendChild(button178);

const button179 = document.createElement('button');
button179.innerText = '103_2';
button179.addEventListener('click', function() {
    let obj = {x: 1, y: 2, z: 3};
    let key = 'x';

    console.log(obj[key]);
});
document.getElementById('buttonContainer179').appendChild(button179);

const button180 = document.createElement('button');
button180.innerText = '103_3';
button180.addEventListener('click', function() {
    let obj = {x: 1, y: 2, z: 3};
    let sum = obj['x'] + obj['y'] + obj['z'];

    console.log(sum);
});
document.getElementById('buttonContainer180').appendChild(button180);

const button181 = document.createElement('button');
button181.innerText = '103_4';
button181.addEventListener('click', function() {
    let obj = {x: 1, y: 2, z: 3};
    console.log(Object.keys(obj).length);
});
document.getElementById('buttonContainer181').appendChild(button181);

const button182 = document.createElement('button');
button182.innerText = '105_1';
button182.addEventListener('click', function() {
    const test = 12;
    if (test > 10) {
        console.log('Переменная test больше 10');
    } else {
        console.log('Переменная test не больше 10');
    }
});
document.getElementById('buttonContainer182').appendChild(button182);

const button183 = document.createElement('button');
button183.innerText = '105_2';
button183.addEventListener('click', function() {
    const test = 8;
    if (test < 10) {
        console.log('Переменная test меньше 10');
    } else {
        console.log('Переменная test не меньше 10');
    }
});
document.getElementById('buttonContainer183').appendChild(button183);

const button184 = document.createElement('button');
button184.innerText = '105_3';
button184.addEventListener('click', function() {
    const test = 10;
    if (test >= 10) {
        console.log('Переменная test больше или равна 10');
    } else {
        console.log('Переменная test меньше 10');
    }
});
document.getElementById('buttonContainer184').appendChild(button184);

const button185 = document.createElement('button');
button185.innerText = '105_4';
button185.addEventListener('click', function() {
    const test = 10;
    if (test <= 10) {
        console.log('Переменная test меньше или равна 10');
    } else {
        console.log('Переменная test больше 10');
    }
});
document.getElementById('buttonContainer185').appendChild(button185);

const button186 = document.createElement('button');
button186.innerText = '106_1';
button186.addEventListener('click', function() {
    const test = 10;
    if (test === 10) {
        console.log('Переменная test равна 10');
    } else {
        console.log('Переменная test не равна 10');
    }
});
document.getElementById('buttonContainer186').appendChild(button186);

const button187 = document.createElement('button');
button187.innerText = '107_1';
button187.addEventListener('click', function() {
    const test = 10;
    if (test !== 10) {
        console.log('Переменная test не равна 10');
    } else {
        console.log('Переменная test равна 10');
    }
});
document.getElementById('buttonContainer187').appendChild(button187);

const button188 = document.createElement('button');
button188.innerText = '108_1';
button188.addEventListener('click', function() {
    const test1 = 10;
    const test2 = 15;

    if (test1 > test2) {
        console.log('test1 больше test2');
    } else if (test1 < test2) {
        console.log('test2 больше test1');
    } else {
        console.log('test1 и test2 равны');
    }
});
document.getElementById('buttonContainer188').appendChild(button188);

const button189 = document.createElement('button');
button189.innerText = '108_2';
button189.addEventListener('click', function() {
    const test1 = 10;
    const test2 = 10;

    if (test1 === test2) {
        console.log('test1 равен test2');
    } else {
        console.log('test1 не равен test2');
    }
});
document.getElementById('buttonContainer189').appendChild(button189);

const button190 = document.createElement('button');
button190.innerText = '109_1';
button190.addEventListener('click', function() {
    const test1 = 'Hello';
    const test2 = 'Hello';

    if (test1 === test2) {
        console.log('test1 равен test2');
    } else {
        console.log('test1 не равен test2');
    }
});
document.getElementById('buttonContainer190').appendChild(button190);

const button191 = document.createElement('button');
button191.innerText = '110_1';
button191.addEventListener('click', function() {
    let test1 = '123';
    let test2 = 123;

    if (test1 === test2) {
        console.log('test1 равен test2');
    } else {
        console.log('test1 не равен test2');
    }
});
document.getElementById('buttonContainer191').appendChild(button191);

const button192 = document.createElement('button');
button192.innerText = '111_1';
button192.addEventListener('click', function() {
    let test1 = '3';
    let test2 = '3';

    if (test1 == test2) {
        console.log('+++'); // Выведется '+++'
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer192').appendChild(button192);

const button193 = document.createElement('button');
button193.innerText = '111_2';
button193.addEventListener('click', function() {
    let test1 = '3';
    let test2 = '3';

    if (test1 === test2) {
        console.log('+++'); // Выведется '+++'
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer193').appendChild(button193);

const button194 = document.createElement('button');
button194.innerText = '111_3';
button194.addEventListener('click', function() {
    let test1 = 3;
    let test2 = '3';

    if (test1 == test2) {
        console.log('+++'); // Выведется '+++'
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer194').appendChild(button194);

const button195 = document.createElement('button');
button195.innerText = '111_4';
button195.addEventListener('click', function() {
    let test1 = 3;
    let test2 = '3';

    if (test1 === test2) {
        console.log('+++'); // Выведется '---'
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer195').appendChild(button195);

const button196 = document.createElement('button');
button196.innerText = '111_5';
button196.addEventListener('click', function() {
    let test1 = 3;
    let test2 = 3;

    if (test1 === test2) {
        console.log('+++'); // Выведется '+++'
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer196').appendChild(button196);

const button197 = document.createElement('button');
button197.innerText = '112_1';
button197.addEventListener('click', function() {
    let test1 = '3';
    let test2 = '3';

    if (test1 != test2) {
        console.log('+++'); // Выведется '---'
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer197').appendChild(button197);

const button198 = document.createElement('button');
button198.innerText = '112_2';
button198.addEventListener('click', function() {
    let test1 = '3';
    let test2 = '3';

    if (test1 !== test2) {
        console.log('+++'); // Выведется '---'
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer198').appendChild(button198);

const button199 = document.createElement('button');
button199.innerText = '112_3';
button199.addEventListener('click', function() {
    let test1 = 3;
    let test2 = '3';

    if (test1 != test2) {
        console.log('+++'); // Выведется '---'
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer199').appendChild(button199);

const button200 = document.createElement('button');
button200.innerText = '112_4';
button200.addEventListener('click', function() {
    let test1 = 3;
    let test2 = '3';

    if (test1 !== test2) {
        console.log('+++'); // Выведется '+++'
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer200').appendChild(button200);

const button201 = document.createElement('button');
button201.innerText = '112_5';
button201.addEventListener('click', function() {
    let test1 = 3;
    let test2 = 2;

    if (test1 !== test2) {
        console.log('+++'); // Выведется '+++'
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer201').appendChild(button201);

const button202 = document.createElement('button');
button202.innerText = '113_1';
button202.addEventListener('click', function() {
    let num = 3;
    if (num > 0 && num < 5) {
        console.log('num больше 0 и меньше 5');
    } else {
        console.log('num не в пределах от 0 до 5');
    }
});
document.getElementById('buttonContainer202').appendChild(button202);

const button203 = document.createElement('button');
button203.innerText = '113_2';
button203.addEventListener('click', function() {
    let num = 15;
    if (num >= 10 && num <= 20) {
        console.log('num больше или равен 10 и меньше или равен 20');
    } else {
        console.log('num не в пределах от 10 до 20');
    }
});
document.getElementById('buttonContainer203').appendChild(button203);

const button204 = document.createElement('button');
button204.innerText = '113_3';
button204.addEventListener('click', function() {
    let num1 = 1;
    let num2 = 3;
    if (num1 <= 1 && num2 >= 3) {
        console.log('num1 меньше или равен 1 и num2 больше или равен 3');
    } else {
        console.log('Условия не выполнены');
    }
});
document.getElementById('buttonContainer204').appendChild(button204);

const button205 = document.createElement('button');
button205.innerText = '114_1';
button205.addEventListener('click', function() {
    let num1 = -10;
    let num2 = -10;

    // Проверяем, являются ли обе переменные неотрицательными
    if (num1 >= 0 || num2 >= 0) {
        console.log('+++'); // Если хотя бы одна переменная неотрицательная, выводим '+++'
    } else {
        console.log('---'); // Если обе переменные отрицательные, выводим '---'
    }
});
document.getElementById('buttonContainer205').appendChild(button205);

const button206 = document.createElement('button');
button206.innerText = '114_2';
button206.addEventListener('click', function() {
    let num1 = 0;
    let num2 = 0;

    // Проверяем, являются ли обе переменные неотрицательными
    if (num1 >= 0 || num2 >= 0) {
        console.log('+++'); // Одна из переменных неотрицательная, выводим '+++'
    } else {
        console.log('---'); // Не должно произойти, так как 0 не отрицательное
    }
});
document.getElementById('buttonContainer206').appendChild(button206);

const button207 = document.createElement('button');
button207.innerText = '114_3';
button207.addEventListener('click', function() {
    let num1 = 0;
    let num2 = 5;

    // Проверяем, являются ли обе переменные неотрицательными
    if (num1 >= 0 || num2 >= 0) {
        console.log('+++'); // Одна из переменных неотрицательная, выводим '+++'
    } else {
        console.log('---'); // Не должно произойти, так как 0 не отрицательное
    }
});
document.getElementById('buttonContainer207').appendChild(button207);

const button208 = document.createElement('button');
button208.innerText = '114_4';
button208.addEventListener('click', function() {
    let num1 = 5;
    let num2 = 5;

    // Проверяем, являются ли обе переменные неотрицательными
    if (num1 >= 0 || num2 >= 0) {
        console.log('+++'); // Одна из переменных неотрицательная, выводим '+++'
    } else {
        console.log('---'); // Не должно произойти, так как обе переменные не отрицательные
    }
});
document.getElementById('buttonContainer208').appendChild(button208);

const button209 = document.createElement('button');
button209.innerText = '114_5';
button209.addEventListener('click', function() {
    let num1 = -5;
    let num2 = 15;

    // Проверяем, являются ли обе переменные неотрицательными
    if (num1 >= 0 || num2 >= 0) {
        console.log('+++'); // Одна из переменных неотрицательная, выводим '+++'
    } else {
        console.log('---'); // Не должно произойти, так как одна из переменных отрицательная
    }
});
document.getElementById('buttonContainer209').appendChild(button209);

const button210 = document.createElement('button');
button210.innerText = '114_6';
button210.addEventListener('click', function() {
    let num = 1;

    // Проверяем, равно ли значение 0 или 1
    if (num == 0 || num == 1) {
        console.log('+++'); // Если значение 0 или 1, выводим '+++'
    } else {
        console.log('---'); // Не должно произойти, так как num равно 1
    }
});
document.getElementById('buttonContainer210').appendChild(button210);

const button211 = document.createElement('button');
button211.innerText = '114_7';
button211.addEventListener('click', function() {
    let num = 2;

    // Проверяем, равно ли значение 0 или 1
    if (num == 0 || num == 1) {
        console.log('+++'); // Не должно произойти, так как num равно 2
    } else {
        console.log('---'); // Выводим '---', так как значение не равно 0 или 1
    }
});
document.getElementById('buttonContainer211').appendChild(button211);

const button212 = document.createElement('button');
button212.innerText = '114_8';
button212.addEventListener('click', function() {
    let num = 2;

    // Проверяем, равно ли значение 0, 1 или 2
    if (num == 0 || num == 1 || num == 2) {
        console.log('+++'); // Если значение равно 0, 1 или 2, выводим '+++'
    } else {
        console.log('---'); // Не должно произойти, так как num равно 2
    }
});
document.getElementById('buttonContainer212').appendChild(button212);

const button213 = document.createElement('button');
button213.innerText = '115_1';
button213.addEventListener('click', function() {
    // В условии сравнения выполняется следующее:
    // 1. Сначала проверяется условие num == 0.
    // 2. Если num равно 0, блок if выполняется и выводится '+++'
    // 3. Если num не равно 0, происходит проверка следующего условия:
    //    4. Оператор && имеет более высокий приоритет, поэтому сначала
    //       проверяется выражение (num > 1 && num < 5).
    // 5. Если num больше 1 и меньше 5, то блок if выполняется и выводится '+++'.
    // 6. Если оба условия (num > 1 и num < 5) ложные, тогда выполняется блок else и выводится '---'.

    let num = 2;

    if (num == 0 || (num > 1 && num < 5)) {
        console.log('+++'); // Если num равно 0 или находится в диапазоне от 1 до 5
    } else {
        console.log('---'); // Если ни одно из условий не выполнено
    }
});
document.getElementById('buttonContainer213').appendChild(button213);

const button214 = document.createElement('button');
button214.innerText = '116_1';
button214.addEventListener('click', function() {
    let num = 3;

    // Явный приоритет операций:
    // 1. Сначала выполняется сравнение: num > 5 (ложно)
    // 2. Затем: num < 10 (истинно)
    // 3. Затем выполняется оператор &&:
    //    (num > 5 && num < 10) => (ложно && истинно) => ложно
    // 4. Затем: num == 20 (ложно)
    // 5. Затем выполняется оператор ||:
    //    (ложно || ложно) => ложно
    // Поэтому вывод будет '---'.

    if (num > 5 && num < 10 || num == 20) {
        console.log('+++');
    } else {
        console.log('---'); // Вывод: ---
    }
});
document.getElementById('buttonContainer214').appendChild(button214);

const button215 = document.createElement('button');
button215.innerText = '116_2';
button215.addEventListener('click', function() {
    let num = 3;

    // Явный приоритет операций:
    // 1. Сначала выполняется сравнение: num > 5 (ложно)
    // 2. Затем выполняется оператор &&:
    //    num > 0 (истинно) && num < 3 (ложно) => (истинно && ложно) => ложно
    // 3. Затем выполняется оператор ||:
    //    (ложно || ложно) => ложно
    // Поэтому вывод будет '---'.

    if (num > 5 || num > 0 && num < 3) {
        console.log('+++');
    } else {
        console.log('---'); // Вывод: ---
    }
});
document.getElementById('buttonContainer215').appendChild(button215);

const button216 = document.createElement('button');
button216.innerText = '116_3';
button216.addEventListener('click', function() {
    let num = 3;

    // Явный приоритет операций:
    // 1. Сначала выполняется сравнение: num == 9 (ложно)
    // 2. Затем выполняется оператор &&:
    //    num > 10 (ложно) && num < 20 (истинно) => (ложно && истинно) => ложно
    // 3. Затем выполняется оператор ||:
    //    (ложно || ложно) => ложно
    // 4. Затем: num > 20 (ложно) && num < 30 (истинно) => (ложно && истинно) => ложно
    // 5. В конце: (ложно || ложно) => ложно
    // Поэтому вывод будет '---'.

    if (num == 9 || num > 10 && num < 20 || num > 20 && num < 30) {
        console.log('+++');
    } else {
        console.log('---'); // Вывод: ---
    }
});
document.getElementById('buttonContainer216').appendChild(button216);

const button217 = document.createElement('button');
button217.innerText = '117_1';
button217.addEventListener('click', function() {
    let num1 = -2, num2= 12;
    // Исходный код
    // if (num1 >= 0 || num2 <= 10) {
    //     console.log('+++');
    // } else {
    //     console.log('---');
    // }

    // Инвертированное условие с использованием оператора !
    if (!(num1 >= 0 || num2 <= 10)) {
        console.log('+++'); // Это будет выполняться, если num1 < 0 и num2 > 10
    } else {
        console.log('---'); // Это будет выполняться, если хотя бы одно из условий истинно
    }
});
document.getElementById('buttonContainer217').appendChild(button217);

const button218 = document.createElement('button');
button218.innerText = '118_1';
button218.addEventListener('click', function() {
    let test = true;

    if (test === true) {
        console.log('test равен true'); // Вывод: test равен true
    } else {
        console.log('test не равен true');
    }
});
document.getElementById('buttonContainer218').appendChild(button218);

const button219 = document.createElement('button');
button219.innerText = '118_2';
button219.addEventListener('click', function() {
    let test = false;

    if (test === false) {
        console.log('test равен false'); // Вывод: test равен false
    } else {
        console.log('test не равен false');
    }
});
document.getElementById('buttonContainer219').appendChild(button219);

const button220 = document.createElement('button');
button220.innerText = '119_1';
button220.addEventListener('click', function() {
    console.log('Значения, которые при приведении к логическому типу дают false:')
    console.log('1. false')
    console.log('2. 0')
    console.log("3. '' (пустая строка)")
    console.log('4. null')
    console.log('5. undefined')
    console.log('6. NaN')
});
document.getElementById('buttonContainer220').appendChild(button220);

const button221 = document.createElement('button');
button221.innerText = '119_2';
button221.addEventListener('click', function() {
    let test = 1;
    if (test == true) {
        console.log('+++');
    } else {
        console.log('---');
    }
    // Поскольку 1 при приведении к логическому типу становится true,
    // то условие test == true будет истинным.
});
document.getElementById('buttonContainer221').appendChild(button221);

const button222 = document.createElement('button');
button222.innerText = '119_3';
button222.addEventListener('click', function() {
    let test = 0;

    if (test == true) {
        console.log('+++');
    } else {
        console.log('---');
    }
    // Поскольку 0 при приведении к логическому типу становится false,
    // то условие test == true будет ложным.
});
document.getElementById('buttonContainer222').appendChild(button222);

const button223 = document.createElement('button');
button223.innerText = '119_4';
button223.addEventListener('click', function() {
    let test = 1;

    if (test == false) {
        console.log('+++');
    } else {
        console.log('---');
    }
    // Поскольку 1 при приведении к логическому типу становится true,
    // то условие test == false будет ложным.
});
document.getElementById('buttonContainer223').appendChild(button223);

const button224 = document.createElement('button');
button224.innerText = '119_5';
button224.addEventListener('click', function() {
    let test = 1;

    if (test != true) {
        console.log('+++');
    } else {
        console.log('---');
    }
    // Поскольку 1 при приведении к логическому типу становится true,
    // то условие test != true будет ложным.
});
document.getElementById('buttonContainer224').appendChild(button224);

const button225 = document.createElement('button');
button225.innerText = '119_6';
button225.addEventListener('click', function() {
    let test = '';

    if (test == false) {
        console.log('+++');
    } else {
        console.log('---');
    }
    // Поскольку пустая строка при приведении к логическому типу становится false,
    // то условие test == false будет истинным.
});
document.getElementById('buttonContainer225').appendChild(button225);

const button226 = document.createElement('button');
button226.innerText = '119_7';
button226.addEventListener('click', function() {
    let test;

    if (test == true) {
        console.log('+++');
    } else {
        console.log('---');
    }
    // Поскольку переменная test не инициализирована (undefined), то условие test == true будет ложным.
});
document.getElementById('buttonContainer226').appendChild(button226);

const button227 = document.createElement('button');
button227.innerText = '119_8';
button227.addEventListener('click', function() {
    let test = 3 * 'a';

    if (test == true) {
        console.log('+++');
    } else {
        console.log('---');
    }
    // Поскольку NaN при приведении к логическому типу становится false,
    // то условие test == true будет ложным.
});
document.getElementById('buttonContainer227').appendChild(button227);

const button228 = document.createElement('button');
button228.innerText = '120_1';
button228.addEventListener('click', function() {
    let test = true;

    if (test) {
        console.log('+++');
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer228').appendChild(button228);

const button229 = document.createElement('button');
button229.innerText = '121_1';
button229.addEventListener('click', function() {
    let test = true;

    if (!test) {
        console.log('+++');
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer229').appendChild(button229);

const button230 = document.createElement('button');
button230.innerText = '121_2';
button230.addEventListener('click', function() {
    let test = true;

    if (!test) {
        console.log('+++');
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer230').appendChild(button230);

const button231 = document.createElement('button');
button231.innerText = '121_3';
button231.addEventListener('click', function() {
    let test = true;

    if (test) {
        console.log('+++');
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer231').appendChild(button231);

const button232 = document.createElement('button');
button232.innerText = '122_1';
button232.addEventListener('click', function() {
    let test = 3;

    // Не запуская код, определите, что выведется в консоль
    // Код:
    if (test) {
        console.log('+++');
    } else {
        console.log('---');
    }
    // Поскольку 3 является истинным значением, вывод будет '+++'
    console.log('+++'); // Вывод: +++
});
document.getElementById('buttonContainer232').appendChild(button232);

const button233 = document.createElement('button');
button233.innerText = '122_2';
button233.addEventListener('click', function() {
    let test = 'abc';

    // Не запуская код, определите, что выведется в консоль
    // Код:
    if (test) {
        console.log('+++');
    } else {
        console.log('---');
    }
    // Поскольку непустая строка является истинным значением, вывод будет '+++'
    console.log('+++'); // Вывод: +++
});
document.getElementById('buttonContainer233').appendChild(button233);

const button234 = document.createElement('button');
button234.innerText = '122_3';
button234.addEventListener('click', function() {
    let test = '';

    // Не запуская код, определите, что выведется в консоль
    // Код:
    if (test) {
        console.log('+++');
    } else {
        console.log('---');
    }
    // Поскольку пустая строка является ложным значением, вывод будет '---'
    console.log('---'); // Вывод: ---
});
document.getElementById('buttonContainer234').appendChild(button234);

const button235 = document.createElement('button');
button235.innerText = '122_4';
button235.addEventListener('click', function() {
    let test = 3 * 'abc'; // Результат будет NaN.

    // Не запуская код, определите, что выведется в консоль
    // Код:
    if (test) {
        console.log('+++');
    } else {
        console.log('---');
    }
    // Поскольку NaN является ложным значением, вывод будет '---'
    console.log('---'); // Вывод: ---
});
document.getElementById('buttonContainer235').appendChild(button235);

const button236 = document.createElement('button');
button236.innerText = '122_5';
button236.addEventListener('click', function() {
    let test = null;

    // Не запуская код, определите, что выведется в консоль
    // Код:
    if (test) {
        console.log('+++');
    } else {
        console.log('---');
    }
    // Поскольку null является ложным значением, вывод будет '---'
    console.log('---'); // Вывод: ---
});
document.getElementById('buttonContainer236').appendChild(button236);

const button237 = document.createElement('button');
button237.innerText = '122_6';
button237.addEventListener('click', function() {
    let test = false;

    // Не запуская код, определите, что выведется в консоль
    // Код:
    if (test) {
        console.log('+++');
    } else {
        console.log('---');
    }
    // Поскольку false является ложным значением, вывод будет '---'
    console.log('---'); // Вывод: ---
});
document.getElementById('buttonContainer237').appendChild(button237);

const button238 = document.createElement('button');
button238.innerText = '122_7';
button238.addEventListener('click', function() {
    let test;

    // Не запуская код, определите, что выведется в консоль
    // Код:
    if (test) {
        console.log('+++');
    } else {
        console.log('---');
    }
    // Поскольку undefined является ложным значением, вывод будет '---'
    console.log('---'); // Вывод: ---
});
document.getElementById('buttonContainer238').appendChild(button238);

const button239 = document.createElement('button');
button239.innerText = '122_8';
button239.addEventListener('click', function() {
    let test = 0;

    // Не запуская код, определите, что выведется в консоль
    // Код:
    if (test) {
        console.log('+++');
    } else {
        console.log('---');
    }
    // Поскольку 0 является ложным значением, вывод будет '---'
    console.log('---'); // Вывод: ---
});
document.getElementById('buttonContainer239').appendChild(button239);

const button240 = document.createElement('button');
button240.innerText = '122_9';
button240.addEventListener('click', function() {
    let test = '0';

    // Не запуская код, определите, что выведется в консоль
    // Код:
    if (test) {
        console.log('+++');
    } else {
        console.log('---');
    }
    // Поскольку непустая строка является истинным значением, вывод будет '+++'
    console.log('+++'); // Вывод: +++
});
document.getElementById('buttonContainer240').appendChild(button240);

const button241 = document.createElement('button');
button241.innerText = '122_10';
button241.addEventListener('click', function() {
    let test = -1;

    // Не запуская код, определите, что выведется в консоль
    // Код:
    if (test) {
        console.log('+++');
    } else {
        console.log('---');
    }
    // Поскольку -1 является истинным значением, вывод будет '+++'
    console.log('+++'); // Вывод: +++
});
document.getElementById('buttonContainer241').appendChild(button241);

const button242 = document.createElement('button');
button242.innerText = '123_1';
button242.addEventListener('click', function() {
    let test1 = true;
    let test2 = true;

    if (test1 && test2) {
        console.log('+++');
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer242').appendChild(button242);

const button243 = document.createElement('button');
button243.innerText = '123_2';
button243.addEventListener('click', function() {
    let test1 = true;
    let test2 = true;

    if (test1 && !test2) {
        console.log('+++');
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer243').appendChild(button243);

const button244 = document.createElement('button');
button244.innerText = '123_3';
button244.addEventListener('click', function() {
    let test1 = true;
    let test2 = true;

    if (!test1 && !test2) {
        console.log('+++');
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer244').appendChild(button244);

const button245 = document.createElement('button');
button245.innerText = '123_4';
button245.addEventListener('click', function() {
    let test1 = true;
    let test2 = true;

    if (test1 && test2) {
        console.log('+++');
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer245').appendChild(button245);

const button246 = document.createElement('button');
button246.innerText = '123_5';
button246.addEventListener('click', function() {
    let test1 = true;
    let test2 = true;
    let test3 = true;

    if (test1 && test2 && test3) {
        console.log('+++');
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer246').appendChild(button246);

const button247 = document.createElement('button');
button247.innerText = '123_6';
button247.addEventListener('click', function() {
    let test1 = true;
    let test2 = true;
    let test3 = true;

    if (test1 || (test2 && test3)) {
        console.log('+++');
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer247').appendChild(button247);

const button248 = document.createElement('button');
button248.innerText = '123_7';
button248.addEventListener('click', function() {
    let test1 = true;
    let test2 = true;
    let test3 = true;

    if (test1 || (!test2 && !test3)) {
        console.log('+++');
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer248').appendChild(button248);

const button249 = document.createElement('button');
button249.innerText = '124_1';
button249.addEventListener('click', function() {
    let test = 10;

    if (test == 10) {
        console.log('yes');
    }
});
document.getElementById('buttonContainer249').appendChild(button249);

const button250 = document.createElement('button');
button250.innerText = '125_1';
button250.addEventListener('click', function() {
    let test = -1; if (test > 0) console.log('+++'); else console.log('---');
});
document.getElementById('buttonContainer250').appendChild(button250);

const button251 = document.createElement('button');
button251.innerText = '125_2';
button251.addEventListener('click', function() {
    let test = 2; if (test > 0) console.log('+++');
});
document.getElementById('buttonContainer251').appendChild(button251);

const button252 = document.createElement('button');
button252.innerText = '127_1';
button252.addEventListener('click', function() {
    let day = 15;

    if (day >= 1 && day <= 10) {
        console.log('Первая декада месяца');
    } else if (day >= 11 && day <= 20) {
        console.log('Вторая декада месяца');
    } else if (day >= 21 && day <= 31) {
        console.log('Третья декада месяца');
    } else {
        console.log('Неверное значение переменной day');
    }
});
document.getElementById('buttonContainer252').appendChild(button252);

const button253 = document.createElement('button');
button253.innerText = '127_2';
button253.addEventListener('click', function() {
    let day = 32;

    if (day >= 1 && day <= 10) {
        console.log('Первая декада месяца');
    } else if (day >= 11 && day <= 20) {
        console.log('Вторая декада месяца');
    } else if (day >= 21 && day <= 31) {
        console.log('Третья декада месяца');
    } else {
        console.log('Неверное значение переменной day');
    }
});
document.getElementById('buttonContainer253').appendChild(button253);

const button254 = document.createElement('button');
button254.innerText = '128_1';
button254.addEventListener('click', function() {
    let num = 45; // Пример значения

    if (num >= 10 && num <= 99) {
        let sum = Math.floor(num / 10) + (num % 10); // Сумма цифр

        if (sum <= 9) {
            console.log('Сумма цифр однозначна');
        } else {
            console.log('Сумма цифр двухзначна');
        }
    } else {
        console.log('Число не в диапазоне от 10 до 99');
    }
});
document.getElementById('buttonContainer254').appendChild(button254);

const button255 = document.createElement('button');
button255.innerText = '129_1';
button255.addEventListener('click', function() {
    let lang = 'ru'; // Пример значения

    switch (lang) {
        case 'ru':
            console.log('рус');
            break;
        case 'en':
            console.log('анг');
            break;
        case 'de':
            console.log('нем');
            break;
        default:
            console.log('язык не поддерживается');
            break;
    }
});
document.getElementById('buttonContainer255').appendChild(button255);

const button256 = document.createElement('button');
button256.innerText = '131_1';
button256.addEventListener('click', function() {
    let num = 1;
    let res = (num >= 0) ? '1' : '2';

    console.log(res);
});
document.getElementById('buttonContainer256').appendChild(button256);

const button257 = document.createElement('button');
button257.innerText = '132_1';
button257.addEventListener('click', function() {
    let a = 2 * (3 - 1);
    let b = 6 - 2;
    console.log(a == b);
});
document.getElementById('buttonContainer257').appendChild(button257);

const button258 = document.createElement('button');
button258.innerText = '132_2';
button258.addEventListener('click', function() {
    let a = 5 * (7 - 4);
    let b = 1 + 2 + 7;
    console.log(a > b);
});
document.getElementById('buttonContainer258').appendChild(button258);

const button259 = document.createElement('button');
button259.innerText = '132_3';
button259.addEventListener('click', function() {
    let a = 2 ** 4;
    let b = 4 ** 2;
    console.log(a != b);
});
document.getElementById('buttonContainer259').appendChild(button259);

const button260 = document.createElement('button');
button260.innerText = '133_1';
button260.addEventListener('click', function() {
    let ok = confirm('Вам уже 18 лет?');
    if (ok) {
        alert('Добро пожаловать, это контент для взрослых.');
    } else {
        alert('Доступ запрещен.');
    }
});
document.getElementById('buttonContainer260').appendChild(button260);

const button261 = document.createElement('button');
button261.innerText = '134_1';
button261.addEventListener('click', function() {
    let age = 17;
    let adult; // Объявляем переменную adult вне условий

    if (age >= 18) {
        adult = true; // Присваиваем значение переменной adult
    } else {
        adult = false; // Присваиваем значение переменной adult
    }

    console.log(adult); // Выводим значение переменной adult
});
document.getElementById('buttonContainer261').appendChild(button261);

const button262 = document.createElement('button');
button262.innerText = '135_1';
button262.addEventListener('click', function() {
    let age = 17;
    let adult;

    if (age >= 18) {
        adult = true;
    } else {
        adult = false;
    }

    console.log(adult);
});
document.getElementById('buttonContainer262').appendChild(button262);

const button263 = document.createElement('button');
button263.innerText = '135_2';
button263.addEventListener('click', function() {
    let age = 17;
    let adult;

    if (age >= 18) {
        adult = true;
    } else {
        adult = false;
    }

    console.log(adult);
});
document.getElementById('buttonContainer263').appendChild(button263);

const button264 = document.createElement('button');
button264.innerText = '135_3';
button264.addEventListener('click', function() {
    let age = 17;
    let res;

    if (age >= 18) {
        if (age <= 23) {
            res = 'от 18 до 23';
        } else {
            res = 'больше 23';
        }
    } else {
        res = 'меньше 18';
    }

    console.log(res);
});
document.getElementById('buttonContainer264').appendChild(button264);

const button265 = document.createElement('button');
button265.innerText = '135_4';
button265.addEventListener('click', function() {
    let age = 19; // Пример возраста
    let res; // Объявляем переменную res

    if (age >= 18) {
        if (age <= 23) {
            res = 'от 18 до 23';
        } else {
            res = 'больше 23';
        }
    } else {
        res = 'меньше 18';
    }

    console.log(res);
});
document.getElementById('buttonContainer265').appendChild(button265);

const button266 = document.createElement('button');
button266.innerText = '136_1';
button266.addEventListener('click', function() {
    let min = 10;

    if (min >= 0 && min < 20) {
        console.log('1 треть часа');
    }

    if (min >= 20 && min < 40) {
        console.log('2 треть часа');
    }

    if (min >= 40 && min < 60) {
        console.log('3 треть часа');
    }
});
document.getElementById('buttonContainer266').appendChild(button266);

const button267 = document.createElement('button');
button267.innerText = '137_1';
button267.addEventListener('click', function() {
    let arr = [1, 2, 3];

    if (arr.length === 3) {
        let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        console.log('Сумма элементов массива:', sum);
    }
});
document.getElementById('buttonContainer267').appendChild(button267);

const button268 = document.createElement('button');
button268.innerText = '138_1';
button268.addEventListener('click', function() {
    let str = 'apple';

    if (str[0] === 'a') {
        console.log('Строка начинается на символ "a".');
    }
});
document.getElementById('buttonContainer268').appendChild(button268);

const button269 = document.createElement('button');
button269.innerText = '138_2';
button269.addEventListener('click', function() {
    let str = 'example';
    let last = str[str.length - 1];

    if (last === 'x') {
        console.log('Строка заканчивается на символ "x".');
    }
});
document.getElementById('buttonContainer269').appendChild(button269);

const button270 = document.createElement('button');
button270.innerText = '138_3';
button270.addEventListener('click', function() {
    let str = 'banana';

    if (str[0] === 'a' || str[0] === 'b') {
        console.log('Строка начинается на символ "a" или "b".');
    }
});
document.getElementById('buttonContainer270').appendChild(button270);

const button271 = document.createElement('button');
button271.innerText = '139_1';
button271.addEventListener('click', function() {
    let num = 120;
    let last = String(num)[String(num).length - 1];

    if (last === '0') {
        console.log('Последняя цифра равна нулю.');
    }
});
document.getElementById('buttonContainer271').appendChild(button271);

const button272 = document.createElement('button');
button272.innerText = '139_2';
button272.addEventListener('click', function() {
    let num = 1234;
    let last = String(num)[String(num).length - 1];

    if (last === '0' || last === '2' || last === '4' || last === '6' || last === '8') {
        console.log('Четное число.');
    } else {
        console.log('Нечетное число.');
    }
});
document.getElementById('buttonContainer272').appendChild(button272);

const button273 = document.createElement('button');
button273.innerText = '140_1';
button273.addEventListener('click', function() {
    let num = 6;

    if (num % 2 === 0) {
        console.log('Четное число.');
    } else {
        console.log('Нечетное число.');
    }
});
document.getElementById('buttonContainer273').appendChild(button273);

const button274 = document.createElement('button');
button274.innerText = '140_2';
button274.addEventListener('click', function() {
    let num = 9;

    if (num % 3 === 0) {
        console.log('Число делится на 3.');
    } else {
        console.log('Число не делится на 3.');
    }
});
document.getElementById('buttonContainer274').appendChild(button274);

const button275 = document.createElement('button');
button275.innerText = '141_1';
button275.addEventListener('click', function() {
    let num1 = 1;
    let num2 = 2;

    if (num1 + num2 === 3) {
        console.log('+++');
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer275').appendChild(button275);

const button276 = document.createElement('button');
button276.innerText = '141_2';
button276.addEventListener('click', function() {
    let num1 = '1';
    let num2 = '2';

    if (Number(num1) + Number(num2) === 3) {
        console.log('+++');
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer276').appendChild(button276);

const button277 = document.createElement('button');
button277.innerText = '141_3';
button277.addEventListener('click', function() {
    let num1 = '1';
    let num2 = '2';

    if (Number(num1) + Number(num2) === 3) {
        console.log('+++');
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer277').appendChild(button277);

const button278 = document.createElement('button');
button278.innerText = '141_4';
button278.addEventListener('click', function() {
    let num = 123;

    if (String(num)[0] === '1') {
        console.log('+++');
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer278').appendChild(button278);

const button279 = document.createElement('button');
button279.innerText = '141_5';
button279.addEventListener('click', function() {
    let num = 123;

    if (String(num)[0] === '1') {
        console.log('+++');
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer279').appendChild(button279);

const button280 = document.createElement('button');
button280.innerText = '141_6';
button280.addEventListener('click', function() {
    let num = 123;

    if (String(num)[0] === '1') {
        console.log('+++');
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer280').appendChild(button280);

const button281 = document.createElement('button');
button281.innerText = '141_7';
button281.addEventListener('click', function() {
    let num = 123;
    let first = String(num)[0];

    if (first === '1') {
        console.log('+++');
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer281').appendChild(button281);

const button282 = document.createElement('button');
button282.innerText = '141_8';
button282.addEventListener('click', function() {
    let num = 12;

    if (String(num).length === 2) {
        console.log('+++');
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer282').appendChild(button282);

const button283 = document.createElement('button');
button283.innerText = '141_9';
button283.addEventListener('click', function() {
    let num = 12;

    if (String(num).length === 2) {
        console.log('+++');
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer283').appendChild(button283);

const button284 = document.createElement('button');
button284.innerText = '141_10';
button284.addEventListener('click', function() {
    let num = 12;

    if (String(num).length === 2) {
        console.log('+++');
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer284').appendChild(button284);

const button285 = document.createElement('button');
button285.innerText = '141_11';
button285.addEventListener('click', function() {
    let num = 12;

    if (String(num).length === 2) {
        console.log('+++');
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer285').appendChild(button285);

const button286 = document.createElement('button');
button286.innerText = '141_12';
button286.addEventListener('click', function() {
    let num = 12;

    if (String(num).length === 2) {
        console.log('+++');
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer286').appendChild(button286);

const button287 = document.createElement('button');
button287.innerText = '141_13';
button287.addEventListener('click', function() {
    let num = '123033';

    let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
    let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);

    if (sum1 === sum2) {
        console.log('суммы равны');
    } else {
        console.log('суммы не равны');
    }
});
document.getElementById('buttonContainer287').appendChild(button287);

const button288 = document.createElement('button');
button288.innerText = '142_1';
button288.addEventListener('click', function() {
    let month = 3;

    if (month === 12 || month === 1 || month === 2) {
        console.log('Зима');
    } else if (month >= 3 && month <= 5) {
        console.log('Весна');
    } else if (month >= 6 && month <= 8) {
        console.log('Лето');
    } else if (month >= 9 && month <= 11) {
        console.log('Осень');
    } else {
        console.log('Некорректный месяц');
    }
});
document.getElementById('buttonContainer288').appendChild(button288);

const button289 = document.createElement('button');
button289.innerText = '142_2';
button289.addEventListener('click', function() {
    let str = 'abcde';

    if (str[0] === 'a') {
        console.log('да');
    } else {
        console.log('нет');
    }
});
document.getElementById('buttonContainer289').appendChild(button289);

const button290 = document.createElement('button');
button290.innerText = '142_3';
button290.addEventListener('click', function() {
    let num = 12345;

    if (String(num)[0] === '1' || String(num)[0] === '2' || String(num)[0] === '3') {
        console.log('да');
    } else {
        console.log('нет');
    }
});
document.getElementById('buttonContainer290').appendChild(button290);

const button291 = document.createElement('button');
button291.innerText = '142_4';
button291.addEventListener('click', function() {
    let num = 456;

    let sum = Number(String(num)[0]) + Number(String(num)[1]) + Number(String(num)[2]);
    console.log('Сумма цифр: ' + sum);
});
document.getElementById('buttonContainer291').appendChild(button291);

const button292 = document.createElement('button');
button292.innerText = '142_5';
button292.addEventListener('click', function() {
    let num = 123456;

    let sum1 = Number(String(num)[0]) + Number(String(num)[1]) + Number(String(num)[2]);
    let sum2 = Number(String(num)[3]) + Number(String(num)[4]) + Number(String(num)[5]);

    if (sum1 === sum2) {
        console.log('да');
    } else {
        console.log('нет');
    }
});
document.getElementById('buttonContainer292').appendChild(button292);

const button293 = document.createElement('button');
button293.innerText = '144_1';
button293.addEventListener('click', function() {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    for (let elem of arr) {
        console.log(elem);
    }
});
document.getElementById('buttonContainer293').appendChild(button293);

const button294 = document.createElement('button');
button294.innerText = '145_1';
button294.addEventListener('click', function() {
    let obj = {x: 1, y: 2, z: 3};
    for (let key in obj) {
        console.log(key);
    }
});
document.getElementById('buttonContainer294').appendChild(button294);

const button295 = document.createElement('button');
button295.innerText = '145_2';
button295.addEventListener('click', function() {
    let obj = {x: 1, y: 2, z: 3};
    for (let key in obj) {
        console.log(obj[key]);
    }
});
document.getElementById('buttonContainer295').appendChild(button295);

const button296 = document.createElement('button');
button296.innerText = '146_1';
button296.addEventListener('click', function() {
    let i = 1;
    while (i <= 100) {
        console.log(i);
        i++;
    }
});
document.getElementById('buttonContainer296').appendChild(button296);

const button297 = document.createElement('button');
button297.innerText = '146_2';
button297.addEventListener('click', function() {
    let i = 11;
    while (i <= 33) {
        console.log(i);
        i++;
    }
});
document.getElementById('buttonContainer297').appendChild(button297);

const button298 = document.createElement('button');
button298.innerText = '146_3';
button298.addEventListener('click', function() {
    let num = 1;
    let iterations = 0;
    while (num <= 1000) {
        num *= 3;
        iterations++;
    }
    console.log('Final number:', num);
    console.log('Iterations:', iterations);
});
document.getElementById('buttonContainer298').appendChild(button298);

const button299 = document.createElement('button');
button299.innerText = '147_1';
button299.addEventListener('click', function() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
});
document.getElementById('buttonContainer299').appendChild(button299);

const button300 = document.createElement('button');
button300.innerText = '147_2';
button300.addEventListener('click', function() {
    for (let i = 11; i <= 33; i++) {
        console.log(i);
    }
});
document.getElementById('buttonContainer300').appendChild(button300);

const button301 = document.createElement('button');
button301.innerText = '147_3';
button301.addEventListener('click', function() {
    for (let i = 0; i <= 100; i += 2) {
        console.log(i);
    }
});
document.getElementById('buttonContainer301').appendChild(button301);

const button302 = document.createElement('button');
button302.innerText = '147_4';
button302.addEventListener('click', function() {
    for (let i = 1; i < 100; i += 2) {
        console.log(i);
    }
});
document.getElementById('buttonContainer302').appendChild(button302);

const button303 = document.createElement('button');
button303.innerText = '147_5';
button303.addEventListener('click', function() {
    for (let i = 100; i >= 0; i--) {
        console.log(i);
    }
});
document.getElementById('buttonContainer303').appendChild(button303);

const button304 = document.createElement('button');
button304.innerText = '148_1';
button304.addEventListener('click', function() {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
});
document.getElementById('buttonContainer304').appendChild(button304);

const button305 = document.createElement('button');
button305.innerText = '148_2';
button305.addEventListener('click', function() {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    for (let i = 1; i < arr.length - 1; i++) {
        console.log(arr[i]);
    }
});
document.getElementById('buttonContainer305').appendChild(button305);

const button306 = document.createElement('button');
button306.innerText = '148_3';
button306.addEventListener('click', function() {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
});
document.getElementById('buttonContainer306').appendChild(button306);

const button307 = document.createElement('button');
button307.innerText = '148_4';
button307.addEventListener('click', function() {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
});
document.getElementById('buttonContainer307').appendChild(button307);

const button308 = document.createElement('button');
button308.innerText = '149_1';
button308.addEventListener('click', function() {
    let arr = [2, 5, 9, 15, 1, 4];
    for (let elem of arr) {
        if (elem > 3 && elem < 10) {
            console.log(elem);
        }
    }
});
document.getElementById('buttonContainer308').appendChild(button308);

const button309 = document.createElement('button');
button309.innerText = '149_2';
button309.addEventListener('click', function() {
    let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
    for (let key in obj) {
        if (obj[key] % 2 !== 0) {
            console.log(obj[key]);
        }
    }
});
document.getElementById('buttonContainer309').appendChild(button309);

const button310 = document.createElement('button');
button310.innerText = '150_1';
button310.addEventListener('click', function() {
    let sumEven = 0;
    for (let i = 2; i <= 100; i += 2) {
        sumEven += i;
    }
    console.log(sumEven);
});
document.getElementById('buttonContainer310').appendChild(button310);

const button311 = document.createElement('button');
button311.innerText = '150_2';
button311.addEventListener('click', function() {
    let sumOdd = 0;
    for (let i = 1; i < 100; i += 2) {
        sumOdd += i;
    }
    console.log(sumOdd);
});
document.getElementById('buttonContainer311').appendChild(button311);

const button312 = document.createElement('button');
button312.innerText = '150_3';
button312.addEventListener('click', function() {
    let product = 1;
    for (let i = 1; i <= 20; i++) {
        product *= i;
    }
    console.log(product);
});
document.getElementById('buttonContainer312').appendChild(button312);

const button313 = document.createElement('button');
button313.innerText = '151_1';
button313.addEventListener('click', function() {
    let arr = [2, 5, 9, 3, 1, 4];
    let sum = 0;
    for (let elem of arr) {
        sum += elem;
    }
    console.log(sum);
});
document.getElementById('buttonContainer313').appendChild(button313);

const button314 = document.createElement('button');
button314.innerText = '151_2';
button314.addEventListener('click', function() {
    let arr = [2, 5, 9, 3, 1, 4];
    let sumEven = 0;
    for (let elem of arr) {
        if (elem % 2 === 0) {
            sumEven += elem;
        }
    }
    console.log(sumEven);
});
document.getElementById('buttonContainer314').appendChild(button314);

const button315 = document.createElement('button');
button315.innerText = '151_3';
button315.addEventListener('click', function() {
    let arr = [2, 5, 9, 3, 1, 4];
    let sumSquares = 0;
    for (let elem of arr) {
        sumSquares += elem ** 2;
    }
    console.log(sumSquares);
});
document.getElementById('buttonContainer315').appendChild(button315);

const button316 = document.createElement('button');
button316.innerText = '151_4';
button316.addEventListener('click', function() {
    let arr = [2, 5, 9, 3, 1, 4];
    let product = 1;
    for (let elem of arr) {
        product *= elem;
    }
    console.log(product);
});
document.getElementById('buttonContainer316').appendChild(button316);

const button317 = document.createElement('button');
button317.innerText = '152_1';
button317.addEventListener('click', function() {
    let str = '';
    for (let i = 0; i < 5; i++) {
        str += '-';
    }
    console.log(str);
});
document.getElementById('buttonContainer317').appendChild(button317);

const button318 = document.createElement('button');
button318.innerText = '152_2';
button318.addEventListener('click', function() {
    let str = '';
    for (let i = 1; i <= 9; i++) {
        str += i;
    }
    console.log(str);
});
document.getElementById('buttonContainer318').appendChild(button318);

const button319 = document.createElement('button');
button319.innerText = '152_3';
button319.addEventListener('click', function() {
    let str = '';
    for (let i = 9; i >= 1; i--) {
        str += i;
    }
    console.log(str);
});
document.getElementById('buttonContainer319').appendChild(button319);

const button320 = document.createElement('button');
button320.innerText = '152_4';
button320.addEventListener('click', function() {
    let str = '';
    for (let i = 1; i <= 9; i++) {
        str += `-${i}`;
    }
    str += '-';
    console.log(str);
});
document.getElementById('buttonContainer320').appendChild(button320);

const button321 = document.createElement('button');
button321.innerText = '153_1';
button321.addEventListener('click', function() {
    for (let i = 10; i <= 1000; i++) {
        let str = String(i);
        console.log(str[0]);
    }
});
document.getElementById('buttonContainer321').appendChild(button321);

const button322 = document.createElement('button');
button322.innerText = '153_2';
button322.addEventListener('click', function() {
    for (let i = 10; i <= 1000; i++) {
        let str = String(i);
        let sum = Number(str[0]) + Number(str[1]);
        console.log(sum);
    }
});
document.getElementById('buttonContainer322').appendChild(button322);

const button323 = document.createElement('button');
button323.innerText = '153_3';
button323.addEventListener('click', function() {
    for (let i = 10; i <= 1000; i++) {
        let str = String(i);
        if (str[0] === '1') {
            console.log(i);
        }
    }
});
document.getElementById('buttonContainer323').appendChild(button323);

const button324 = document.createElement('button');
button324.innerText = '153_4';
button324.addEventListener('click', function() {
    for (let i = 10; i <= 1000; i++) {
        let str = String(i);
        let sum = Number(str[0]) + Number(str[1]);
        if (sum === 5) {
            console.log(i);
        }
    }
});
document.getElementById('buttonContainer324').appendChild(button324);

const button325 = document.createElement('button');
button325.innerText = '154_1';
button325.addEventListener('click', function() {
    let arr = [1, 2, 3, 0, 4, 5];
    for (let elem of arr) {
        if (elem === 0) {
            break;
        }
        console.log(elem);
    }
});
document.getElementById('buttonContainer325').appendChild(button325);

const button326 = document.createElement('button');
button326.innerText = '154_2';
button326.addEventListener('click', function() {
    let arr = [1, 2, 3, -1, 4, 5];
    let sum = 0;
    for (let elem of arr) {
        if (elem < 0) {
            break;
        }
        sum += elem;
    }
    console.log(sum);
});
document.getElementById('buttonContainer326').appendChild(button326);

const button327 = document.createElement('button');
button327.innerText = '154_3';
button327.addEventListener('click', function() {
    let arr = [1, 2, 3, 4, 5];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 3) {
            console.log(i);
            break;
        }
    }
});
document.getElementById('buttonContainer327').appendChild(button327);

const button328 = document.createElement('button');
button328.innerText = '154_4';
button328.addEventListener('click', function() {
    let sum = 0;
    let count = 0;
    while (sum <= 100) {
        count++;
        sum += count;
    }
    console.log(count);
});
document.getElementById('buttonContainer328').appendChild(button328);

const button329 = document.createElement('button');
button329.innerText = '156_1';
button329.addEventListener('click', function() {
    let result = '';
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 3; j++) {
            result += i;
        }
    }
    console.log(result);
});
document.getElementById('buttonContainer329').appendChild(button329);

const button330 = document.createElement('button');
button330.innerText = '156_2';
button330.addEventListener('click', function() {
    let result = '';
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            result += '' + i + j + ' ';
        }
    }
    console.log(result.trim());
});
document.getElementById('buttonContainer330').appendChild(button330);

const button331 = document.createElement('button');
button331.innerText = '159_1';
button331.addEventListener('click', function() {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
        arr.push(i);
    }
    console.log(arr);
});
document.getElementById('buttonContainer331').appendChild(button331);

const button332 = document.createElement('button');
button332.innerText = '159_2';
button332.addEventListener('click', function() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push('x');
    }
    console.log(arr);
});
document.getElementById('buttonContainer332').appendChild(button332);

const button333 = document.createElement('button');
button333.innerText = '159_3';
button333.addEventListener('click', function() {
    let originalArray = [-1, 2, -3, 4, 5, -6];
    let positiveArray = [];
    for (let elem of originalArray) {
        if (elem > 0) {
            positiveArray.push(elem);
        }
    }
    console.log(positiveArray);
});
document.getElementById('buttonContainer333').appendChild(button333);

const button334 = document.createElement('button');
button334.innerText = '160_1';
button334.addEventListener('click', function() {
    let arr = [1, 2, 3, 4, 5];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] ** 2;
    }
    console.log(arr);
});
document.getElementById('buttonContainer334').appendChild(button334);

const button335 = document.createElement('button');
button335.innerText = '160_2';
button335.addEventListener('click', function() {
    let arr = [1, 2, 3, 4, 5];
    for (let i = 0; i < arr.length; i++) {
        arr[i]--;
    }
    console.log(arr);
});
document.getElementById('buttonContainer335').appendChild(button335);

const button336 = document.createElement('button');
button336.innerText = '160_3';
button336.addEventListener('click', function() {
    let arr = [1, 2, 3, 4, 5];
    for (let i = 0; i < arr.length; i++) {
        arr[i] += 10;
    }
    console.log(arr);
});
document.getElementById('buttonContainer336').appendChild(button336);

const button337 = document.createElement('button');
button337.innerText = '161_1';
button337.addEventListener('click', function() {
    let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    let arr2 = [1, 2, 3, 4, 5, 6, 7];
    let obj = {};

    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = arr2[i];
    }

    console.log(obj);
});
document.getElementById('buttonContainer337').appendChild(button337);

const button338 = document.createElement('button');
button338.innerText = '161_2';
button338.addEventListener('click', function() {
    let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
    let newObj = {};

    for (let key in obj) {
        if (obj[key] % 2 === 0) {
            newObj[key] = obj[key];
        }
    }

    console.log(newObj);
});
document.getElementById('buttonContainer338').appendChild(button338);

const button339 = document.createElement('button');
button339.innerText = '161_3';
button339.addEventListener('click', function() {
    let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
    let newObj = {};

    for (let key in obj) {
        newObj[obj[key]] = key;
    }

    console.log(newObj);
});
document.getElementById('buttonContainer339').appendChild(button339);

const button340 = document.createElement('button');
button340.innerText = '162_1';
button340.addEventListener('click', function() {
    let obj = {x: 1, y: 2, z: 3};

    for (let key in obj) {
        obj[key] = obj[key] ** 2;
    }

    console.log(obj);
});
document.getElementById('buttonContainer340').appendChild(button340);

const button341 = document.createElement('button');
button341.innerText = '162_2';
button341.addEventListener('click', function() {
    let obj = {x: 1, y: 2, z: 3};

    for (let key in obj) {
        obj[key] += 1;
    }

    console.log(obj);
});
document.getElementById('buttonContainer341').appendChild(button341);

const button342 = document.createElement('button');
button342.innerText = '163_1';
button342.addEventListener('click', function() {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    let flag = false;

    for (let elem of arr) {
        if (elem === 'c') {
            flag = true;
            break;
        }
    }

    if (flag === true) {
        console.log('+++');
    } else {
        console.log('---');
    }
});
document.getElementById('buttonContainer342').appendChild(button342);

const button343 = document.createElement('button');
button343.innerText = '163_2';
button343.addEventListener('click', function() {
    let num = 29;
    let flag = true;

    if (num < 2) {
        flag = false; // Числа меньше 2 не являются простыми
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                flag = false;
                break;
            }
        }
    }

    if (flag) {
        console.log(num + ' - простое число');
    } else {
        console.log(num + ' - не простое число');
    }
});
document.getElementById('buttonContainer343').appendChild(button343);

const button344 = document.createElement('button');
button344.innerText = '164_1';
button344.addEventListener('click', function() {
    let arr = [10, 20, 30, 40, 21, 32, 51];
    let sum = 0;

    for (let elem of arr) {
        let str = String(elem);
        if (str[0] === '1' || str[0] === '2') {
            sum += elem; // Суммируем элементы с первой цифрой 1 или 2
        }
    }

    console.log(sum);
});
document.getElementById('buttonContainer344').appendChild(button344);

const button345 = document.createElement('button');
button345.innerText = '165_1';
button345.addEventListener('click', function() {
    let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
    let sum = 0;

    for (let key in obj) {
        if (key[0] === 'a' || key[0] === 'b') { // Проверяем ключи 'a' и 'b'
            sum += obj[key]; // Суммируем значения, а не ключи
        }
    }

    console.log(sum);
});
document.getElementById('buttonContainer345').appendChild(button345);

const button346 = document.createElement('button');
button346.innerText = '166_1';
button346.addEventListener('click', function() {
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
});
document.getElementById('buttonContainer346').appendChild(button346);

const button347 = document.createElement('button');
button347.innerText = '166_2';
button347.addEventListener('click', function() {
    for (let i = 10; i >= 0; i--) {
        console.log(i);
    }
});
document.getElementById('buttonContainer347').appendChild(button347);

const button348 = document.createElement('button');
button348.innerText = '166_3';
button348.addEventListener('click', function() {
    for (let i = 10; i >= 0; i--) {
        console.log(i);
    }
});
document.getElementById('buttonContainer348').appendChild(button348);

const button349 = document.createElement('button');
button349.innerText = '166_4';
button349.addEventListener('click', function() {
    let i = 0;
    while (i <= 10) {
        console.log(i);
        i++;
    }
});
document.getElementById('buttonContainer349').appendChild(button349);

const button350 = document.createElement('button');
button350.innerText = '166_5';
button350.addEventListener('click', function() {
    let res = 0;
    for (let i = 1; i <= 10; i++) {
        res += i;
    }
    console.log(res);
});
document.getElementById('buttonContainer350').appendChild(button350);

const button351 = document.createElement('button');
button351.innerText = '166_6';
button351.addEventListener('click', function() {
    let res = 1; // Инициализация как 1 для произведения
    for (let i = 1; i <= 10; i++) {
        res *= i;
    }
    console.log(res);
});
document.getElementById('buttonContainer351').appendChild(button351);

const button352 = document.createElement('button');
button352.innerText = '166_7';
button352.addEventListener('click', function() {
    let arr = ['1', '2', '3', '4', '5'];
    let sum = 0;
    for (let elem of arr) {
        sum += +elem; // Приведение к числу
    }
    console.log(sum); // должно вывести 15
});
document.getElementById('buttonContainer352').appendChild(button352);

const button353 = document.createElement('button');
button353.innerText = '166_8';
button353.addEventListener('click', function() {
    let arr = ['1', '2', '3', '4', '5'];
    let sum = 0;
    for (let elem of arr) {
        sum += +elem; // Приведение к числу
    }
    console.log(sum); // должно вывести 15
});
document.getElementById('buttonContainer353').appendChild(button353);

const button354 = document.createElement('button');
button354.innerText = '166_9';
button354.addEventListener('click', function() {
    let arr = ['1', '2', '3', '4', '5'];
    let sum = 0;
    for (let elem of arr) {
        sum += +elem; // Исправлено, чтобы суммировать все элементы
    }
    console.log(sum); // должно вывести 15
});
document.getElementById('buttonContainer354').appendChild(button354);

const button355 = document.createElement('button');
button355.innerText = '166_10';
button355.addEventListener('click', function() {
    let arr = ['1', '2', '3', '4', '5'];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) { // Исправлено: условия цикла
        sum += +arr[i];
    }
    console.log(sum); // должно вывести 15
});
document.getElementById('buttonContainer355').appendChild(button355);

const button356 = document.createElement('button');
button356.innerText = '166_11';
button356.addEventListener('click', function() {
    let arr = ['1', '2', '3', '4', '5'];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += +arr[i]; // Исправлено: суммирование всех элементов
    }
    console.log(sum); // должно вывести 15
});
document.getElementById('buttonContainer356').appendChild(button356);

const button357 = document.createElement('button');
button357.innerText = '166_12';
button357.addEventListener('click', function() {
    let arr = ['1', '2', '3', '4', '5'];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += +arr[i]; // Исправлено: суммирование элементов массива
    }
    console.log(sum); // должно вывести 15
});
document.getElementById('buttonContainer357').appendChild(button357);

const button358 = document.createElement('button');
button358.innerText = '166_13';
button358.addEventListener('click', function() {
    let arr = [1, 2, 3, 4, 5];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] ** 2; // Изменение элемента массива на его квадрат
    }
    console.log(arr);
});
document.getElementById('buttonContainer358').appendChild(button358);

const button359 = document.createElement('button');
button359.innerText = '166_14';
button359.addEventListener('click', function() {
    let arr = [];
    for (let i = 1; i <= 5; i++) {
        arr.push(i); // Инициализация массива и добавление значений
    }
    console.log(arr);
});
document.getElementById('buttonContainer359').appendChild(button359);

const button360 = document.createElement('button');
button360.innerText = '166_15';
button360.addEventListener('click', function() {
    let obj = {a: 1, b: 2, c: 3};
    let sum = 0;
    for (let key in obj) {
        sum += obj[key]; // Исправлено: суммирование значений
    }
    console.log(sum);
});
document.getElementById('buttonContainer360').appendChild(button360);

const button361 = document.createElement('button');
button361.innerText = '166_16';
button361.addEventListener('click', function() {
    let obj = {a: 1, b: 2, c: 3};
    let sum = 0;
    for (let key in obj) {
        sum += obj[key]; // Исправлено: суммирование значений
    }
    console.log(sum);
});
document.getElementById('buttonContainer361').appendChild(button361);

const button362 = document.createElement('button');
button362.innerText = '166_17';
button362.addEventListener('click', function() {
    let arr = [1, 2, 3, 4, 5];
    let res = false; // Изменение начального значения
    for (let elem of arr) {
        if (elem === 3) {
            res = true; // Исправлено: не создаем новую переменную
            break; // Прерывание цикла
        }
    }
    console.log(res);
});
document.getElementById('buttonContainer362').appendChild(button362);

const button363 = document.createElement('button');
button363.innerText = '166_18';
button363.addEventListener('click', function() {
    let arr = [];
    for (let i = 1; i <= 5; i++) {
        arr.push(i); // Инициализация массива и добавление значений
    }
    console.log(arr);
});
document.getElementById('buttonContainer363').appendChild(button363);

const button364 = document.createElement('button');
button364.innerText = '166_19';
button364.addEventListener('click', function() {
    let arr = [1, 2, 3, 4, 5];
    let res = false;
    for (let elem of arr) {
        if (elem === 3) {
            res = true; // Исправлено: не создаем новую переменную
            break; // Прерывание цикла
        }
    }
    console.log(res);
});
document.getElementById('buttonContainer364').appendChild(button364);

const button365 = document.createElement('button');
button365.innerText = '166_20';
button365.addEventListener('click', function() {
    let arr = [1, 2, 3, 4, 5];
    for (let elem of arr) {
        if (elem % 2 === 0) { // Исправлено: правильный оператор сравнения
            console.log(elem);
        }
    }
});
document.getElementById('buttonContainer365').appendChild(button365);

const button366 = document.createElement('button');
button366.innerText = '166_21';
button366.addEventListener('click', function() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let res = []; // Инициализация нового массива
    for (let elem of arr) {
        if (elem % 2 !== 0) { // Проверка на нечетность
            res.push(elem); // Добавление нечетного элемента в новый массив
        }
    }
    console.log(res); // Вывод нового массива
});
document.getElementById('buttonContainer366').appendChild(button366);

const button367 = document.createElement('button');
button367.innerText = '167_1';
button367.addEventListener('click', function() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
});
document.getElementById('buttonContainer367').appendChild(button367);

const button368 = document.createElement('button');
button368.innerText = '167_2';
button368.addEventListener('click', function() {
    for (let i = 100; i >= 1; i--) {
        console.log(i);
    }
});
document.getElementById('buttonContainer368').appendChild(button368);

const button369 = document.createElement('button');
button369.innerText = '167_3';
button369.addEventListener('click', function() {
    for (let i = 2; i <= 100; i += 2) {
        console.log(i);
    }
});
document.getElementById('buttonContainer369').appendChild(button369);

const button370 = document.createElement('button');
button370.innerText = '167_4';
button370.addEventListener('click', function() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push('x'); // Заполнение массива 10-ю 'иксами'
    }
    console.log(arr);
});
document.getElementById('buttonContainer370').appendChild(button370);

const button371 = document.createElement('button');
button371.innerText = '167_5';
button371.addEventListener('click', function() {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
        arr.push(i); // Заполнение массива числами от 1 до 10
    }
    console.log(arr);
});
document.getElementById('buttonContainer371').appendChild(button371);

const button372 = document.createElement('button');
button372.innerText = '167_6';
button372.addEventListener('click', function() {
    let arr = [-5, 3, 7, -2, 9, -1, 12];
    for (let elem of arr) {
        if (elem > 0 && elem < 10) {
            console.log(elem); // Вывод элементов больше 0 и меньше 10
        }
    }
});
document.getElementById('buttonContainer372').appendChild(button372);

const button373 = document.createElement('button');
button373.innerText = '167_7';
button373.addEventListener('click', function() {
    let arr = [1, 2, 3, 4, 5, 6];
    let hasFive = false; // Переменная для проверки
    for (let elem of arr) {
        if (elem === 5) {
            hasFive = true; // Если найден 5
            break; // Прерывание цикла
        }
    }
    console.log(hasFive);
});
document.getElementById('buttonContainer373').appendChild(button373);

const button374 = document.createElement('button');
button374.innerText = '167_8';
button374.addEventListener('click', function() {
    let arr = [1, 2, 3, 4, 5];
    let sum = 0;
    for (let elem of arr) {
        sum += elem; // Суммирование элементов
    }
    console.log(sum);
});
document.getElementById('buttonContainer374').appendChild(button374);

const button375 = document.createElement('button');
button375.innerText = '167_9';
button375.addEventListener('click', function() {
    let arr = [1, 2, 3, 4];
    let sumOfSquares = 0; // Инициализация суммы квадратов
    for (let elem of arr) {
        sumOfSquares += elem ** 2; // Суммирование квадратов
    }
    console.log(sumOfSquares);
});
document.getElementById('buttonContainer375').appendChild(button375);

const button376 = document.createElement('button');
button376.innerText = '167_10';
button376.addEventListener('click', function() {
    let arr = [2, 4, 6, 8, 10];
    let sum = 0;
    for (let elem of arr) {
        sum += elem; // Суммирование элементов
    }
    let average = sum / arr.length; // Среднее арифметическое
    console.log(average);
});
document.getElementById('buttonContainer376').appendChild(button376);

const button377 = document.createElement('button');
button377.innerText = '167_11';
button377.addEventListener('click', function() {
    let num = 5;
    let factorial = 1; // Инициализация факториала
    for (let i = 1; i <= num; i++) {
        factorial *= i; // Умножение для нахождения факториала
    }
    console.log(factorial);
});
document.getElementById('buttonContainer377').appendChild(button377);

const button378 = document.createElement('button');
button378.innerText = '167_12';
button378.addEventListener('click', function() {
    let arr = [];
    for (let i = 10; i >= 1; i--) {
        arr.push(i); // Заполнение массива числами от 10 до 1
    }
    console.log(arr);
});
document.getElementById('buttonContainer378').appendChild(button378);

const button379 = document.createElement('button');
button379.innerText = '167_13';
button379.addEventListener('click', function() {
    let arr = [1, -2, 3, -4, 5];
    let sum = 0;
    for (let elem of arr) {
        if (elem > 0) {
            sum += elem;
        }
    }
    console.log(sum);
});
document.getElementById('buttonContainer379').appendChild(button379);

const button380 = document.createElement('button');
button380.innerText = '167_14';
button380.addEventListener('click', function() {
    let arr = [10, 20, 30, 50, 235, 3000];
    for (let elem of arr) {
        if (String(elem).startsWith('1') || String(elem).startsWith('2') || String(elem).startsWith('5')) {
            console.log(elem); // Вывод чисел, начинающихся на 1, 2 или 5
        }
    }
});
document.getElementById('buttonContainer380').appendChild(button380);

const button381 = document.createElement('button');
button381.innerText = '167_15';
button381.addEventListener('click', function() {
    let arr = [1, 2, 3, 4, 5];
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]); // Вывод элементов массива в обратном порядке
    }
});
document.getElementById('buttonContainer381').appendChild(button381);

const button382 = document.createElement('button');
button382.innerText = '167_16';
button382.addEventListener('click', function() {
    let arr = [0, 1, 2, 3, 4, 5];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === i) {
            console.log(arr[i]); // Вывод элементов, совпадающих с их индексом
        }
    }
});
document.getElementById('buttonContainer382').appendChild(button382);

const button383 = document.createElement('button');
button383.innerText = '167_17';
button383.addEventListener('click', function() {
    let arr = [10, 20, 30, 40, 50];
    for (let elem of arr) {
        document.write(elem + '<br>'); // Вывод элементов с новой строки
    }
});
document.getElementById('buttonContainer383').appendChild(button383);

const button384 = document.createElement('button');
button384.innerText = '167_18';
button384.addEventListener('click', function() {
    let arr = [10, 20, 30, 40, 50];
    for (let elem of arr) {
        document.write('<p>' + elem + '</p>');
    }
});
document.getElementById('buttonContainer384').appendChild(button384);

const button385 = document.createElement('button');
button385.innerText = '167_19';
button385.addEventListener('click', function() {
    let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    for (let i = 0; i < days.length; i++) {
        if (i === 5 || i === 6) {
            document.write('<strong>' + days[i] + '</strong><br>'); // Вывод выходных жирным
        } else {
            document.write(days[i] + '<br>');
        }
    }
});
document.getElementById('buttonContainer385').appendChild(button385);

const button386 = document.createElement('button');
button386.innerText = '167_20';
button386.addEventListener('click', function() {
    let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    let day = 3;
    for (let i = 0; i < days.length; i++) {
        if (i === day) {
            document.write('<em>' + days[i] + '</em><br>'); // Текущий день курсивом
        } else {
            document.write(days[i] + '<br>');
        }
    }
});
document.getElementById('buttonContainer386').appendChild(button386);

const button387 = document.createElement('button');
button387.innerText = '167_21';
button387.addEventListener('click', function() {
    let obj = {
        employee1: 100,
        employee2: 200,
        employee3: 300,
        employee4: 400,
        employee5: 500,
        employee6: 600,
        employee7: 700,
    };
    for (let key in obj) {
        obj[key] *= 1.1; // Увеличение зарплаты на 10%
    }
    console.log(obj);
});
document.getElementById('buttonContainer387').appendChild(button387);

const button388 = document.createElement('button');
button388.innerText = '167_22';
button388.addEventListener('click', function() {
    let obj = {
        employee1: 100,
        employee2: 200,
        employee3: 300,
        employee4: 400,
        employee5: 500,
        employee6: 600,
        employee7: 700,
    };
    for (let key in obj) {
        if (obj[key] <= 400) {
            obj[key] *= 1.1; // Увеличение зарплаты на 10% только для работников с зарплатой <= 400
        }
    }
    console.log(obj);
});
document.getElementById('buttonContainer388').appendChild(button388);

const button389 = document.createElement('button');
button389.innerText = '167_23';
button389.addEventListener('click', function() {
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [6, 7, 8, 9, 10];
    let newObj = {};
    for (let i = 0; i < arr1.length; i++) {
        newObj[arr1[i]] = arr2[i];
    }
    console.log(newObj);
});
document.getElementById('buttonContainer389').appendChild(button389);

const button390 = document.createElement('button');
button390.innerText = '167_24';
button390.addEventListener('click', function() {
    let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
    let sumKeys = 0;
    let sumValues = 0;
    for (let key in obj) {
        sumKeys += Number(key);
        sumValues += obj[key];
    }
    let result = sumKeys / sumValues;
    console.log(result);
});
document.getElementById('buttonContainer390').appendChild(button390);

const button391 = document.createElement('button');
button391.innerText = '167_25';
button391.addEventListener('click', function() {
    let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    console.log(keys);
    console.log(values);
});
document.getElementById('buttonContainer391').appendChild(button391);

const button392 = document.createElement('button');
button392.innerText = '167_26';
button392.addEventListener('click', function() {
    let obj = {
        1: 125,
        2: 225,
        3: 128,
        4: 356,
        5: 145,
        6: 281,
        7: 452,
    };
    let result = [];
    for (let key in obj) {
        if (String(obj[key]).startsWith('1') || String(obj[key]).startsWith('2')) {
            result.push(obj[key]);
        }
    }
    console.log(result);
});
document.getElementById('buttonContainer392').appendChild(button392);

const button393 = document.createElement('button');
button393.innerText = '167_27';
button393.addEventListener('click', function() {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[i + 1] = arr[i];
    }
    console.log(obj);
});
document.getElementById('buttonContainer393').appendChild(button393);

const button394 = document.createElement('button');
button394.innerText = '167_28';
button394.addEventListener('click', function() {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = i + 1;
    }
    console.log(obj);
});
document.getElementById('buttonContainer394').appendChild(button394);

const button395 = document.createElement('button');
button395.innerText = '168_1';
button395.addEventListener('click', function() {
    let arr = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
    ];
    console.log(arr[3][2]); // 'l'
    console.log(arr[1][1]); // 'e'
    console.log(arr[2][0]); // 'g'
    console.log(arr[0][0]); // 'a'
});
document.getElementById('buttonContainer395').appendChild(button395);

const button396 = document.createElement('button');
button396.innerText = '168_2';
button396.addEventListener('click', function() {
    let arr = [[1, 2], [3, 4], [5, 6]];
    let sum = 0;
    for (let subArr of arr) {
        for (let elem of subArr) {
            sum += elem;
        }
    }
    console.log(sum);
});
document.getElementById('buttonContainer396').appendChild(button396);

const button397 = document.createElement('button');
button397.innerText = '169_1';
button397.addEventListener('click', function() {
    let arr = [
        [
            [1, 2],
            [3, 4],
        ],
        [
            [5, 6],
            [7, 8],
        ],
    ];
    let sum = 0;
    for (let subArr of arr) {
        for (let innerArr of subArr) {
            for (let elem of innerArr) {
                sum += elem;
            }
        }
    }
    console.log(sum);
});
document.getElementById('buttonContainer397').appendChild(button397);

const button398 = document.createElement('button');
button398.innerText = '170_1';
button398.addEventListener('click', function() {
    let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
    let sum = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10; // Суммирование всех элементов вручную
    console.log(sum);
});
document.getElementById('buttonContainer398').appendChild(button398);

const button399 = document.createElement('button');
button399.innerText = '171_1';
button399.addEventListener('click', function() {
    let arr = [[1, 2, 3], [4, 5], [6]];
    let sum = 0;

    for (let subArr of arr) {
        for (let elem of subArr) {
            sum += elem; // Суммирование элементов
        }
    }

    console.log(sum);
});
document.getElementById('buttonContainer399').appendChild(button399);

const button400 = document.createElement('button');
button400.innerText = '171_2';
button400.addEventListener('click', function() {
    let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
    let sum = 0;

    for (let subArr1 of arr) {
        for (let subArr2 of subArr1) {
            for (let elem of subArr2) {
                sum += elem;
            }
        }
    }

    console.log(sum);
});
document.getElementById('buttonContainer400').appendChild(button400);

const button401 = document.createElement('button');
button401.innerText = '172_1';
button401.addEventListener('click', function() {
    let arr = [[1, 2, 3], [4, 5], [6]];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
    }

    console.log(sum);
});
document.getElementById('buttonContainer401').appendChild(button401);

const button402 = document.createElement('button');
button402.innerText = '172_2';
button402.addEventListener('click', function() {
    let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            for (let k = 0; k < arr[i][j].length; k++) {
                sum += arr[i][j][k];
            }
        }
    }

    console.log(sum);
});
document.getElementById('buttonContainer402').appendChild(button402);

const button403 = document.createElement('button');
button403.innerText = '173_1';
button403.addEventListener('click', function() {
    let arr = [];

    for (let i = 0; i < 3; i++) {
        arr[i] = []; // создаем подмассив

        for (let j = 0; j < 3; j++) {
            arr[i].push(j + 1); // заполняем подмассив числами
        }
    }

    console.log(arr); // [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
});
document.getElementById('buttonContainer403').appendChild(button403);

const button404 = document.createElement('button');
button404.innerText = '173_2';
button404.addEventListener('click', function() {
    let arr = [];

    for (let i = 0; i < 3; i++) {
        arr[i] = []; // создаем подмассив

        for (let j = 0; j < 5; j++) {
            arr[i].push(j + 1); // заполняем подмассив числами от 1 до 5
        }
    }

    console.log(arr); // [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
});
document.getElementById('buttonContainer404').appendChild(button404);

const button405 = document.createElement('button');
button405.innerText = '173_3';
button405.addEventListener('click', function() {
    let arr = [];

    for (let i = 0; i < 3; i++) {
        arr[i] = []; // создаем подмассив

        for (let j = 0; j < 4; j++) {
            arr[i].push('x'); // заполняем подмассив 'x'
        }
    }

    console.log(arr); // [['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x']]
});
document.getElementById('buttonContainer405').appendChild(button405);

const button406 = document.createElement('button');
button406.innerText = '173_4';
button406.addEventListener('click', function() {
    let arr = [];

    for (let i = 0; i < 3; i++) {
        arr[i] = []; // создаем подмассив

        for (let j = 0; j < 2; j++) {
            arr[i][j] = []; // создаем подмассив в подмассиве

            for (let k = 0; k < 5; k++) {
                arr[i][j].push(k + 1); // заполняем подмассив числами от 1 до 5
            }
        }
    }

    console.log(arr); // [ [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]], [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]], [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]] ]
});
document.getElementById('buttonContainer406').appendChild(button406);

const button408 = document.createElement('button');
button408.innerText = '174_1';
button408.addEventListener('click', function() {
    let arr = [];

    for (let i = 0; i < 3; i++) {
        arr[i] = [];

        for (let j = 0; j < 3; j++) {
            arr[i].push(j + 1);
        }
    }

    console.log(arr);
});
document.getElementById('buttonContainer408').appendChild(button408);

const button409 = document.createElement('button');
button409.innerText = '174_2';
button409.addEventListener('click', function() {
    let arr = [];

    for (let i = 0; i < 3; i++) {
        arr[i] = [];

        for (let j = 1; j <= 5; j++) {
            arr[i].push(j);
        }
    }

    console.log(arr);
});
document.getElementById('buttonContainer409').appendChild(button409);

const button410 = document.createElement('button');
button410.innerText = '174_3';
button410.addEventListener('click', function() {
    let arr = [];

    for (let i = 0; i < 3; i++) {
        arr[i] = [];

        for (let j = 1; j <= 5; j++) {
            arr[i].push(j);
        }
    }

    console.log(arr);
});
document.getElementById('buttonContainer410').appendChild(button410);

const button411 = document.createElement('button');
button411.innerText = '174_4';
button411.addEventListener('click', function() {
    let arr = [];

    for (let i = 0; i < 3; i++) {
        arr[i] = [];

        for (let j = 1; j <= 5; j++) {
            arr[i].push(j);
        }
    }

    console.log(arr);
});
document.getElementById('buttonContainer411').appendChild(button411);

const button412 = document.createElement('button');
button412.innerText = '174_5';
button412.addEventListener('click', function() {
    let arr = [];

    for (let i = 0; i < 3; i++) {
        arr[i] = [];

        for (let j = 1; j <= 5; j++) {
            arr[i].push(j);
        }
    }

    console.log(arr);
});
document.getElementById('buttonContainer412').appendChild(button412);


const button413 = document.createElement('button');
button413.innerText = '174_6';
button413.addEventListener('click', function() {
    let arr = [];

    for (let i = 0; i < 3; i++) {
        arr[i] = [];

        for (let j = 1; j <= 5; j++) {
            arr.push(j);
        }
    }

    console.log(arr);
});
document.getElementById('buttonContainer413').appendChild(button413);

const button414 = document.createElement('button');
button414.innerText = '175_1';
button414.addEventListener('click', function() {
    let arr = [];
    let k = 1;

    for (let i = 0; i < 3; i++) {
        arr[i] = [];

        for (let j = 0; j < 3; j++) {
            arr[i].push(k++);
        }
    }

    console.log(arr);
});
document.getElementById('buttonContainer414').appendChild(button414);

const button415 = document.createElement('button');
button415.innerText = '175_2';
button415.addEventListener('click', function() {
    let arr = [];
    let k = 1;

    for (let i = 0; i < 4; i++) {
        arr[i] = [];

        for (let j = 0; j < 2; j++) {
            arr[i].push(k);
            k++;
        }
    }

    console.log(arr);
});
document.getElementById('buttonContainer415').appendChild(button415);

const button416 = document.createElement('button');
button416.innerText = '175_3';
button416.addEventListener('click', function() {
    let arr = [];
    let k = 2;

    for (let i = 0; i < 4; i++) {
        arr[i] = [];

        for (let j = 0; j < 3; j++) {
            arr[i].push(k);
            k += 2;
        }
    }

    console.log(arr);
});
document.getElementById('buttonContainer416').appendChild(button416);

const button417 = document.createElement('button');
button417.innerText = '175_4';
button417.addEventListener('click', function() {
    let arr = [];

    for (let i = 0; i < 2; i++) {
        arr[i] = [];

        for (let j = 0; j < 2; j++) {
            arr[i][j] = [];
        }
    }

    let k = 1;
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            for (let l = 0; l < 2; l++) {
                arr[i][j].push(k++);
            }
        }
    }

    console.log(arr);
});
document.getElementById('buttonContainer417').appendChild(button417);

const button418 = document.createElement('button');
button418.innerText = '175_5';
button418.addEventListener('click', function() {
    let arr = [];
    let k = 1;

    for (let i = 0; i < 3; i++) {
        arr[i] = [];

        for (let j = 0; j < 3; j++) {
            arr[i][j] = k++;
        }
    }

    console.log(arr);
});
document.getElementById('buttonContainer418').appendChild(button418);

const button419 = document.createElement('button');
button419.innerText = '175_6';
button419.addEventListener('click', function() {
    let arr = [];
    let k = 1;

    for (let i = 0; i < 3; i++) {
        arr[i] = [];

        for (let j = 0; j < 3; j++) {
            arr[i][j] = k;
            k++;
        }
    }

    console.log(arr);
});
document.getElementById('buttonContainer419').appendChild(button419);

const button420 = document.createElement('button');
button420.innerText = '175_7';
button420.addEventListener('click', function() {
    let arr = [];
    let k = 1;

    for (let i = 0; i < 3; i++) {
        arr[i] = [];

        for (let j = 0; j < 3; j++) {
            arr[i][j] = k++;
        }
    }

    console.log(arr);
});
document.getElementById('buttonContainer420').appendChild(button420);

const button421 = document.createElement('button');
button421.innerText = '175_8';
button421.addEventListener('click', function() {
    let arr = [];
    let k = 1;

    for (let i = 0; i < 3; i++) {
        arr[i] = [];

        for (let j = 0; j < 3; j++) {
            arr[i][j] = k++;
        }
    }

    console.log(arr);
});
document.getElementById('buttonContainer421').appendChild(button421);

const button422 = document.createElement('button');
button422.innerText = '175_9';
button422.addEventListener('click', function() {
    let arr = [];
    let k = 1;

    for (let i = 0; i < 3; i++) {
        arr[i] = [];

        for (let j = 0; j < 3; j++) {
            arr[i][j] = k++;
        }
    }

    console.log(arr);
});
document.getElementById('buttonContainer422').appendChild(button422);

const button423 = document.createElement('button');
button423.innerText = '175_10';
button423.addEventListener('click', function() {
    let arr = [];
    let k = 1;

    for (let i = 0; i < 3; i++) {
        arr[i] = [];

        for (let j = 0; j < 3; j++) {
            arr[i][j] = k++;
        }
    }

    console.log(arr);
});
document.getElementById('buttonContainer423').appendChild(button423);

const button424 = document.createElement('button');
button424.innerText = '175_11';
button424.addEventListener('click', function() {
    let arr = [];
    let k = 1;

    for (let i = 0; i < 3; i++) {
        arr[i] = [];

        for (let j = 0; j < 3; j++) {
            arr[i][j] = ++k;
        }
    }

    console.log(arr);
});
document.getElementById('buttonContainer424').appendChild(button424);

const button425 = document.createElement('button');
button425.innerText = '175_12';
button425.addEventListener('click', function() {
    let arr = [];
    let k = 1;

    for (let i = 0; i < 3; i++) {
        arr[k] = [];

        for (let j = 0; j < 3; j++) {
            arr[i][j] = k++;
        }
    }

    console.log(arr);
});
document.getElementById('buttonContainer425').appendChild(button425);

const button426 = document.createElement('button');
button426.innerText = '175_13';
button426.addEventListener('click', function() {
    let arr = [];
    let k = 1;

    for (let i = 0; i < 3; i++) {
        arr[i] = [];

        for (let j = 0; j < 3; j++) {
            arr[i][j] = k++;
        }
    }

    console.log(arr);
});
document.getElementById('buttonContainer426').appendChild(button426);

const button427 = document.createElement('button');
button427.innerText = '176_1';
button427.addEventListener('click', function() {
    let obj = {
        key1: {
            key1: 1,
            key2: 2,
            key3: 3,
        },
        key2: {
            key1: 4,
            key2: 5,
            key3: 6,
        },
        key3: {
            key1: 7,
            key2: 8,
            key3: 9,
        },
    };

    let sum = obj.key1.key1 + obj.key1.key2 + obj.key1.key3 +
        obj.key2.key1 + obj.key2.key2 + obj.key2.key3 +
        obj.key3.key1 + obj.key3.key2 + obj.key3.key3;

    console.log(sum);
});
document.getElementById('buttonContainer427').appendChild(button427);

const button428 = document.createElement('button');
button428.innerText = '176_2';
button428.addEventListener('click', function() {
    let obj = {
        1: {
            1: 'a1',
            2: 'a2',
            3: 'a3',
        },
        2: {
            1: 'b1',
            2: 'b2',
            3: 'b3',
        },
        3: {
            1: 'c1',
            2: 'c2',
            3: 'c3',
        },
    };

    console.log(obj[2][2]); // 'b2'
    console.log(obj[3][1]); // 'c1'
});
document.getElementById('buttonContainer428').appendChild(button428);

const button429 = document.createElement('button');
button429.innerText = '176_3';
button429.addEventListener('click', function() {
    let obj = {
        key1: {
            a: 1, b: 2, c: {
                d: 3,
                e: 4,
            }, f: 5,
        },
        key2: {
            g: 6, h: 7,
        },
    };

    let sum = obj.key1.a + obj.key1.b + obj.key1.c.d + obj.key1.c.e + obj.key1.f +
        obj.key2.g + obj.key2.h;

    console.log(sum);
});
document.getElementById('buttonContainer429').appendChild(button429);

const button431 = document.createElement('button');
button431.innerText = '177_1';
button431.addEventListener('click', function() {
    let obj = {
        1: {
            1: 11,
            2: 12,
            3: 13,
        },
        2: {
            1: 21,
            2: 22,
            3: 23,
        },
        3: {
            1: 24,
            2: 25,
            3: 26,
        },
    };

    let sum = 0;

    for (let key in obj) {
        let subObj = obj[key];

        for (let subKey in subObj) {
            sum += subObj[subKey];
        }
    }

    console.log(sum);
});
document.getElementById('buttonContainer431').appendChild(button431);

const button432 = document.createElement('button');
button432.innerText = '177_2';
button432.addEventListener('click', function() {
    let obj = {
        1: {
            1: {
                1: 111,
                2: 112,
                3: 113,
            },
            2: {
                1: 121,
                2: 122,
                3: 123,
            },
        },
        2: {
            1: {
                1: 211,
                2: 212,
                3: 213,
            },
            2: {
                1: 221,
                2: 222,
                3: 223,
            },
        },
        3: {
            1: {
                1: 311,
                2: 312,
                3: 313,
            },
            2: {
                1: 321,
                2: 322,
                3: 323,
            },
        },
    };

    let sum = 0;

    for (let key in obj) {
        let subObj = obj[key];

        for (let subKey in subObj) {
            let innerObj = subObj[subKey];

            for (let innerKey in innerObj) {
                sum += innerObj[innerKey];
            }
        }
    }

    console.log(sum);
});
document.getElementById('buttonContainer432').appendChild(button432);

const button433 = document.createElement('button');
button433.innerText = '178_1';
button433.addEventListener('click', function() {
    let students = {
        'group1': ['name11', 'name12', 'name13'],
        'group2': ['name21', 'name22', 'name23'],
        'group3': ['name31', 'name32', 'name33'],
    };
    console.log(students['group3'][0]);
});
document.getElementById('buttonContainer433').appendChild(button433);

const button434 = document.createElement('button');
button434.innerText = '179_1';
button434.addEventListener('click', function() {
    let students = {
        'group1': ['student11', 'student12', 'student13'],
        'group2': ['student21', 'student22', 'student23'],
        'group3': ['student31', 'student32'],
    };
    for (let group in students) {
        for (let name of students[group]) {
            console.log(name);
        }
    }
});
document.getElementById('buttonContainer434').appendChild(button434);

const button435 = document.createElement('button');
button435.innerText = '179_2';
button435.addEventListener('click', function() {
    let data = {
        1: [
            'data11',
            'data12',
            'data13',
        ],
        2: [
            'data21',
            'data22',
            'data23',
        ],
        3: [
            'data31',
            'data32',
            'data33',
        ],
        4: [
            'data41',
            'data42',
            'data43',
        ],
    };
    for (let key in data) {
        for (let value of data[key]) {
            console.log(value);
        }
    }
});
document.getElementById('buttonContainer435').appendChild(button435);

const button436 = document.createElement('button');
button436.innerText = '179_3';
button436.addEventListener('click', function() {
    let data = [
        {
            1: 'data11',
            2: 'data12',
            3: 'data13',
        },
        {
            1: 'data21',
            2: 'data22',
            3: 'data33',
        },
        {
            1: 'data31',
            2: 'data32',
            3: 'data33',
        },
    ];
    for (let item of data) {
        for (let key in item) {
            console.log(item[key]);
        }
    }
});
document.getElementById('buttonContainer436').appendChild(button436);

const button437 = document.createElement('button');
button437.innerText = '179_4';
button437.addEventListener('click', function() {
    let data = [
        {
            1: [
                'data111',
                'data112',
                'data113',
            ],
            2: [
                'data121',
                'data122',
                'data123',
            ],
        },
        {
            1: [
                'data211',
                'data212',
                'data213',
            ],
            2: [
                'data221',
                'data222',
                'data223',
            ],
        },
        {
            1: [
                'data411',
                'data412',
                'data413',
            ],
            2: [
                'data421',
                'data422',
                'data423',
            ],
        },
    ];
    for (let item of data) {
        for (let key in item) {
            for (let value of item[key]) {
                console.log(value);
            }
        }
    }
});
document.getElementById('buttonContainer437').appendChild(button437);

const button438 = document.createElement('button');
button438.innerText = '180_1';
button438.addEventListener('click', function() {
    let users = [
        {
            name: 'name1',
            surn: 'surn1',
        },
        {
            name: 'name2',
            surn: 'surn2',
        },
        {
            name: 'name3',
            surn: 'surn3',
        },
    ];
    for (let user of users) {
        console.log(user.name + ' ' + user.surn);
    }
});
document.getElementById('buttonContainer438').appendChild(button438);

const button439 = document.createElement('button');
button439.innerText = '180_2';
button439.addEventListener('click', function() {
    let employees = [
        {
            name: 'name1',
            salary: 300,
        },
        {
            name: 'name2',
            salary: 400,
        },
        {
            name: 'name3',
            salary: 500,
        },
    ];
    for (let employee of employees) {
        console.log(employee.name + ' - ' + employee.salary);
    }
});
document.getElementById('buttonContainer439').appendChild(button439);

const button440 = document.createElement('button');
button440.innerText = '180_3';
button440.addEventListener('click', function() {
    let employees = [
        {
            name: 'name1',
            salary: 300,
        },
        {
            name: 'name2',
            salary: 400,
        },
        {
            name: 'name3',
            salary: 500,
        },
    ];
    let totalSalary = 0;
    for (let employee of employees) {
        totalSalary += employee.salary;
    }
    console.log('Сумма зарплат: ' + totalSalary);
});
document.getElementById('buttonContainer440').appendChild(button440);

const button441 = document.createElement('button');
button441.innerText = '180_4';
button441.addEventListener('click', function() {
    let employees = [
        {
            name: 'name1',
            salary: 300,
            age: 28,
        },
        {
            name: 'name2',
            salary: 400,
            age: 29,
        },
        {
            name: 'name3',
            salary: 500,
            age: 30,
        },
        {
            name: 'name4',
            salary: 600,
            age: 31,
        },
        {
            name: 'name5',
            salary: 700,
            age: 32,
        },
    ];
    let totalSalary = 0;
    for (let employee of employees) {
        if (employee.age >= 30) {
            totalSalary += employee.salary;
        }
    }
    console.log('Сумма зарплат работников старше 30 лет: ' + totalSalary);
});
document.getElementById('buttonContainer441').appendChild(button441);

const button442 = document.createElement('button');
button442.innerText = '181_1';
button442.addEventListener('click', function() {
    let obj = {
        'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
        'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
    };
    let lang = 'ru';
    let day = 3;
    console.log(obj[lang][day]);
});
document.getElementById('buttonContainer442').appendChild(button442);

const button443 = document.createElement('button');
button443.innerText = '181_2';
button443.addEventListener('click', function() {
    let months = {
        'ru': [
            'январь',
            'февраль',
            'март',
            'апрель',
            'май',
            'июнь',
            'июль',
            'август',
            'сентябрь',
            'октябрь',
            'ноябрь',
            'декабрь',
        ],
        'en': [
            'january',
            'february',
            'march',
            'april',
            'may',
            'june',
            'july',
            'august',
            'september',
            'october',
            'november',
            'december',
        ],
    };
    let lang = 'ru'; // может быть или 'ru' или 'en'
    let month = 5;   // число от 0 до 11
    console.log(months[lang][month]);
});
document.getElementById('buttonContainer443').appendChild(button443);

const button444 = document.createElement('button');
button444.innerText = '181_3';
button444.addEventListener('click', function() {
    let affairs = {
        '2018': {
            11: {
                29: ['дело111', 'дело112', 'дело113'],
                30: ['дело121', 'дело122', 'дело123'],
            },
            12: {
                30: ['дело211', 'дело212', 'дело213'],
                31: ['дело221', 'дело222', 'дело223'],
            },
        },
        '2019': {
            12: {
                29: ['дело311', 'дело312', 'дело313'],
                30: ['дело321', 'дело322', 'дело323'],
                31: ['дело331', 'дело332', 'дело333'],
            }
        },
    };
    let year = '2019';
    let month = 12;
    let day = 30;
    console.log(affairs[year][month][day]);
});
document.getElementById('buttonContainer444').appendChild(button444);

const button445 = document.createElement('button');
button445.innerText = '181_4';
button445.addEventListener('click', function() {
    let obj = {
        key1: {
            key2: '12',
            key3: '13',
        },
        key2: {
            key4: '24',
            key5: '25',
        },
    };
    let key1 = 'key2';
    let key2 = 'key4';
    console.log(obj[key1][key2]); // Исправлено на правильные ключи
});
document.getElementById('buttonContainer445').appendChild(button445);

const button446 = document.createElement('button');
button446.innerText = '181_5';
button446.addEventListener('click', function() {
    let obj = {
        key1: {
            key2: '12',
            key3: '13',
        },
        key2: {
            key4: '24',
            key5: '25',
        },
    };
    let key1 = 'key2';
    let key2 = 'key4';
    console.log(obj[key1][key2]); // Исправлено на правильные ключи
});
document.getElementById('buttonContainer446').appendChild(button446);

const button447 = document.createElement('button');
button447.innerText = '181_6';
button447.addEventListener('click', function() {
    let obj = {
        key1: {
            key2: '12',
            key3: '13',
        },
        key2: {
            key4: '24',
            key5: '25',
        },
    };
    let key1 = 'key2';
    console.log(obj[key1]['key4']); // Исправлено на правильные ключи
});
document.getElementById('buttonContainer447').appendChild(button447);

const button448 = document.createElement('button');
button448.innerText = '182_1';
button448.addEventListener('click', function() {
    let employees = [
        {
            name: 'name1',
            salary: 300,
            age: 28,
        },
        {
            name: 'name2',
            salary: 400,
            age: 29,
        },
        {
            name: 'name3',
            salary: 500,
            age: 30,
        },
    ];
    employees.push({
        name: 'name4',
        salary: 600,
        age: 31,
    });
    console.log(employees); // Выводим обновленный массив
});
document.getElementById('buttonContainer448').appendChild(button448);

const button449 = document.createElement('button');
button449.innerText = '183_1';
button449.addEventListener('click', function() {
    let students = {
        'group1': ['student11', 'student12', 'student13'],
        'group2': ['student21', 'student22', 'student23'],
        'group3': ['student31', 'student32'],
    };
    students.group1.push('student14');
    students.group4 = [];
    students.group4.push('student41');
    console.log(students);
});
document.getElementById('buttonContainer449').appendChild(button449);

const button450 = document.createElement('button');
button450.innerText = '183_2';
button450.addEventListener('click', function() {
    let affairs = {
        '2019-12-28': ['data11', 'data12', 'data13'],
        '2019-12-29': ['data21', 'data22', 'data23'],
        '2019-12-30': ['data31', 'data32', 'data33'],
    };
    console.log(affairs);
});
document.getElementById('buttonContainer450').appendChild(button450);

const button451 = document.createElement('button');
button451.innerText = '183_3';
button451.addEventListener('click', function() {
    let affairs = {
        '2019-12-28': ['data11', 'data12', 'data13'],
        '2019-12-29': ['data21', 'data22', 'data23'],
        '2019-12-30': ['data31', 'data32', 'data33'],
    };
    affairs['2019-12-29'].push('data24');
    console.log(affairs);
});
document.getElementById('buttonContainer451').appendChild(button451);

const button452 = document.createElement('button');
button452.innerText = '183_4';
button452.addEventListener('click', function() {
    let affairs = {
        '2019-12-28': ['data11', 'data12', 'data13'],
        '2019-12-29': ['data21', 'data22', 'data23'],
        '2019-12-30': ['data31', 'data32', 'data33'],
    };
    affairs['2019-12-31'] = ['data41', 'data42'];
    console.log(affairs);
});
document.getElementById('buttonContainer452').appendChild(button452);

const button453 = document.createElement('button');
button453.innerText = '183_5';
button453.addEventListener('click', function() {
    let students = {
        'group1': {
            'subgroup11': ['student111', 'student112', 'student113'],
            'subgroup12': ['student121', 'student122', 'student123'],
        },
        'group2': {
            'subgroup21': ['student211', 'student212', 'student213'],
            'subgroup22': ['student221', 'student222', 'student223'],
        },
        'group3': {
            'subgroup31': ['student311', 'student312', 'student313'],
            'subgroup32': ['student321', 'student322', 'student323'],
        },
    };
    students.group1.subgroup11.push('student114');
    console.log(students);
});
document.getElementById('buttonContainer453').appendChild(button453);

const button454 = document.createElement('button');
button454.innerText = '183_6';
button454.addEventListener('click', function() {
    let students = {
        'group1': {
            'subgroup11': ['student111', 'student112', 'student113'],
            'subgroup12': ['student121', 'student122', 'student123'],
        },
        'group2': {
            'subgroup21': ['student211', 'student212', 'student213'],
            'subgroup22': ['student221', 'student222', 'student223'],
        },
        'group3': {
            'subgroup31': ['student311', 'student312', 'student313'],
            'subgroup32': ['student321', 'student322', 'student323'],
        },
    };
    students.group1.subgroup13 = [];
    console.log(students);
});
document.getElementById('buttonContainer454').appendChild(button454);

const button455 = document.createElement('button');
button455.innerText = '183_7';
button455.addEventListener('click', function() {
    let students = {
        'group1': {
            'subgroup11': ['student111', 'student112', 'student113'],
            'subgroup12': ['student121', 'student122', 'student123'],
        },
        'group2': {
            'subgroup21': ['student211', 'student212', 'student213'],
            'subgroup22': ['student221', 'student222', 'student223'],
        },
        'group3': {
            'subgroup31': ['student311', 'student312', 'student313'],
            'subgroup32': ['student321', 'student322', 'student323'],
        },
    };
    students.group4 = {};
    students.group4.subgroup41 = ['student411', 'student412'];
    console.log(students);
});
document.getElementById('buttonContainer455').appendChild(button455);

const button456 = document.createElement('button');
button456.innerText = '184_1';
button456.addEventListener('click', function() {
    const result = Math.pow(2, 10);
    console.log(result); // 1024
});
document.getElementById('buttonContainer456').appendChild(button456);

const button457 = document.createElement('button');
button457.innerText = '184_2';
button457.addEventListener('click', function() {
    const result = Math.sqrt(245);
    console.log(result); // 15.652475
});
document.getElementById('buttonContainer457').appendChild(button457);

const button458 = document.createElement('button');
button458.innerText = '184_3';
button458.addEventListener('click', function() {
    const array = [4, 2, 5, 19, 13, 0, 10];
    let sumOfCubes = 0;
    for (let i = 0; i < array.length; i++) {
        sumOfCubes += Math.pow(array[i], 3);
    }
    const result = Math.sqrt(sumOfCubes);
    console.log(result); // 21.954
});
document.getElementById('buttonContainer458').appendChild(button458);

const button459 = document.createElement('button');
button459.innerText = '185_1';
button459.addEventListener('click', function() {
    const sqrtResult = Math.sqrt(379);
    console.log(Math.round(sqrtResult));  // округление до целых
    console.log(sqrtResult.toFixed(1));   // округление до десятых
    console.log(sqrtResult.toFixed(2));   // округление до сотых
});
document.getElementById('buttonContainer459').appendChild(button459);

const button460 = document.createElement('button');
button460.innerText = '185_2';
button460.addEventListener('click', function() {
    const sqrtResult = Math.sqrt(587);
    const roundedResults = {
        floor: Math.floor(sqrtResult), // округление в меньшую сторону
        ceil: Math.ceil(sqrtResult)    // округление в большую сторону
    };
    console.log(roundedResults);
});
document.getElementById('buttonContainer460').appendChild(button460);

const button461 = document.createElement('button');
button461.innerText = '186_1';
button461.addEventListener('click', function() {
    const numbers = [4, -2, 5, 19, -130, 0, 10];
    const minNumber = Math.min(...numbers);
    const maxNumber = Math.max(...numbers);
    console.log('Минимальное число:', minNumber); // -130
    console.log('Максимальное число:', maxNumber); // 19
});
document.getElementById('buttonContainer461').appendChild(button461);

const button462 = document.createElement('button');
button462.innerText = '187_1';
button462.addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber); // случайное число от 1 до 100
});
document.getElementById('buttonContainer462').appendChild(button462);

const button463 = document.createElement('button');
button463.innerText = '187_2';
button463.addEventListener('click', function() {
    const randomArray = [];
    for (let i = 0; i < 10; i++) {
        randomArray.push(Math.floor(Math.random() * 100) + 1);
    }
    console.log(randomArray); // массив из 10 случайных чисел
});
document.getElementById('buttonContainer463').appendChild(button463);

const button464 = document.createElement('button');
button464.innerText = '188_1';
button464.addEventListener('click', function() {
    const a = 5;
    const b = -3;
    const difference = Math.abs(a - b);
    console.log('Модуль разности:', difference); // результат: 8
});
document.getElementById('buttonContainer464').appendChild(button464);

const button465 = document.createElement('button');
button465.innerText = '189_1';
button465.addEventListener('click', function() {
    const str = 'js';
    const upperStr = str.toUpperCase();
    console.log(upperStr); // 'JS'
});
document.getElementById('buttonContainer465').appendChild(button465);

const button466 = document.createElement('button');
button466.innerText = '189_2';
button466.addEventListener('click', function() {
    const str = 'JS';
    const lowerStr = str.toLowerCase();
    console.log(lowerStr); // 'js'
});
document.getElementById('buttonContainer466').appendChild(button466);

const button467 = document.createElement('button');
button467.innerText = '190_1';
button467.addEventListener('click', function() {
    const str = 'я учу javascript!';

    // Вырезаем 'учу' тремя способами
    const substrUchu = str.substr(2, 3);  // substr(start, length)
    const substringUchu = str.substring(2, 5); // substring(start, end)
    const sliceUchu = str.slice(2, 5);    // slice(start, end)

    // Вырезаем 'javascript' тремя способами
    const substrJs = str.substr(6, 10);  // substr(start, length)
    const substringJs = str.substring(6, 16); // substring(start, end)
    const sliceJs = str.slice(6, 16);    // slice(start, end)

    console.log('С помощью substr:', substrUchu, substrJs);    // 'учу', 'javascript'
    console.log('С помощью substring:', substringUchu, substringJs); // 'учу', 'javascript'
    console.log('С помощью slice:', sliceUchu, sliceJs);      // 'учу', 'javascript'
});
document.getElementById('buttonContainer467').appendChild(button467);

const button468 = document.createElement('button');
button468.innerText = '191_1';
button468.addEventListener('click', function() {
    const str = 'http://example.com';
    const startsWithHttp = str.startsWith('http://');
    console.log('Строка начинается с "http://":', startsWithHttp); // true
});
document.getElementById('buttonContainer468').appendChild(button468);

const button469 = document.createElement('button');
button469.innerText = '191_2';
button469.addEventListener('click', function() {
    const str = 'index.html';
    const endsWithHtml = str.endsWith('.html');
    console.log('Строка заканчивается на ".html":', endsWithHtml); // true
});
document.getElementById('buttonContainer469').appendChild(button469);

const button470 = document.createElement('button');
button470.innerText = '192_1';
button470.addEventListener('click', function() {
    const str = '1-2-3-4-5';
    const replacedStr = str.replace(/-/g, '.'); // Замена всех дефисов на точки
    console.log(replacedStr); // '1.2.3.4.5'
});
document.getElementById('buttonContainer470').appendChild(button470);

const button471 = document.createElement('button');
button471.innerText = '193_1';
button471.addEventListener('click', function() {
    const str = '1-2-3-4-5';
    const arr = str.split('-'); // Разделение строки на массив
    console.log(arr); // ['1', '2', '3', '4', '5']
});
document.getElementById('buttonContainer471').appendChild(button471);

const button472 = document.createElement('button');
button472.innerText = '193_2';
button472.addEventListener('click', function() {
    const str = '12345';
    const arr = str.split(''); // Разделение строки на массив символов
    console.log(arr); // ['1', '2', '3', '4', '5']
});
document.getElementById('buttonContainer472').appendChild(button472);

const button473 = document.createElement('button');
button473.innerText = '193_3';
button473.addEventListener('click', function() {
    let arr = [1, 2, 3, 4, 5];
    const str = arr.join('-'); // Слияние массива в строку
    console.log(str); // '1-2-3-4-5'
});
document.getElementById('buttonContainer473').appendChild(button473);

const button474 = document.createElement('button');
button474.innerText = '194_1';
button474.addEventListener('click', function() {
    const arr = [1, 2, 3];
    const firstElement = arr[0]; // Получаем первый элемент
    console.log('Первый элемент:', firstElement); // 1
});
document.getElementById('buttonContainer474').appendChild(button474);

const button475 = document.createElement('button');
button475.innerText = '194_2';
button475.addEventListener('click', function() {
    const arr = [1, 2, 3];
    const lastElement = arr[arr.length - 1]; // Получаем последний элемент
    console.log('Последний элемент:', lastElement); // 3
});
document.getElementById('buttonContainer475').appendChild(button475);

const button476 = document.createElement('button');
button476.innerText = '194_3';
button476.addEventListener('click', function() {
    const arr = [1, 2, 3];
    arr.push(4, 5, 6); // Добавляем элементы в конец массива
    console.log('Массив после добавления:', arr); // [1, 2, 3, 4, 5, 6]
});
document.getElementById('buttonContainer476').appendChild(button476);

const button477 = document.createElement('button');
button477.innerText = '194_4';
button477.addEventListener('click', function() {
    const arr = [1, 2, 3];
    arr.unshift(4, 5, 6); // Добавляем элементы в начало массива
    console.log('Массив после добавления:', arr); // [4, 5, 6, 1, 2, 3]
});
document.getElementById('buttonContainer477').appendChild(button477);

const button478 = document.createElement('button');
button478.innerText = '195_1';
button478.addEventListener('click', function() {
    const arr = [1, 2, 3, 4, 5];
    const newArr = arr.slice(0, 3); // Получаем элементы с 0 по 2 (не включая 3)
    console.log('Новый массив:', newArr); // [1, 2, 3]
});
document.getElementById('buttonContainer478').appendChild(button478);

const button479 = document.createElement('button');
button479.innerText = '195_2';
button479.addEventListener('click', function() {
    const arr = [1, 2, 3, 4, 5];
    const newArr = arr.slice(3); // Получаем элементы с 3 до конца массива
    console.log('Новый массив:', newArr); // [4, 5]
});
document.getElementById('buttonContainer479').appendChild(button479);

const button480 = document.createElement('button');
button480.innerText = '196_1';
button480.addEventListener('click', function() {
    const arr = [1, 2, 3, 4, 5];
    arr.splice(1, 2); // Удаляем 2 элемента, начиная с индекса 1
    console.log('Новый массив:', arr); // [1, 4, 5]
});
document.getElementById('buttonContainer480').appendChild(button480);

const button481 = document.createElement('button');
button481.innerText = '196_2';
button481.addEventListener('click', function() {
    const arr = [1, 2, 3, 4, 5];
    arr.splice(2, 0, 'a', 'b', 'c'); // Вставляем 'a', 'b', 'c' на позицию 2
    console.log('Новый массив:', arr); // [1, 2, 3, 'a', 'b', 'c', 4, 5]
});
document.getElementById('buttonContainer481').appendChild(button481);

const button482 = document.createElement('button');
button482.innerText = '196_3';
button482.addEventListener('click', function() {
    const arr = [1, 2, 3, 4, 5];
    arr.splice(1, 0, 'a', 'b'); // Вставляем 'a', 'b' на позицию 1
    arr.splice(6, 0, 'c'); // Вставляем 'c' на позицию 6
    arr.splice(8, 0, 'e'); // Вставляем 'e' на позицию 8
    console.log('Новый массив:', arr); // [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
});
document.getElementById('buttonContainer482').appendChild(button482);

const button483 = document.createElement('button');
button483.innerText = '197_1';
button483.addEventListener('click', function() {
    const arr = [1, 2, 3, 4, 5];
    const hasThree = arr.includes(3); // Проверяем, есть ли число 3 в массиве
    console.log('Есть ли число 3 в массиве:', hasThree); // true
});
document.getElementById('buttonContainer483').appendChild(button483);

const button484 = document.createElement('button');
button484.innerText = '198_1';
button484.addEventListener('click', function() {
    let obj = {a: 1, b: 2, c: 3};
    const keysArray = Object.keys(obj); // Получаем массив ключей объекта
    console.log('Массив ключей:', keysArray); // ['a', 'b', 'c']
});
document.getElementById('buttonContainer484').appendChild(button484);

const button485 = document.createElement('button');
button485.innerText = '199_1';
button485.addEventListener('click', function() {
    let num = 12345;
    let arr = String(num).split('');

    let sum = 0;
    for (let digit of arr) {
        sum += Number(digit);
    }

    console.log(sum);
});
document.getElementById('buttonContainer485').appendChild(button485);

const button486 = document.createElement('button');
button486.innerText = '199_2';
button486.addEventListener('click', function() {
    let num = 12345;
    let arr = String(num).split('');

    let sum = 0;
    for (let digit of arr) {
        sum += Number(digit);
    }

    console.log(sum);
});
document.getElementById('buttonContainer486').appendChild(button486);

const button487 = document.createElement('button');
button487.innerText = '199_3';
button487.addEventListener('click', function() {
    let num = 12345;
    let arr = String(num).split('');

    let sum = 0;
    for (let digit of arr) {
        sum += Number(digit);
    }

    console.log(sum);
});
document.getElementById('buttonContainer487').appendChild(button487);

const button488 = document.createElement('button');
button488.innerText = '199_4';
button488.addEventListener('click', function() {
    let num = 12345;
    let arr = String(num).split('');

    let sum = 0;
    for (let digit of arr) {
        sum += Number(digit);
    }

    console.log(sum);
});
document.getElementById('buttonContainer488').appendChild(button488);

const button489 = document.createElement('button');
button489.innerText = '199_5';
button489.addEventListener('click', function() {
    let num = 12345;
    let arr = String(num).split('');

    let prod = 1;
    for (let digit of arr) {
        prod *= Number(digit);
    }

    console.log(prod);
});
document.getElementById('buttonContainer489').appendChild(button489);

const button490 = document.createElement('button');
button490.innerText = '200_1';
button490.addEventListener('click', function() {
    function printName() {
        console.log('Ruslan');
    }
    printName();
});
document.getElementById('buttonContainer490').appendChild(button490);

const button491 = document.createElement('button');
button491.innerText = '200_2';
button491.addEventListener('click', function() {
    function sumFromOneToHundred() {
        let sum = 0;
        for (let i = 1; i <= 100; i++) {
            sum += i;
        }
        console.log(sum);
    }
    sumFromOneToHundred();
});
document.getElementById('buttonContainer491').appendChild(button491);

const button492 = document.createElement('button');
button492.innerText = '201_1';
button492.addEventListener('click', function() {
    function printCube(num) {
        console.log(num ** 3);
    }
    printCube(3);
});
document.getElementById('buttonContainer492').appendChild(button492);

const button493 = document.createElement('button');
button493.innerText = '201_2';
button493.addEventListener('click', function() {
    function checkNumber(num) {
        if (num > 0) {
            console.log('+++');
        } else {
            console.log('---');
        }
    }
    checkNumber(-5);
});
document.getElementById('buttonContainer493').appendChild(button493);

const button494 = document.createElement('button');
button494.innerText = '202_1';
button494.addEventListener('click', function() {
    function sumThreeNumbers(a, b, c) {
        console.log(a + b + c);
    }
    sumThreeNumbers(5, 10, 15);
});
document.getElementById('buttonContainer494').appendChild(button494);

const button495 = document.createElement('button');
button495.innerText = '203_1';
button495.addEventListener('click', function() {
    function func(a, b, c) {
        console.log(a + b + c);
    }

    let param1 = 1;
    let param2 = 2;
    let param3 = 3;

    func(param1, param2, param3);
});
document.getElementById('buttonContainer495').appendChild(button495);

const button496 = document.createElement('button');
button496.innerText = '204_1';
button496.addEventListener('click', function() {
    function func(num = 5) {
        console.log(num * num);
    }

    func(2); // Результат: 4 (2 * 2)
    func(3); // Результат: 9 (3 * 3)
    func();  // Результат: 25 (5 * 5)
});
document.getElementById('buttonContainer496').appendChild(button496);

const button497 = document.createElement('button');
button497.innerText = '204_2';
button497.addEventListener('click', function() {
    function func(num1 = 0, num2 = 0) {
        console.log(num1 + num2);
    }

    func(2, 3); // Результат: 5 (2 + 3)
    func(3);    // Результат: 3 (3 + 0)
    func();     // Результат: 0 (0 + 0)
});
document.getElementById('buttonContainer497').appendChild(button497);

const button498 = document.createElement('button');
button498.innerText = '205_1';
button498.addEventListener('click', function() {
    function cube(num) {
        return num ** 3;
    }

    let res = cube(3);
    console.log(res);
});
document.getElementById('buttonContainer498').appendChild(button498);

const button499 = document.createElement('button');
button499.innerText = '205_2';
button499.addEventListener('click', function() {
    function squareRoot(num) {
        return Math.sqrt(num);
    }

    let root3 = squareRoot(3);
    let root4 = squareRoot(4);
    let sum = root3 + root4;
    console.log(sum);
});
document.getElementById('buttonContainer499').appendChild(button499);

const button500 = document.createElement('button');
button500.innerText = '206_1';
button500.addEventListener('click', function() {
    function sqrt(num) {
        return Math.sqrt(num);
    }

    function round(num) {
        return num.toFixed(3);
    }

    let result = round(sqrt(2)); // Находим корень из 2 и округляем
    console.log(result);
});
document.getElementById('buttonContainer500').appendChild(button500);

const button501 = document.createElement('button');
button501.innerText = '206_2';
button501.addEventListener('click', function() {
    function sqrt(num) {
        return Math.sqrt(num);
    }

    function sum(num1, num2, num3) {
        return num1 + num2 + num3;
    }

    let res = sum(sqrt(2), sqrt(3), sqrt(4)); // Находим сумму корней из 2, 3 и 4
    console.log(res);
});
document.getElementById('buttonContainer501').appendChild(button501);

const button502 = document.createElement('button');
button502.innerText = '206_3';
button502.addEventListener('click', function() {
    function sqrt(num) {
        return Math.sqrt(num);
    }

    function round(num) {
        return num.toFixed(3);
    }

    function sum(num1, num2, num3) {
        return num1 + num2 + num3;
    }

    let res = round(sum(sqrt(2), sqrt(3), sqrt(4))); // Находим сумму корней и округляем
    console.log(res);
});
document.getElementById('buttonContainer502').appendChild(button502);

const button503 = document.createElement('button');
button503.innerText = '207_1';
button503.addEventListener('click', function() {
    function func(num) {
        return num; // Возвращаем num
        let res = num ** 2; // Эта строка не будет выполнена
        return res; // Эта строка также не будет выполнена
    }

    console.log(func(3)); // Вывод: 3
    // Объяснение: функция завершает выполнение на первой строке return, поэтому не выполняются следующие строки.
});
document.getElementById('buttonContainer503').appendChild(button503);

const button504 = document.createElement('button');
button504.innerText = '207_2';
button504.addEventListener('click', function() {
    function func(num) {
        if (num <= 0) {
            return Math.abs(num); // Возвращаем абсолютное значение
        } else {
            return num ** 2; // Возвращаем квадрат
        }
    }

    console.log(func(10));  // Вывод: 100
    console.log(func(-5));  // Вывод: 5
    // Объяснение: для 10 выполняется else, возвращается 100; для -5 выполняется if, возвращается 5.
});
document.getElementById('buttonContainer504').appendChild(button504);

const button505 = document.createElement('button');
button505.innerText = '207_3';
button505.addEventListener('click', function() {
    function func(num) {
        if (num <= 0) {
            return Math.abs(num); // Возвращаем абсолютное значение
        }

        return num ** 2; // Возвращаем квадрат
    }

    console.log(func(10));  // Вывод: 100
    console.log(func(-5));  // Вывод: 5
    // Объяснение: аналогично предыдущему примеру, но без else. Если num <= 0, возвращается абсолютное значение, иначе возвращается квадрат.
});
document.getElementById('buttonContainer505').appendChild(button505);

const button506 = document.createElement('button');
button506.innerText = '208_1';
button506.addEventListener('click', function() {
    function func(num) {
        let sum = 0;

        for (let i = 1; i <= num; i++) {
            sum += i; // Суммируем числа от 1 до num
            return sum; // Возвращаем сумму после первой итерации
        }
    }

    console.log(func(5)); // Вывод: 1
    // Объяснение: функция возвращает сумму на первой итерации цикла, поэтому результат 1 (первое значение i).
    // Автор хотел найти сумму всех чисел от 1 до num, но вернул сумму на первой итерации.

    // Исправленный код:
    function correctedFunc(num) {
        let sum = 0;

        for (let i = 1; i <= num; i++) {
            sum += i; // Суммируем числа
        }
        return sum; // Возвращаем полную сумму
    }

    console.log(correctedFunc(5)); // Теперь вывод: 15 (1 + 2 + 3 + 4 + 5)
});
document.getElementById('buttonContainer506').appendChild(button506);

const button507 = document.createElement('button');
button507.innerText = '209_1';
button507.addEventListener('click', function() {
    function divideUntilLessThanTen(num) {
        let iterations = 0;

        while (num >= 10) {
            num /= 2;
            iterations++;
        }

        return iterations;
    }

    console.log(divideUntilLessThanTen(80));
    // Результат: 4, поскольку 80 -> 40 -> 20 -> 10 -> 5
});
document.getElementById('buttonContainer507').appendChild(button507);

const button508 = document.createElement('button');
button508.innerText = '210_1';
button508.addEventListener('click', function() {
    function func(num1, num2) {
        return (num1 > 0 && num2 > 0) ? num1 * num2 : num1 - num2;
    }

    console.log(func(3, 4));
});
document.getElementById('buttonContainer508').appendChild(button508);

const button509 = document.createElement('button');
button509.innerText = '211_1';
button509.addEventListener('click', function() {
    function areAllEven(arr) {
        return arr.every(num => num % 2 === 0);
    }

    console.log(areAllEven([2, 4, 6, 8]));
    console.log(areAllEven([2, 3, 6, 8]));
});
document.getElementById('buttonContainer509').appendChild(button509);

const button510 = document.createElement('button');
button510.innerText = '211_2';
button510.addEventListener('click', function() {
    function areAllDigitsOdd(num) {
        return String(num).split('').every(digit => Number(digit) % 2 !== 0);
    }

    console.log(areAllDigitsOdd(13579));
    console.log(areAllDigitsOdd(13578));
});
document.getElementById('buttonContainer510').appendChild(button510);

const button511 = document.createElement('button');
button511.innerText = '211_3';
button511.addEventListener('click', function() {
    function hasConsecutiveDuplicates(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] === arr[i + 1]) {
                return true;
            }
        }
        return false;
    }

    console.log(hasConsecutiveDuplicates([1, 2, 2, 3]));
    console.log(hasConsecutiveDuplicates([1, 2, 3, 4]));
});
document.getElementById('buttonContainer511').appendChild(button511);

const button512 = document.createElement('button');
button512.innerText = '212_1';
button512.addEventListener('click', function() {
    function func(a, b) {
        return a == b;
    }

    console.log(func(3, 3));
    console.log(func(3, 4));
});
document.getElementById('buttonContainer512').appendChild(button512);

const button513 = document.createElement('button');
button513.innerText = '212_2';
button513.addEventListener('click', function() {
    function func(a, b) {
        return a != b;
    }

    console.log(func(3, 3));
    console.log(func(3, 4));
});
document.getElementById('buttonContainer513').appendChild(button513);

const button514 = document.createElement('button');
button514.innerText = '212_3';
button514.addEventListener('click', function() {
    function func(a, b) {
        return a + b >= 10;
    }

    console.log(func(5, 5));
    console.log(func(4, 5));
});
document.getElementById('buttonContainer514').appendChild(button514);

const button515 = document.createElement('button');
button515.innerText = '212_4';
button515.addEventListener('click', function() {
    function func(num) {
        return num >= 0;
    }

    console.log(func(5));
    console.log(func(-1));
});
document.getElementById('buttonContainer515').appendChild(button515);

const button516 = document.createElement('button');
button516.innerText = '213_1';
button516.addEventListener('click', function() {
    // Недостатки:
    // 1. Отсутствие обработки случая, когда массив пустой (может привести к делению на ноль).
    // 2. Название функции не отражает, что она возвращает среднее значение.
    // 3. Не использует вспомогательные функции для сложения элементов массива.

    function calculateSum(arr) {
        return getTotal(arr) / arr.length;
    }

    function getTotal(arr) {
        let total = 0;
        for (let elem of arr) {
            total += elem;
        }
        return total;
    }

    // Пример использования
    console.log(calculateSum([1, 2, 3, 4])); // Результат: 2.5
});
document.getElementById('buttonContainer516').appendChild(button516);

const button517 = document.createElement('button');
button517.innerText = '213_2';
button517.addEventListener('click', function() {
    // Недостатки:
    // 1. Дублирование кода: дважды используется один и тот же цикл для вычисления суммы.
    // 2. Название функции не отражает ее действие; лучше использовать более ясное название.

    function calculateAverage(arr1, arr2) {
        const total1 = getTotal(arr1);
        const total2 = getTotal(arr2);
        return total1 / total2;
    }

    function getTotal(arr) {
        let total = 0;
        for (let elem of arr) {
            total += elem;
        }
        return total;
    }

    // Пример использования
    console.log(calculateAverage([1, 2, 3], [4, 5, 6])); // Результат: 0.3333
});
document.getElementById('buttonContainer517').appendChild(button517);

const button518 = document.createElement('button');
button518.innerText = '213_3';
button518.addEventListener('click', function() {
    // Недостатки:
    // 1. Название функции misleading, так как функция возвращает произведение, а не сумму.
    // 2. В функции используется умножение вместо сложения, что не соответствует названию функции.

    function getSum(arr) {
        return calculateProduct(arr);
    }

    function calculateProduct(arr) {
        let product = 1;
        for (let elem of arr) {
            product *= elem;
        }
        return product;
    }

    // Пример использования
    console.log(getSum([1, 2, 3, 4])); // Результат: 24
});
document.getElementById('buttonContainer518').appendChild(button518);

const button519 = document.createElement('button');
button519.innerText = '214_1';
button519.addEventListener('click', function() {
    function func1() {
        return 3;
    }

    function func2() {
        return 5;
    }

    console.log(func1() + func2()); // Результат: 8
});
document.getElementById('buttonContainer519').appendChild(button519);

const button520 = document.createElement('button');
button520.innerText = '214_2';
button520.addEventListener('click', function() {
    function sum(arr) {
        let res = 0;

        for (let elem of arr) {
            res += elem;
        }

        return res; // Исправлено: переместить return за цикл
    }

    console.log(sum([1, 2, 3, 4, 5])); // Результат: 15
});
document.getElementById('buttonContainer520').appendChild(button520);

const button521 = document.createElement('button');
button521.innerText = '214_3';
button521.addEventListener('click', function() {
    let arr = [1, 2, 3, 4, 5];

    function func(arr) {
        let res = 0;

        for (let elem of arr) {
            res += elem;
        }

        console.log(res); // Исправлено: добавлен вывод в консоль
    }

    func(arr); // Результат: 15
});
document.getElementById('buttonContainer521').appendChild(button521);

const button522 = document.createElement('button');
button522.innerText = '214_4';
button522.addEventListener('click', function() {
    function func1() {
        return 3;
    }

    function func2() {
        return 5;
    }

    console.log(func1() + func2()); // Результат: 8
});
document.getElementById('buttonContainer522').appendChild(button522);

const button523 = document.createElement('button');
button523.innerText = '214_5';
button523.addEventListener('click', function() {
    function sum(arr) {
        let sum = 0;

        for (let elem of arr) {
            sum += elem;
        }

        return sum; // Исправлено: вернули сумму
    }

    let result = sum([1, 2, 3, 4, 5]);
    console.log(result); // Результат: 15
});
document.getElementById('buttonContainer523').appendChild(button523);

const button524 = document.createElement('button');
button524.innerText = '214_6';
button524.addEventListener('click', function() {
    function sum(arr) {
        let sum = 0;

        for (let elem of arr) {
            sum += elem;
        }
        return sum; // Исправлено: добавлен return
    }

    let res = sum([1, 2, 3, 4, 5]);
    console.log(res); // Результат: 15
});
document.getElementById('buttonContainer524').appendChild(button524);

const button525 = document.createElement('button');
button525.innerText = '214_7';
button525.addEventListener('click', function() {
    function add(num) {
        if (num <= 9) {
            return '0' + num;
        }
        return num; // Исправлено: добавлен return для чисел больше 9
    }

    console.log(add(3));  // Результат: '03'
    console.log(add(10)); // Результат: 10
});
document.getElementById('buttonContainer525').appendChild(button525);

const button526 = document.createElement('button');
button526.innerText = '214_8';
button526.addEventListener('click', function() {
    let arr = [1, 2, 3, 4, 5];

    function sum(arr) {
        let res = 0;

        for (let elem of arr) {
            res += elem;
        }

        return res; // Исправлено: добавлен return
    }

    let result = sum(arr);
    console.log(result); // Результат: 15
});
document.getElementById('buttonContainer526').appendChild(button526);

const button527 = document.createElement('button');
button527.innerText = '214_9';
button527.addEventListener('click', function() {
    let num = 12345;

    function getDigitsSum(num) {
        let arr = String(num).split(''); // Исправлено: преобразование числа в строку
        let sum = 0;

        for (let elem of arr) {
            sum += Number(elem); // Исправлено: преобразование строки в число
        }

        return sum;
    }

    let res = getDigitsSum(num);
    console.log(res); // Результат: 15
});
document.getElementById('buttonContainer527').appendChild(button527);

const button528 = document.createElement('button');
button528.innerText = '214_10';
button528.addEventListener('click', function() {
    function isPrime(num) {
        if (num < 2) return false; // Исправлено: проверка на меньше 2
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false; // Исправлено: логика проверки на простое число
            }
        }
        return true; // Исправлено: вернуть true, если число простое
    }

    console.log(isPrime(13)); // Результат: true
});
document.getElementById('buttonContainer528').appendChild(button528);

const button529 = document.createElement('button');
button529.innerText = '215_1';
button529.addEventListener('click', function() {
    function sumArray(arr) {
        return arr.reduce((acc, curr) => acc + curr, 0);
    }

    console.log(sumArray([1, 2, 3, 4, 5])); // Результат: 15
});
document.getElementById('buttonContainer529').appendChild(button529);

const button530 = document.createElement('button');
button530.innerText = '215_2';
button530.addEventListener('click', function() {
    function getDivisors(num) {
        const divisors = [];
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                divisors.push(i);
            }
        }
        return divisors;
    }

    console.log(getDivisors(12)); // Результат: [1, 2, 3, 4, 6, 12]
});
document.getElementById('buttonContainer530').appendChild(button530);

const button531 = document.createElement('button');
button531.innerText = '215_3';
button531.addEventListener('click', function() {
    function stringToArray(str) {
        return str.split('');
    }

    console.log(stringToArray('hello')); // Результат: ['h', 'e', 'l', 'l', 'o']
});
document.getElementById('buttonContainer531').appendChild(button531);

const button532 = document.createElement('button');
button532.innerText = '215_4';
button532.addEventListener('click', function() {
    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    console.log(reverseString('hello')); // Результат: 'olleh'
});
document.getElementById('buttonContainer532').appendChild(button532);

const button533 = document.createElement('button');
button533.innerText = '215_5';
button533.addEventListener('click', function() {
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    console.log(capitalizeFirstLetter('hello')); // Результат: 'Hello'
});
document.getElementById('buttonContainer533').appendChild(button533);

const button534 = document.createElement('button');
button534.innerText = '215_6';
button534.addEventListener('click', function() {
    function capitalizeWords(str) {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    console.log(capitalizeWords('hello world')); // Результат: 'Hello World'
});
document.getElementById('buttonContainer534').appendChild(button534);

const button535 = document.createElement('button');
button535.innerText = '215_7';
button535.addEventListener('click', function() {
    function fillArray(n) {
        return Array.from({ length: n }, (_, i) => i + 1);
    }

    console.log(fillArray(5)); // Результат: [1, 2, 3, 4, 5]
});
document.getElementById('buttonContainer535').appendChild(button535);

const button536 = document.createElement('button');
button536.innerText = '215_8';
button536.addEventListener('click', function() {
    function sumDigits(num) {
        return String(num).split('').reduce((acc, curr) => acc + Number(curr), 0);
    }

    console.log(sumDigits(12345)); // Результат: 15
});
document.getElementById('buttonContainer536').appendChild(button536);

const button537 = document.createElement('button');
button537.innerText = '215_9';
button537.addEventListener('click', function() {
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    console.log(isLeapYear(2020)); // Результат: true
});
document.getElementById('buttonContainer537').appendChild(button537);

const button538 = document.createElement('button');
button538.innerText = '215_10';
button538.addEventListener('click', function() {
    function secondsToDays(seconds) {
        return Math.floor(seconds / (24 * 60 * 60));
    }

    console.log(secondsToDays(86400)); // Результат: 1
});
document.getElementById('buttonContainer538').appendChild(button538);

const button539 = document.createElement('button');
button539.innerText = '215_11';
button539.addEventListener('click', function() {
    function getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    console.log(getRandomElement([1, 2, 3, 4, 5])); // Результат: случайный элемент из массива
});
document.getElementById('buttonContainer539').appendChild(button539);

const button540 = document.createElement('button');
button540.innerText = '215_12';
button540.addEventListener('click', function() {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    console.log(isPrime(13)); // Рeзультат: true
});
document.getElementById('buttonContainer540').appendChild(button540);

const button541 = document.createElement('button');
button541.innerText = '216_1';
button541.addEventListener('click', function() {
    // выводит в консоль значение переменной num, которая равна 1
    let num = 1;

    function func() {
        console.log(num); // Выведет 1
    }

    func();
});
document.getElementById('buttonContainer541').appendChild(button541);

const button542 = document.createElement('button');
button542.innerText = '216_2';
button542.addEventListener('click', function() {
    // выводит в консоль значение переменной num. Сначала num равен 1, затем присваивается значение 2
    let num = 1;

    function func() {
        console.log(num); // Выведет 2, так как num изменен перед вызовом функции
    }

    num = 2;
    func();
});
document.getElementById('buttonContainer542').appendChild(button542);

const button543 = document.createElement('button');
button543.innerText = '216_3';
button543.addEventListener('click', function() {
    // объявляется функция func, которая выводит в консоль значение переменной num.
    // Переменная num сначала объявлена, затем ей присваиваются разные значения перед каждым вызовом функции
    function func() {
        console.log(num); // Выведет 1 при первом вызове и 2 при втором
    }

    let num;

    num = 1;
    func(); // Выведет 1

    num = 2;
    func(); // Выведет 2
});
document.getElementById('buttonContainer543').appendChild(button543);

const button544 = document.createElement('button');
button544.innerText = '217_1';
button544.addEventListener('click', function() {
    // Попытка вывести переменную num, которая не определена вне функции, вызовет ошибку ReferenceError
    function func() {
        let num = 5;
        return num;
    }

    console.log(num); // Ошибка: num не определен в глобальной области видимости
});
document.getElementById('buttonContainer544').appendChild(button544);

const button545 = document.createElement('button');
button545.innerText = '217_2';
button545.addEventListener('click', function() {
    // Выводится результат выполнения функции, которая возвращает 5
    function func() {
        let num = 5;
        return num;
    }

    console.log(func()); // Выведет 5, так как функция возвращает 5
});
document.getElementById('buttonContainer545').appendChild(button545);

const button546 = document.createElement('button');
button546.innerText = '218_1';
button546.addEventListener('click', function() {
    // В глобальной области переменной num присвоено значение 1.
    // Функция func изменяет глобальную переменную num на 2.
    let num = 1;

    function func() {
        num = 2; // Изменяет глобальную переменную num
    }
    func();

    console.log(num); // Выведет 2
});
document.getElementById('buttonContainer546').appendChild(button546);

const button547 = document.createElement('button');
button547.innerText = '218_2';
button547.addEventListener('click', function() {
    // В глобальной области переменной num присвоено значение 1.
    // Внутри функции создается локальная переменная num, которая не влияет на глобальную.
    let num = 1;

    function func() {
        let num = 2; // Локальная переменная num, не влияет на глобальную
    }
    func();

    console.log(num); // Выведет 1, так как глобальная переменная не изменилась
});
document.getElementById('buttonContainer547').appendChild(button547);

const button548 = document.createElement('button');
button548.innerText = '219_1';
button548.addEventListener('click', function() {
    // Глобальная переменная num изменяется внутри функции func на 2
    let num = 1;

    function func() {
        num = 2;
    }
    func();

    console.log(num); // Выведет 2
});
document.getElementById('buttonContainer548').appendChild(button548);

const button549 = document.createElement('button');
button549.innerText = '219_2';
button549.addEventListener('click', function() {
    // Глобальная переменная num равна 1, так как func не вызывается до вывода в консоль
    let num = 1;

    function func() {
        num = 2;
    }

    console.log(num); // Выведет 1
});
document.getElementById('buttonContainer549').appendChild(button549);

const button550 = document.createElement('button');
button550.innerText = '219_3';
button550.addEventListener('click', function() {
    // Локальная переменная num внутри функции не влияет на глобальную переменную num
    let num = 1;

    function func() {
        let num = 2;
    }
    func();

    console.log(num); // Выведет 1
});
document.getElementById('buttonContainer550').appendChild(button550);

const button551 = document.createElement('button');
button551.innerText = '219_4';
button551.addEventListener('click', function() {
    // Глобальная переменная num равна 1, функция func определяет локальную переменную num
    let num = 1;

    function func() {
        let num = 2;
    }

    console.log(num); // Выведет 1
    func();
});
document.getElementById('buttonContainer551').appendChild(button551);

const button552 = document.createElement('button');
button552.innerText = '219_5';
button552.addEventListener('click', function() {
    // Сначала выводится значение 1, затем функция изменяет глобальную переменную на 2
    let num = 1;

    function func() {
        num = 2;
    }

    console.log(num); // Выведет 1
    func();
});
document.getElementById('buttonContainer552').appendChild(button552);

const button553 = document.createElement('button');
button553.innerText = '219_6';
button553.addEventListener('click', function() {
    // Глобальная переменная num увеличивается на 1 три раза
    let num = 1;

    function func() {
        num++;
    }

    func();
    func();
    func();
    console.log(num); // Выведет 4
});
document.getElementById('buttonContainer553').appendChild(button553);

const button554 = document.createElement('button');
button554.innerText = '219_7';
button554.addEventListener('click', function() {
    // Глобальная переменная num равна 1, функция изменит её на 2 после вывода
    function func() {
        num = 2;
    }

    let num = 1;
    console.log(num); // Выведет 1
    func();
});
document.getElementById('buttonContainer554').appendChild(button554);

const button555 = document.createElement('button');
button555.innerText = '219_8';
button555.addEventListener('click', function() {
    // Функция изменяет глобальную переменную num на 2 до вывода
    function func() {
        num = 2;
    }

    let num = 1;
    func();
    console.log(num); // Выведет 1, так как функция не изменяет локальную переменную
});
document.getElementById('buttonContainer555').appendChild(button555);

const button556 = document.createElement('button');
button556.innerText = '220_1';
button556.addEventListener('click', function() {
    // Выводится переданное в функцию значение 1
    function func(localNum) {
        console.log(localNum); // Выведет 1
    }

    func(1);
});
document.getElementById('buttonContainer556').appendChild(button556);

const button557 = document.createElement('button');
button557.innerText = '220_2';
button557.addEventListener('click', function() {
    // Передается переменная num со значением 1, и это значение выводится
    function func(localNum) {
        console.log(localNum); // Выведет 1
    }

    let num = 1;
    func(num);
});
document.getElementById('buttonContainer557').appendChild(button557);

const button558 = document.createElement('button');
button558.innerText = '220_3';
button558.addEventListener('click', function() {
    // Сначала выводится значение 1, так как в момент вызова func(num) переменная num равна 1
    function func(localNum) {
        console.log(localNum); // Выведет 1
    }

    let num = 1;
    func(num);
    num = 2;
});
document.getElementById('buttonContainer558').appendChild(button558);

const button559 = document.createElement('button');
button559.innerText = '220_4';
button559.addEventListener('click', function() {
    // Переменная num изменяется на 2 перед вызовом функции, и выводится 2
    let num = 1;

    function func(localNum) {
        console.log(localNum); // Выведет 2
    }

    num = 2;
    func(num);
});
document.getElementById('buttonContainer559').appendChild(button559);

const button560 = document.createElement('button');
button560.innerText = '220_5';
button560.addEventListener('click', function() {
    // Внутри функции изменяется только локальная переменная localNum, глобальная переменная num остается 1
    function func(localNum) {
        localNum = 2;
    }

    let num = 1;
    func(num);
    console.log(num); // Выведет 1
});
document.getElementById('buttonContainer560').appendChild(button560);

const button561 = document.createElement('button');
button561.innerText = '220_6';
button561.addEventListener('click', function() {
    // Функция изменяет глобальную переменную num на 2
    function func(localNum) {
        num = 2;
    }

    let num = 1;
    func(num);
    console.log(num); // Выведет 2
});
document.getElementById('buttonContainer561').appendChild(button561);

const button562 = document.createElement('button');
button562.innerText = '220_7';
button562.addEventListener('click', function() {
    // Локальная переменная num внутри функции не влияет на глобальную переменную num
    function func(localNum) {
        let num = 2;
    }

    let num = 1;
    func(num);
    console.log(num); // Выведет 1
});
document.getElementById('buttonContainer562').appendChild(button562);

const button563 = document.createElement('button');
button563.innerText = '221_1';
button563.addEventListener('click', function() {
    // Переменная num передается в функцию по значению, и изменение внутри функции не влияет на глобальную переменную num
    function func(num) {
        num = 2;
    }

    let num = 1;
    func(num);
    console.log(num); // Выведет 1
});
document.getElementById('buttonContainer563').appendChild(button563);

const button564 = document.createElement('button');
button564.innerText = '221_2';
button564.addEventListener('click', function() {
    // Функция func изменяет глобальную переменную num на 2
    function func() {
        num = 2;
    }

    let num = 1;
    func();
    console.log(num); // Выведет 2
});
document.getElementById('buttonContainer564').appendChild(button564);

const button565 = document.createElement('button');
button565.innerText = '221_3';
button565.addEventListener('click', function() {
    // Локальная переменная num внутри функции не влияет на глобальную переменную num
    function func() {
        let num = 2;
    }

    let num = 1;
    func();
    console.log(num); // Выведет 1
});
document.getElementById('buttonContainer565').appendChild(button565);

const button566 = document.createElement('button');
button566.innerText = '222_1';
button566.addEventListener('click', function() {
    // Функция изменяет свойство объекта obj, переданного по ссылке
    function func(obj) {
        obj.a = '!'; // Изменение свойства объекта
    }

    let obj = {a: 1, b: 2, c: 3};
    func(obj);
    console.log(obj); // Выведет {a: '!', b: 2, c: 3}
});
document.getElementById('buttonContainer566').appendChild(button566);

const button567 = document.createElement('button');
button567.innerText = '222_2';
button567.addEventListener('click', function() {
    // Передается значение свойства obj.a, функция изменяет только локальную переменную arg
    function func(arg) {
        arg = '!'; // Изменение локальной переменной не влияет на объект
    }

    let obj = {a: 1, b: 2, c: 3};
    func(obj.a);
    console.log(obj); // Выведет {a: 1, b: 2, c: 3}
});
document.getElementById('buttonContainer567').appendChild(button567);

const button568 = document.createElement('button');
button568.innerText = '222_3';
button568.addEventListener('click', function() {
    // Передается значение свойства obj.a, функция изменяет только локальную переменную obj
    function func(obj) {
        obj = '!'; // Изменение локальной переменной не влияет на объект
    }

    let obj = {a: 1, b: 2, c: 3};
    func(obj.a);
    console.log(obj); // Выведет {a: 1, b: 2, c: 3}
});
document.getElementById('buttonContainer568').appendChild(button568);

const button569 = document.createElement('button');
button569.innerText = '222_4';
button569.addEventListener('click', function() {
    // Функция изменяет массив, удаляя элемент с индексом 1
    function func(arr) {
        arr.splice(1, 1); // Удаляет элемент с индексом 1
    }

    let arr = [1, 2, 3];
    func(arr);
    console.log(arr); // Выведет [1, 3]
});
document.getElementById('buttonContainer569').appendChild(button569);

const button570 = document.createElement('button');
button570.innerText = '222_5';
button570.addEventListener('click', function() {
    // Метод slice не изменяет исходный массив, а возвращает новый массив
    function func(arr) {
        arr.slice(1, 1); // Не изменяет arr
    }

    let arr = [1, 2, 3];
    func(arr);
    console.log(arr); // Выведет [1, 2, 3]
});
document.getElementById('buttonContainer570').appendChild(button570);

const button571 = document.createElement('button');
button571.innerText = '222_6';
button571.addEventListener('click', function() {
    // Внутри функции создается ссылка на тот же массив, и первый элемент изменяется
    function func(arr) {
        let newArr = arr; // newArr ссылается на тот же массив
        newArr[0] = '!'; // Изменяет первый элемент массива
    }

    let arr = [1, 2, 3];
    func(arr);
    console.log(arr); // Выведет ['!', 2, 3]
});
document.getElementById('buttonContainer571').appendChild(button571);

const button572 = document.createElement('button');
button572.innerText = '223_1';
button572.addEventListener('click', function() {
    function func() {
        return '!';
    }

    console.log(func);
});
document.getElementById('buttonContainer572').appendChild(button572);

const button573 = document.createElement('button');
button573.innerText = '224_1';
button573.addEventListener('click', function() {
    // Функция возвращает строку
    function func() {
        return 'Hello, World!'; // Возвращает строку
    }
});
document.getElementById('buttonContainer573').appendChild(button573);

const button574 = document.createElement('button');
button574.innerText = '224_2';
button574.addEventListener('click', function() {
    // Выводится результат работы функции
    function func() {
        return 'Hello, World!';
    }

    console.log(func()); // Выведет 'Hello, World!'
});
document.getElementById('buttonContainer574').appendChild(button574);

const button575 = document.createElement('button');
button575.innerText = '224_3';
button575.addEventListener('click', function() {
    // Выводится исходный код функции
    function func() {
        return 'Hello, World!';
    }

    console.log(func); // Выведет код функции: function func() { return 'Hello, World!'; }
});
document.getElementById('buttonContainer575').appendChild(button575);

const button576 = document.createElement('button');
button576.innerText = '224_4';
button576.addEventListener('click', function() {
    // Переменной func присваивается число 123, затмевая функцию
    function func() {
        return 'Hello, World!';
    }

    func = 123; // Затираем функцию
    console.log(func);
});
document.getElementById('buttonContainer576').appendChild(button576);

const button577 = document.createElement('button');
button577.innerText = '225_1';
button577.addEventListener('click', function() {
    function func1() {
        return 3;
    }

    console.log(func1);
});
document.getElementById('buttonContainer577').appendChild(button577);

const button578 = document.createElement('button');
button578.innerText = '225_2';
button578.addEventListener('click', function() {
    function func1() {
        return 3;
    }

    const func2 = func1;

    console.log(func2);
});
document.getElementById('buttonContainer578').appendChild(button578);

const button579 = document.createElement('button');
button579.innerText = '225_3';
button579.addEventListener('click', function() {
    function func1() {
        return 3;
    }

    const func2 = func1;
    console.log(func1() + func2());
});
document.getElementById('buttonContainer579').appendChild(button579);

const button580 = document.createElement('button');
button580.innerText = '226_1';
button580.addEventListener('click', function() {
    let func1 = function() {
        return 1;
    };
});
document.getElementById('buttonContainer580').appendChild(button580);

const button581 = document.createElement('button');
button581.innerText = '226_2';
button581.addEventListener('click', function() {
    let func2 = function() {
        return 2;
    };
});
document.getElementById('buttonContainer581').appendChild(button581);

const button582 = document.createElement('button');
button582.innerText = '226_3';
button582.addEventListener('click', function() {
    let func1 = function() {
        return 1;
    };

    let func2 = function() {
        return 2;
    };

    alert(func1() + func2());
});
document.getElementById('buttonContainer582').appendChild(button582);

const button583 = document.createElement('button');
button583.innerText = '228_1';
button583.addEventListener('click', function() {
    // Определяем, что функция является Function Declaration
    function func() {
        console.log('!');
    }

    console.log('Это Function Declaration'); // Сообщение о том, что это Function Declaration
});
document.getElementById('buttonContainer583').appendChild(button583);

const button584 = document.createElement('button');
button584.innerText = '228_2';
button584.addEventListener('click', function() {
    // Определяем, что функция является Function Expression
    let func = function() {
        console.log('!');
    };

    console.log('Это Function Expression'); // Сообщение о том, что это Function Expression
});
document.getElementById('buttonContainer584').appendChild(button584);

const button585 = document.createElement('button');
button585.innerText = '229_1';
button585.addEventListener('click', function() {
    function func() {
        console.log('Function Declaration доступна!');
    }
    func();
});
document.getElementById('buttonContainer585').appendChild(button585);

const button586 = document.createElement('button');
button586.innerText = '229_2';
button586.addEventListener('click', function() {
    let func = function() {
        console.log('Function Expression доступна!');
    };
    func();
});
document.getElementById('buttonContainer586').appendChild(button586);

const button587 = document.createElement('button');
button587.innerText = '230_1';
button587.addEventListener('click', function() {
    let func1 = function() { console.log('!'); };
    let func2 = function() {
        console.log('!');
    };
    function func3() {
        console.log('!');
    }

    console.log('Точки с запятой расставлены корректно.');
});
document.getElementById('buttonContainer587').appendChild(button587);

const button588 = document.createElement('button');
button588.innerText = '231_1';
button588.addEventListener('click', function() {
    function func() {
        console.log('!');
    }

    console.log('Это Function Declaration');
});
document.getElementById('buttonContainer588').appendChild(button588);

const button589 = document.createElement('button');
button589.innerText = '231_2';
button589.addEventListener('click', function() {
    let func = function() {
        console.log('!');
    };

    console.log('Это Function Expression');
});
document.getElementById('buttonContainer589').appendChild(button589);

const button590 = document.createElement('button');
button590.innerText = '231_3';
button590.addEventListener('click', function() {
    +function() {
        console.log('!');
    };

    console.log('Это Function Expression');
});
document.getElementById('buttonContainer590').appendChild(button590);

const button591 = document.createElement('button');
button591.innerText = '231_4';
button591.addEventListener('click', function() {
    !function func() {
        console.log('!');
    };

    console.log('Это Function Expression');
});
document.getElementById('buttonContainer591').appendChild(button591);

const button592 = document.createElement('button');
button592.innerText = '231_5';
button592.addEventListener('click', function() {
    -function func() {
        console.log('!');
    };

    console.log('Это Function Expression');
});
document.getElementById('buttonContainer592').appendChild(button592);

const button593 = document.createElement('button');
button593.innerText = '231_6';
button593.addEventListener('click', function() {
    1 + function func() {
        console.log('!');
    };

    console.log('Это Function Expression');
});
document.getElementById('buttonContainer593').appendChild(button593);

const button594 = document.createElement('button');
button594.innerText = '231_7';
button594.addEventListener('click', function() {
    (function func() {
        console.log('!');
    });

    console.log('Это Function Expression');
});
document.getElementById('buttonContainer594').appendChild(button594);

const button595 = document.createElement('button');
button595.innerText = '231_8';
button595.addEventListener('click', function() {
    console.log(
        function() {
            console.log('!');
        }
    );

    console.log('Это Function Expression');
});
document.getElementById('buttonContainer595').appendChild(button595);

const button596 = document.createElement('button');
button596.innerText = '234_1';
button596.addEventListener('click', function() {
    let test = function func() {
        console.log('!');
    };

    console.log('Это Function Expression');
});
document.getElementById('buttonContainer596').appendChild(button596);

const button597 = document.createElement('button');
button597.innerText = '234_2';
button597.addEventListener('click', function() {
    console.log(
        function func() {
            console.log('!');
        }
    );

    console.log('Это Function Expression');
});
document.getElementById('buttonContainer597').appendChild(button597);

const button598 = document.createElement('button');
button598.innerText = '234_3';
button598.addEventListener('click', function() {
    +function func() {
        console.log('!');
    };

    console.log('Это Function Expression');
});
document.getElementById('buttonContainer598').appendChild(button598);

const button599 = document.createElement('button');
button599.innerText = '234_4';
button599.addEventListener('click', function() {
    function func() {
        console.log('!');
    }

    console.log('Это Function Declaration');
});
document.getElementById('buttonContainer599').appendChild(button599);

const button600 = document.createElement('button');
button600.innerText = '235_1';
button600.addEventListener('click', function() {
    function func() {
        console.log('!');
    }

    console.log('Это Function Declaration');
});
document.getElementById('buttonContainer600').appendChild(button600);

const button601 = document.createElement('button');
button601.innerText = '235_2';
button601.addEventListener('click', function() {
    -1;
    function func() {
        console.log('!');
    }

    console.log('Это Function Declaration');
});
document.getElementById('buttonContainer601').appendChild(button601);

const button602 = document.createElement('button');
button602.innerText = '235_3';
button602.addEventListener('click', function() {
    -1;
    function func() {
        console.log('!');
    }

    console.log('Это Function Declaration');
});
document.getElementById('buttonContainer602').appendChild(button602);

const button603 = document.createElement('button');
button603.innerText = '235_4';
button603.addEventListener('click', function() {
    1;
    function func() {
        console.log('!');
    }

    console.log('Это Function Declaration');
});
document.getElementById('buttonContainer603').appendChild(button603);

const button604 = document.createElement('button');
button604.innerText = '235_5';
button604.addEventListener('click', function() {
    -1 -
    function func() {
        console.log('!');
    }

    console.log('Это Function Declaration');
});
document.getElementById('buttonContainer604').appendChild(button604);

const button605 = document.createElement('button');
button605.innerText = '236_1';
button605.addEventListener('click', function() {
    function func() {
        console.log('!');
    }
    +1;

    console.log('Это Function Declaration');
});
document.getElementById('buttonContainer605').appendChild(button605);

const button606 = document.createElement('button');
button606.innerText = '236_2';
button606.addEventListener('click', function() {
    function func() {
        console.log('!');
    } + 1;

    console.log('Это Function Declaration');
});
document.getElementById('buttonContainer606').appendChild(button606);

const button607 = document.createElement('button');
button607.innerText = '236_3';
button607.addEventListener('click', function() {
    +function func() {
        console.log('!');
    } + 1;

    console.log('Это Function Expression');
});
document.getElementById('buttonContainer607').appendChild(button607);

const button608 = document.createElement('button');
button608.innerText = '236_4';
button608.addEventListener('click', function() {
    +
        function func() {
            console.log('!');
        } + 1;

    console.log('Это Function Declaration');
});
document.getElementById('buttonContainer608').appendChild(button608);

const button609 = document.createElement('button');
button609.innerText = '236_5';
button609.addEventListener('click', function() {
    + 1
    function func() {
        console.log('!');
    } + 1;

    console.log('Это Function Declaration');
});
document.getElementById('buttonContainer609').appendChild(button609);

const button610 = document.createElement('button');
button610.innerText = '236_6';
button610.addEventListener('click', function() {
    function func() {
        console.log('!');
    } + console.log('!');

    console.log('Это Function Declaration');
});
document.getElementById('buttonContainer610').appendChild(button610);

const button611 = document.createElement('button');
button611.innerText = '237_1';
button611.addEventListener('click', function() {
    let arr = [
        function() { return 1; },
        function() { return 2; },
        function() { return 3; }
    ];

    console.log('Массив функций создан');
});
document.getElementById('buttonContainer611').appendChild(button611);

const button612 = document.createElement('button');
button612.innerText = '237_2';
button612.addEventListener('click', function() {
    let arr = [
        function() { return 1; },
        function() { return 2; },
        function() { return 3; }
    ];

    console.log(arr[2]());
});
document.getElementById('buttonContainer612').appendChild(button612);

const button613 = document.createElement('button');
button613.innerText = '237_3';
button613.addEventListener('click', function() {
    let arr = [
        function() { return 1; },
        function() { return 2; },
        function() { return 3; }
    ];

    let sum = arr[0]() + arr[1]() + arr[2]();
    console.log(sum);
});
document.getElementById('buttonContainer613').appendChild(button613);

const button614 = document.createElement('button');
button614.innerText = '237_4';
button614.addEventListener('click', function() {
    let arr = [
        function() { return 1; },
        function() { return 2; },
        function() { return 3; }
    ];

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]());
    }
});
document.getElementById('buttonContainer614').appendChild(button614);

const button615 = document.createElement('button');
button615.innerText = '238_1';
button615.addEventListener('click', function() {
    let obj = {
        func1: function() { return 1; },
        func2: function() { return 2; },
        func3: function() { return 3; }
    };

    let sum = obj.func1() + obj.func2() + obj.func3();
    console.log(sum);
});
document.getElementById('buttonContainer615').appendChild(button615);

const button616 = document.createElement('button');
button616.innerText = '238_2';
button616.addEventListener('click', function() {
    let obj = {
        func1: function() { return 1; },
        func2: function() { return 2; },
        func3: function() { return 3; }
    };

    for (let key in obj) {
        console.log(obj[key]());
    }
});
document.getElementById('buttonContainer616').appendChild(button616);

const button617 = document.createElement('button');
button617.innerText = '239_1';
button617.addEventListener('click', function() {
    let obj = {
        sum: function(arr) {
            return arr.reduce((acc, num) => acc + num, 0); // Сумма элементов массива
        },
        sumOfSquares: function(arr) {
            return arr.reduce((acc, num) => acc + num ** 2, 0); // Сумма квадратов
        },
        sumOfCubes: function(arr) {
            return arr.reduce((acc, num) => acc + num ** 3, 0); // Сумма кубов
        }
    };

    let numbers = [1, 2, 3, 4];

    console.log('Сумма:', obj.sum(numbers));               // Выводим сумму элементов массива
    console.log('Сумма квадратов:', obj.sumOfSquares(numbers)); // Выводим сумму квадратов
    console.log('Сумма кубов:', obj.sumOfCubes(numbers));       // Выводим сумму кубов
});
document.getElementById('buttonContainer617').appendChild(button617);

const button618 = document.createElement('button');
button618.innerText = '240_1';
button618.addEventListener('click', function() {
    function returnOne() {
        return 1;
    }

    function returnTwo() {
        return 2;
    }

    function returnThree() {
        return 3;
    }

    function test(func1, func2, func3) {
        console.log(func1() + func2() + func3());
    }

    test(returnOne, returnTwo, returnThree);
});
document.getElementById('buttonContainer618').appendChild(button618);

const button619 = document.createElement('button');
button619.innerText = '241_1';
button619.addEventListener('click', function() {
    function test(func1, func2, func3) {
        return func1() + func2() + func3();
    }
});
document.getElementById('buttonContainer619').appendChild(button619);

const button620 = document.createElement('button');
button620.innerText = '241_2';
button620.addEventListener('click', function() {
    function func1() { return 1; }
    function func2() { return 2; }
    function func3() { return 3; }
    const result = test(func1, func2, func3);
    console.log(result);
});
document.getElementById('buttonContainer620').appendChild(button620);

const button621 = document.createElement('button');
button621.innerText = '241_3';
button621.addEventListener('click', function() {
    const func1 = function() { return 1; };
    const func2 = function() { return 2; };
    const func3 = function() { return 3; };
    const result = test(func1, func2, func3);
    console.log(result);
});
document.getElementById('buttonContainer621').appendChild(button621);

const button622 = document.createElement('button');
button622.innerText = '242_1';
button622.addEventListener('click', function() {
    function test(func) {
        console.log(func(3));
    }

    test(function(num) {
        return num * num * num;
    });
});
document.getElementById('buttonContainer622').appendChild(button622);

const button623 = document.createElement('button');
button623.innerText = '242_2';
button623.addEventListener('click', function() {
    function test(func) {
        console.log(func(3));
    }

    function func(num) {
        return num * num * num;
    }

    test(func);
});
document.getElementById('buttonContainer623').appendChild(button623);

const button624 = document.createElement('button');
button624.innerText = '242_3';
button624.addEventListener('click', function() {
    function test(func) {
        console.log(func(3));
    }

    const func = function(num) {
        return num * num * num;
    };

    test(func);
});
document.getElementById('buttonContainer624').appendChild(button624);

const button625 = document.createElement('button');
button625.innerText = '242_4';
button625.addEventListener('click', function() {
    function test(func) {
        const result = func(2, 3);
        alert(result);
    }

    const func = function(a, b) {
        return a + b;
    };

    test(func);
});
document.getElementById('buttonContainer625').appendChild(button625);

const button626 = document.createElement('button');
button626.innerText = '243_1';
button626.addEventListener('click', function() {
    function test(num, func1, func2) {
        return func1(num) + func2(num);
    }

    const result = test(3, function(num) { return num * num; }, function(num) { return num * num * num; });
    console.log(result);
});
document.getElementById('buttonContainer626').appendChild(button626);


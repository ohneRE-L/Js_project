"use strict";
const button688 = document.createElement('button');
button688.innerText = '276_2';
button688.addEventListener('click', function() {
    function flattenArray(arr) {
        return arr.reduce((acc, item) => {
            if (Array.isArray(item)) {
                acc.push(...flattenArray(item));
            } else {
                acc.push(item);
            }
            return acc;
        }, []);
    }

    const arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
    const flattened = flattenArray(arr);
    console.log(flattened);
});
document.getElementById('buttonContainer688').appendChild(button688);

const button689 = document.createElement('button');
button689.innerText = '277_1';
button689.addEventListener('click', function() {
    function sumObjectValues(obj) {
        let sum = 0;
        for (let key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                sum += sumObjectValues(obj[key]);
            } else {
                sum += obj[key];
            }
        }
        return sum;
    }

    const obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
    const totalSum = sumObjectValues(obj);
    console.log(totalSum);
});
document.getElementById('buttonContainer689').appendChild(button689);

const button690 = document.createElement('button');
button690.innerText = '277_2';
button690.addEventListener('click', function() {
    function concatenateArrayElements(arr) {
        return arr.reduce((acc, item) => {
            if (Array.isArray(item)) {
                return acc + concatenateArrayElements(item);
            } else {
                return acc + item;
            }
        }, '');
    }

    const arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
    const resultString = concatenateArrayElements(arr);
    console.log(resultString);
});
document.getElementById('buttonContainer690').appendChild(button690);

const button691 = document.createElement('button');
button691.innerText = '278_1';
button691.addEventListener('click', function() {
    function squareArrayElements(arr) {
        return arr.map(item => {
            if (Array.isArray(item)) {
                return squareArrayElements(item);
            } else {
                return item ** 2;
            }
        });
    }

    const arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
    const squaredArray = squareArrayElements(arr);
    console.log(squaredArray);
});
document.getElementById('buttonContainer691').appendChild(button691);

const button692 = document.createElement('button');
button692.innerText = '279_1';
button692.addEventListener('click', function() {
    const numbers = [4, 9, 16, 25, 36];
    const squareRoots = numbers.map(Math.sqrt);
    console.log(squareRoots);
});
document.getElementById('buttonContainer692').appendChild(button692);

const button693 = document.createElement('button');
button693.innerText = '279_2';
button693.addEventListener('click', function() {
    const strings = ['hello', 'world', 'example'];
    const modifiedStrings = strings.map(str => str + '!');
    console.log(modifiedStrings);
});
document.getElementById('buttonContainer693').appendChild(button693);

const button694 = document.createElement('button');
button694.innerText = '279_3';
button694.addEventListener('click', function() {
    const strings = ['hello', 'world', 'example'];
    const reversedStrings = strings.map(str => str.split('').reverse().join(''));
    console.log(reversedStrings);
});
document.getElementById('buttonContainer694').appendChild(button694);

const button695 = document.createElement('button');
button695.innerText = '279_4';
button695.addEventListener('click', function() {
    let arr = ['123', '456', '789'];
    let transformedArray = arr.map(str => str.split('').map(Number));
    console.log(transformedArray);
});
document.getElementById('buttonContainer695').appendChild(button695);

const button696 = document.createElement('button');
button696.innerText = '279_5';
button696.addEventListener('click', function() {
    const numbers = [1, 2, 3, 4, 5];
    const multipliedByIndex = numbers.map((num, index) => num * index);
    console.log(multipliedByIndex);
});
document.getElementById('buttonContainer696').appendChild(button696);

const button697 = document.createElement('button');
button697.innerText = '280_1';
button697.addEventListener('click', function() {
    const numbers = [1, 2, 3, 4, 5];
    let sumOfSquares = 0;

    numbers.forEach(num => {
        sumOfSquares += num ** 2;
    });

    console.log(sumOfSquares);
});
document.getElementById('buttonContainer697').appendChild(button697);

const button698 = document.createElement('button');
button698.innerText = '281_1';
button698.addEventListener('click', function() {
    const numbers = [1, -2, 3, 4, -5, 6];
    const positiveNumbers = numbers.filter(num => num > 0);
    console.log(positiveNumbers);
});
document.getElementById('buttonContainer698').appendChild(button698);

const button699 = document.createElement('button');
button699.innerText = '281_2';
button699.addEventListener('click', function() {
    const numbers = [1, -2, 3, -4, -5, 6];
    const negativeNumbers = numbers.filter(num => num < 0);
    console.log(negativeNumbers);
});
document.getElementById('buttonContainer699').appendChild(button699);

const button700 = document.createElement('button');
button700.innerText = '281_3';
button700.addEventListener('click', function() {
    const numbers = [1, 2, 3, 10, 11, 5];
    const filteredNumbers = numbers.filter(num => num > 0 && num < 10);
    console.log(filteredNumbers);
});
document.getElementById('buttonContainer700').appendChild(button700);

const button701 = document.createElement('button');
button701.innerText = '281_4';
button701.addEventListener('click', function() {
    const strings = ['hello', 'world', 'JavaScript', 'is', 'awesome'];
    const longStrings = strings.filter(str => str.length > 5);
    console.log(longStrings);
});
document.getElementById('buttonContainer701').appendChild(button701);

const button702 = document.createElement('button');
button702.innerText = '281_5';
button702.addEventListener('click', function() {
    const numbers = [1, 2, 3, 4, 5, 6];
    const filteredNumbers = numbers.filter((num, index) => num * (index + 1) < 30);
    console.log(filteredNumbers);
});
document.getElementById('buttonContainer702').appendChild(button702);

const button703 = document.createElement('button');
button703.innerText = '281_6';
button703.addEventListener('click', function() {
    const mixedArray = [1, 2, [3, 4], 5, [6, 7]];
    const flatArray = mixedArray.filter(item => !Array.isArray(item));
    console.log(flatArray);
});
document.getElementById('buttonContainer703').appendChild(button703);

const button704 = document.createElement('button');
button704.innerText = '282_1';
button704.addEventListener('click', function() {
    const numbers = [1, 2, 3, 4, 5];
    const allPositive = numbers.every(num => num > 0);
    console.log(allPositive);
});
document.getElementById('buttonContainer704').appendChild(button704);

const button705 = document.createElement('button');
button705.innerText = '282_2';
button705.addEventListener('click', function() {
    const numbers = [1, 2, 3, 4, 5];
    const allLessThan30 = numbers.every((num, index) => num * (index + 1) < 30);
    console.log(allLessThan30);
});
document.getElementById('buttonContainer705').appendChild(button705);

const button706 = document.createElement('button');
button706.innerText = '283_1';
button706.addEventListener('click', function() {
    const numbers = [-1, -2, 0, -4];
    const hasPositive = numbers.some(num => num > 0);
    console.log(hasPositive);
});
document.getElementById('buttonContainer706').appendChild(button706);

const button707 = document.createElement('button');
button707.innerText = '283_2';
button707.addEventListener('click', function() {
    const numbers = [5, 2, 3, 10];
    const hasProductGreaterThan30 = numbers.some((num, index) => num * (index + 1) > 30);
    console.log(hasProductGreaterThan30);
});
document.getElementById('buttonContainer707').appendChild(button707);

const button708 = document.createElement('button');
button708.innerText = '286_1';
button708.addEventListener('click', function() {
    let arr = [1, 2, 3, 4, 5];
    function func(num1, num2, num3, num4, num5) {
        return num1 + num2 + num3 + num4 + num5; // Функция для суммы
    }
    const sum = func(...arr); // Используем оператор spread
    console.log(sum); // Выведет: 15
});
document.getElementById('buttonContainer708').appendChild(button708);

const button709 = document.createElement('button');
button709.innerText = '287_1';
button709.addEventListener('click', function() {
    function func(n1, n2, n3, n4, n5, n6, n7, n8) {
        return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
    }

    console.log(func(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]));
});
document.getElementById('buttonContainer709').appendChild(button709);

const button710 = document.createElement('button');
button710.innerText = '288_1';
button710.addEventListener('click', function() {
    let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
    console.log(Math.min(...arr));
});
document.getElementById('buttonContainer710').appendChild(button710);

const button711 = document.createElement('button');
button711.innerText = '289_1';
button711.addEventListener('click', function() {
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    let arr = ['a', ...arr1, 'b', 'c', ...arr2];
    console.log(arr); // выведет: ['a', 1, 2, 3, 'b', 'c', 4, 5, 6]
});
document.getElementById('buttonContainer711').appendChild(button711);

const button712 = document.createElement('button');
button712.innerText = '289_2';
button712.addEventListener('click', function() {
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    let arr = ['a', ...arr1, ...arr1, 'b', 'c'];
    console.log(arr); // выведет: ['a', 1, 2, 3, 1, 2, 3, 'b', 'c']
});
document.getElementById('buttonContainer712').appendChild(button712);

const button713 = document.createElement('button');
button713.innerText = '289_3';
button713.addEventListener('click', function() {
    let arr1 = [1, 2, 3];
    let arr2 = [...arr1, 4, 5, 6];
    let arr = ['a', 'b', 'c', ...arr2];
    console.log(arr); // выведет: ['a', 'b', 'c', 1, 2, 3, 4, 5, 6]
});
document.getElementById('buttonContainer713').appendChild(button713);

const button714 = document.createElement('button');
button714.innerText = '289_4';
button714.addEventListener('click', function() {
    let arr1 = [1, 2, 3];
    let arr2 = [...arr1, 4, 5, 6];
    let arr3 = [...arr2, 7, 8, 9];
    let arr = [0, ...arr3];
    console.log(arr); // выведет: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
});
document.getElementById('buttonContainer714').appendChild(button714);

const button715 = document.createElement('button');
button715.innerText = '289_5';
button715.addEventListener('click', function() {
    let arr1 = [1, 2, 3];
    let arr2 = [...arr1];
    console.log(arr2); // выведет: [1, 2, 3]
});
document.getElementById('buttonContainer715').appendChild(button715);

const button716 = document.createElement('button');
button716.innerText = '290_1';
button716.addEventListener('click', function() {
    let arr = [...'12345'];
    console.log(arr); // вывод: ['1', '2', '3', '4', '5']
});
document.getElementById('buttonContainer716').appendChild(button716);

const button717 = document.createElement('button');
button717.innerText = '290_2';
button717.addEventListener('click', function() {
    let arr = ['a', ...'12345'];
    console.log(arr); // вывод: ['a', '1', '2', '3', '4', '5']
});
document.getElementById('buttonContainer717').appendChild(button717);

const button718 = document.createElement('button');
button718.innerText = '290_3';
button718.addEventListener('click', function() {
    let arr = [...'12345', ...'56789'];
    console.log(arr); // вывод: ['1', '2', '3', '4', '5', '5', '6', '7', '8', '9']
});
document.getElementById('buttonContainer718').appendChild(button718);

const button719 = document.createElement('button');
button719.innerText = '290_4';
button719.addEventListener('click', function() {
    let arr1 = ['a', 'b', 'c'];
    let arr2 = [...arr1, ...'12345'];
    console.log(arr2); // вывод: ['a', 'b', 'c', '1', '2', '3', '4', '5']
});
document.getElementById('buttonContainer719').appendChild(button719);

const button720 = document.createElement('button');
button720.innerText = '293_1';
button720.addEventListener('click', function() {
    function average(...numbers) {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        return sum / numbers.length || 0;
    }
    console.log(average(1, 2, 3, 4, 5));
});
document.getElementById('buttonContainer720').appendChild(button720);

const button721 = document.createElement('button');
button721.innerText = '296_1';
button721.addEventListener('click', function() {
    let arr = ['John', 'Smit', 'development', 'programmer', 2000];
    let [name, surname, department, position, salary] = arr;

    console.log(name);
    console.log(surname);
    console.log(department);
    console.log(position);
    console.log(salary);
});
document.getElementById('buttonContainer721').appendChild(button721);

const button722 = document.createElement('button');
button722.innerText = '297_1';
button722.addEventListener('click', function() {
    function func() {
        return ['John', 'Smit', 'development', 'programmer', 2000];
    }

    let arr = func();
    let [name, surname, department, position, salary] = arr;

    console.log(name);
    console.log(surname);
    console.log(department);
    console.log(position);
    console.log(salary);
});
document.getElementById('buttonContainer722').appendChild(button722);

const button723 = document.createElement('button');
button723.innerText = '298_1';
button723.addEventListener('click', function() {
    let arr = ['John', 'Smit', 'development', 'programmer', 2000];
    let [, , department, position] = arr;

    console.log(department);
    console.log(position);
});
document.getElementById('buttonContainer723').appendChild(button723);

const button724 = document.createElement('button');
button724.innerText = '300_1';
button724.addEventListener('click', function() {
    let arr = ['John', 'Smit', 'development', 'programmer', 2000];
    let [name, surname, ...info] = arr;

    console.log(name);
    console.log(surname);
    console.log(info);
});
document.getElementById('buttonContainer724').appendChild(button724);

const button725 = document.createElement('button');
button725.innerText = '301_1';
button725.addEventListener('click', function() {
    let arr = ['John', 'Smit', 'development', 'programmer'];
    let [name, surname, department, position = 'trainee'] = arr;

    console.log(name);
    console.log(surname);
    console.log(department);
    console.log(position);
});
document.getElementById('buttonContainer725').appendChild(button725);

const button726 = document.createElement('button');
button726.innerText = '302_1';
button726.addEventListener('click', function() {
    function getCurrentYear() {
        return new Date().getFullYear();
    }

    function getCurrentMonth() {
        return new Date().getMonth() + 1;
    }

    let arr = [undefined, undefined];
    let [year = getCurrentYear(), month = getCurrentMonth()] = arr;

    console.log(year);
    console.log(month);
});
document.getElementById('buttonContainer726').appendChild(button726);

const button727 = document.createElement('button');
button727.innerText = '304_1';
button727.addEventListener('click', function() {
    let options = {
        color: 'red',
        width:  400,
        height: 500,
    };

    let { color, width, height } = options;

    console.log(color);
    console.log(width);
    console.log(height);
});
document.getElementById('buttonContainer727').appendChild(button727);

const button728 = document.createElement('button');
button728.innerText = '305_1';
button728.addEventListener('click', function() {
    let options = {
        color: 'red',
        width:  400,
        height: 500,
    };

    let { color: c, width: w, height: h } = options;

    console.log(c);
    console.log(w);
    console.log(h);
});
document.getElementById('buttonContainer728').appendChild(button728);

const button729 = document.createElement('button');
button729.innerText = '306_1';
button729.addEventListener('click', function() {
    let options = {
        width:  400,
        height: 500,
    };

    let { color = 'black', width, height } = options;

    console.log(color);
    console.log(width);
    console.log(height);
});
document.getElementById('buttonContainer729').appendChild(button729);

const button730 = document.createElement('button');
button730.innerText = '307_1';
button730.addEventListener('click', function() {
    let options = {
        width:  400,
        height: 500,
    };

    let { color: с = 'black', width: w, height: h } = options;

    console.log(с);
    console.log(w);
    console.log(h);
});
document.getElementById('buttonContainer730').appendChild(button730);

const button731 = document.createElement('button');
button731.innerText = '309_1';
button731.addEventListener('click', function() {
    function func([name, surname, department, position, salary]) {
        console.log(name);
        console.log(surname);
        console.log(department);
        console.log(position);
        console.log(salary);
    }

    func(['John', 'Smit', 'development', 'programmer', 2000]);
});
document.getElementById('buttonContainer731').appendChild(button731);

const button732 = document.createElement('button');
button732.innerText = '309_2';
button732.addEventListener('click', function() {
    function func([name, surname, ...info]) {
        console.log(name);
        console.log(surname);
        console.log(info);
    }

    func(['John', 'Smit', 'development', 'programmer', 2000]);
});
document.getElementById('buttonContainer732').appendChild(button732);

const button733 = document.createElement('button');
button733.innerText = '309_3';
button733.addEventListener('click', function() {
    function func([name, surname, department, position = 'джуниор']) {
        console.log(name);
        console.log(surname);
        console.log(department);
        console.log(position);
    }

    func(['John', 'Smit', 'development']);
});
document.getElementById('buttonContainer733').appendChild(button733);

const button734 = document.createElement('button');
button734.innerText = '309_4';
button734.addEventListener('click', function() {
    function func(department, [name, surname], [year, month, day]) {
        console.log(department);
        console.log(name);
        console.log(surname);
        console.log(year);
        console.log(month);
        console.log(day);
    }

    func('development', ['John', 'Smit'], [2018, 12, 31]);
});
document.getElementById('buttonContainer734').appendChild(button734);

const button735 = document.createElement('button');
button735.innerText = '310_1';
button735.addEventListener('click', function() {
    function func({ color, width, height }) {
        console.log(color);
        console.log(width);
        console.log(height);
    }

    func({ color: 'red', width: 400, height: 500 });
});
document.getElementById('buttonContainer735').appendChild(button735);

const button736 = document.createElement('button');
button736.innerText = '310_2';
button736.addEventListener('click', function() {
    function func({ width, height, color = 'black' }) {
        console.log(width);
        console.log(height);
        console.log(color);
    }

    func({ color: 'red', width: 400, height: 500 });
});
document.getElementById('buttonContainer736').appendChild(button736);

const button737 = document.createElement('button');
button737.innerText = '311_1';
button737.addEventListener('click', function() {
    let date = new Date();
    console.log(date.getDate()); // текущий день
});
document.getElementById('buttonContainer737').appendChild(button737);

const button738 = document.createElement('button');
button738.innerText = '311_2';
button738.addEventListener('click', function() {
    let date = new Date();
    console.log(date.getMonth() + 1); // текущий месяц (прибавляем 1, чтобы получить привычный номер месяца)
});
document.getElementById('buttonContainer738').appendChild(button738);

const button739 = document.createElement('button');
button739.innerText = '311_3';
button739.addEventListener('click', function() {
    let date = new Date();
    console.log(date.getFullYear()); // текущий год
});
document.getElementById('buttonContainer739').appendChild(button739);

const button740 = document.createElement('button');
button740.innerText = '312_1';
button740.addEventListener('click', function() {
    function addZero(num) {
        if (num >= 0 && num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    }

    let date = new Date();
    console.log(
        addZero(date.getHours()) + ':' +
        addZero(date.getMinutes()) + ':' +
        addZero(date.getSeconds()) + ' ' +
        addZero(date.getDate()) + '.' +
        addZero(date.getMonth() + 1) + '.' +
        date.getFullYear()
    );
});
document.getElementById('buttonContainer740').appendChild(button740);

const button741 = document.createElement('button');
button741.innerText = '313_1';
button741.addEventListener('click', function() {
    let str = '2025-12-31';
    let res = str.split('-').reverse().join('.');

    console.log(res); // получим строку '31.12.2025'
});
document.getElementById('buttonContainer741').appendChild(button741);

const button742 = document.createElement('button');
button742.innerText = '314_1';
button742.addEventListener('click', function() {
    let date = new Date();
    console.log(date.getDay());
});
document.getElementById('buttonContainer742').appendChild(button742);

const button743 = document.createElement('button');
button743.innerText = '314_2';
button743.addEventListener('click', function() {
    let date = new Date();
    let day = date.getDay();
    if (day === 0 || day === 6) {
        console.log("Сегодня выходной день");
    } else {
        console.log("Сегодня рабочий день");
    }
});
document.getElementById('buttonContainer743').appendChild(button743);

const button744 = document.createElement('button');
button744.innerText = '314_3';
button744.addEventListener('click', function() {
    let date = new Date();
    let day = date.getDay();
    let daysUntilSunday = (7 - day) % 7;
    console.log(`Дней до ближайшего воскресенья: ${daysUntilSunday}`);
});
document.getElementById('buttonContainer744').appendChild(button744);

const button745 = document.createElement('button');
button745.innerText = '315_1';
button745.addEventListener('click', function() {
    let months = [
        'янв', 'фев', 'мар', 'апр', 'май', 'июн',
        'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
    ];
    let date = new Date();
    console.log(months[date.getMonth()]);
});
document.getElementById('buttonContainer745').appendChild(button745);

const button746 = document.createElement('button');
button746.innerText = '316_1';
button746.addEventListener('click', function() {
    let birthday = new Date('2006-09-01');
    let daysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    console.log(`В ваш день рождения был ${daysOfWeek[birthday.getDay()]}`);
});
document.getElementById('buttonContainer746').appendChild(button746);

const button747 = document.createElement('button');
button747.innerText = '317_1';
button747.addEventListener('click', function() {
    let date = new Date('2025-01-01');
    console.log(date.getTime());
});
document.getElementById('buttonContainer747').appendChild(button747);

const button748 = document.createElement('button');
button748.innerText = '318_1';
button748.addEventListener('click', function() {
    let startDate = new Date('1988-03-01');
    let endDate = new Date('2000-01-10');
    let timeDifference = endDate - startDate;
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    console.log(daysDifference);
});
document.getElementById('buttonContainer748').appendChild(button748);

const button749 = document.createElement('button');
button749.innerText = '318_2';
button749.addEventListener('click', function() {
    let birthday = new Date('2006-09-01');
    let currentDate = new Date();
    let monthsDifference = (currentDate.getFullYear() - birthday.getFullYear()) * 12 + (currentDate.getMonth() - birthday.getMonth());
    console.log(monthsDifference);
});
document.getElementById('buttonContainer749').appendChild(button749);

const button750 = document.createElement('button');
button750.innerText = '319_1';
button750.addEventListener('click', function() {
    let startDate = new Date('2000-09-01');
    let endDate = new Date('2010-02-15');
    let millisecondsDifference = endDate - startDate;
    console.log(millisecondsDifference);
});
document.getElementById('buttonContainer750').appendChild(button750);

const button751 = document.createElement('button');
button751.innerText = '319_2';
button751.addEventListener('click', function() {
    let startDate = new Date('2000-09-01');
    let endDate = new Date('2010-02-15');
    let millisecondsDifference = endDate - startDate;
    let daysDifference = Math.floor(millisecondsDifference / (1000 * 60 * 60 * 24));
    console.log(daysDifference);
});
document.getElementById('buttonContainer751').appendChild(button751);

const button752 = document.createElement('button');
button752.innerText = '319_3';
button752.addEventListener('click', function() {
    let startDate = new Date('2000-09-01');
    let endDate = new Date('2010-02-15');
    let monthsDifference = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
    console.log(monthsDifference);
});
document.getElementById('buttonContainer752').appendChild(button752);

const button753 = document.createElement('button');
button753.innerText = '319_4';
button753.addEventListener('click', function() {
    let startDate = new Date('2000-09-01');
    let endDate = new Date('2010-02-15');
    let yearsDifference = endDate.getFullYear() - startDate.getFullYear();
    console.log(yearsDifference);
});
document.getElementById('buttonContainer753').appendChild(button753);

const button754 = document.createElement('button');
button754.innerText = '320_1';
button754.addEventListener('click', function() {
    let date = new Date(2018, 1, 35);
    console.log(date);
});
document.getElementById('buttonContainer754').appendChild(button754);

const button755 = document.createElement('button');
button755.innerText = '320_2';
button755.addEventListener('click', function() {
    let date = new Date(2018, 15, 1);
    console.log(date);
});
document.getElementById('buttonContainer755').appendChild(button755);

const button756 = document.createElement('button');
button756.innerText = '320_3';
button756.addEventListener('click', function() {
    let date = new Date(2018, 3, 31);
    console.log(date);
});
document.getElementById('buttonContainer756').appendChild(button756);

const button757 = document.createElement('button');
button757.innerText = '320_4';
button757.addEventListener('click', function() {
    let date = new Date(2018, 1, 31);
    console.log(date);
});
document.getElementById('buttonContainer757').appendChild(button757);

const button758 = document.createElement('button');
button758.innerText = '320_5';
button758.addEventListener('click', function() {
    let date = new Date(2018, 12, 33);
    console.log(date);
});
document.getElementById('buttonContainer758').appendChild(button758);

const button759 = document.createElement('button');
button759.innerText = '320_6';
button759.addEventListener('click', function() {
    let date = new Date(2018, 33, 33);
    console.log(date);
});
document.getElementById('buttonContainer759').appendChild(button759);

const button760 = document.createElement('button');
button760.innerText = '320_7';
button760.addEventListener('click', function() {
    let date = new Date(2018, 5, 0);
    console.log(date);
});
document.getElementById('buttonContainer760').appendChild(button760);

const button761 = document.createElement('button');
button761.innerText = '320_8';
button761.addEventListener('click', function() {
    let date = new Date(2018, 0, 0);
    console.log(date);
});
document.getElementById('buttonContainer761').appendChild(button761);

const button762 = document.createElement('button');
button762.innerText = '320_9';
button762.addEventListener('click', function() {
    let date = new Date(2018, -12, -33);
    console.log(date);
});
document.getElementById('buttonContainer762').appendChild(button762);

const button763 = document.createElement('button');
button763.innerText = '320_10';
button763.addEventListener('click', function() {
    let date = new Date(2018, 0, 1, 23, 0, 60);
    console.log(date);
});
document.getElementById('buttonContainer763').appendChild(button763);

const button764 = document.createElement('button');
button764.innerText = '320_11';
button764.addEventListener('click', function() {
    let date = new Date(2018, 0, 1, 23, 60, 0);
    console.log(date);
});
document.getElementById('buttonContainer764').appendChild(button764);

const button765 = document.createElement('button');
button765.innerText = '320_12';
button765.addEventListener('click', function() {
    let date = new Date(2018, 0, 1, 100, 100, 100);
    console.log(date);
});
document.getElementById('buttonContainer765').appendChild(button765);

const button766 = document.createElement('button');
button766.innerText = '321_1';
button766.addEventListener('click', function() {
    function getLastDayOfMonth(year, month) {
        let date = new Date(year, month + 1, 0); // Нулевой день следующего месяца
        return date.getDate();
    }
    console.log(getLastDayOfMonth(2020, 2)); // Пример: март 2020 года
});
document.getElementById('buttonContainer766').appendChild(button766);

const button767 = document.createElement('button');
button767.innerText = '321_2';
button767.addEventListener('click', function() {
    let date = new Date(2025, 5, 0); // Последний день пятого месяца 2025 года
    console.log(date.getDay());
});
document.getElementById('buttonContainer767').appendChild(button767);

const button768 = document.createElement('button');
button768.innerText = '322_1';
button768.addEventListener('click', function() {
    function isLeap(year) {
        let date = new Date(year, 2, 0);
        return date.getDate() === 29;
    }
    console.log(isLeap(2020));
});
document.getElementById('buttonContainer768').appendChild(button768);

const button769 = document.createElement('button');
button769.innerText = '323_1';
button769.addEventListener('click', function() {
    function checkDate(year, month, day) {
        let date = new Date(year, month, day);
        return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
    }
    console.log(checkDate(2025, 0, 31)); // Пример: 31 января 2025 года
    console.log(checkDate(2025, 0, 32)); // Пример: 32 января 2025 года
});
document.getElementById('buttonContainer769').appendChild(button769);

const button770 = document.createElement('button');
button770.innerText = '324_1';
button770.addEventListener('click', function() {
    let date = new Date(new Date().getFullYear(), 11, 31); // 31 декабря текущего года
    console.log(date.getDay());
});
document.getElementById('buttonContainer770').appendChild(button770);

const button771 = document.createElement('button');
button771.innerText = '325_1';
button771.addEventListener('click', function() {
    // Вопрос касается корректировки дат, поэтому проверим, что произойдет с январем
    let date = new Date(2024, -1, 31); // Пример: месяц -1
    console.log(date); // Январь корректно превращается в предыдущий год, декабрь 2023
});
document.getElementById('buttonContainer771').appendChild(button771);

const button772 = document.createElement('button');
button772.innerText = '325_2';
button772.addEventListener('click', function() {
    let today = new Date();
    let lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    console.log(lastMonth.getDay()); // День недели месяц назад
});
document.getElementById('buttonContainer772').appendChild(button772);

const button773 = document.createElement('button');
button773.innerText = '326_1';
button773.addEventListener('click', function() {
    let now = new Date();
    let nextYearDate = new Date(now.getFullYear() + 1, 0, 21); // 21 января следующего года
    console.log(nextYearDate);
});
document.getElementById('buttonContainer773').appendChild(button773);

const button774 = document.createElement('button');
button774.innerText = '326_2';
button774.addEventListener('click', function() {
    let now = new Date();
    let nextYearDecember = new Date(now.getFullYear() + 1, 11, 31); // 31 декабря следующего года
    console.log(nextYearDecember.getDay());
});
document.getElementById('buttonContainer774').appendChild(button774);

const button775 = document.createElement('button');
button775.innerText = '326_3';
button775.addEventListener('click', function() {
    let today = new Date();
    let nextYearSameDay = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate());
    console.log(nextYearSameDay.getDay()); // День недели через год в ту же дату

    let lastYearSameDay = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
    console.log(lastYearSameDay.getDay()); // День недели год назад в ту же дату
});
document.getElementById('buttonContainer775').appendChild(button775);

const button776 = document.createElement('button');
button776.innerText = '327_1';
button776.addEventListener('click', function() {
    let date1 = new Date();
    let date2 = new Date(2015, 4, 25, 12, 59, 59);
    console.log(date1 - date2); // Разность в миллисекундах
});
document.getElementById('buttonContainer776').appendChild(button776);

const button777 = document.createElement('button');
button777.innerText = '327_2';
button777.addEventListener('click', function() {
    let start = new Date(new Date().getFullYear(), 0, 1);
    let end = new Date(new Date().getFullYear(), 8, 10);
    let differenceInMilliseconds = end - start;
    let daysDifference = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    console.log(daysDifference);
});
document.getElementById('buttonContainer777').appendChild(button777);

const button778 = document.createElement('button');
button778.innerText = '327_3';
button778.addEventListener('click', function() {
    let start = new Date(new Date().getFullYear(), new Date().getMonth(), 20);
    let end = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 10);
    let differenceInMilliseconds = end - start;
    let daysDifference = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    console.log(daysDifference);
});
document.getElementById('buttonContainer778').appendChild(button778);

const button779 = document.createElement('button');
button779.innerText = '328_1';
button779.addEventListener('click', function() {
    let now = new Date();
    let yesterdayNoon = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);
    let differenceInMilliseconds = now - yesterdayNoon;
    let hoursDifference = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));
    console.log(hoursDifference); // Количество часов между вчерашним полднем и текущим моментом
});
document.getElementById('buttonContainer779').appendChild(button779);

const button780 = document.createElement('button');
button780.innerText = '329_1';
button780.addEventListener('click', function() {
    let now = new Date();
    let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // Начало дня
    let differenceInMilliseconds = now - startOfDay;
    let hoursDifference = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));
    console.log(hoursDifference); // Количество часов между началом дня и текущим моментом
});
document.getElementById('buttonContainer780').appendChild(button780);

const button781 = document.createElement('button');
button781.innerText = '330_1';
button781.addEventListener('click', function() {
    let now = new Date();
    let endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1); // Конец дня
    let differenceInMilliseconds = endOfDay - now;
    let hoursRemaining = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));
    console.log(hoursRemaining); // Количество часов до конца дня
});
document.getElementById('buttonContainer781').appendChild(button781);

const button782 = document.createElement('button');
button782.innerText = '331_1';
button782.addEventListener('click', function() {
    let count = 0;
    let currentYear = new Date().getFullYear();

    for (let year = 2000; year <= currentYear; year++) {
        let date = new Date(year, 0, 1); // 1 января
        let dayOfWeek = date.getDay(); // Получаем день недели (0 - воскресенье, 6 - суббота)

        if (dayOfWeek === 0 || dayOfWeek === 6) { // Проверяем на выходной
            count++;
        }
    }

    console.log(count); // Количество раз, когда 1 января попадает на выходной
});
document.getElementById('buttonContainer782').appendChild(button782);

const button783 = document.createElement('button');
button783.innerText = '332_1';
button783.addEventListener('click', function() {
    let now = new Date();
    let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let differenceInSeconds = Math.floor((now - startOfDay) / 1000);
    console.log(differenceInSeconds);
});
document.getElementById('buttonContainer783').appendChild(button783);

const button784 = document.createElement('button');
button784.innerText = '332_2';
button784.addEventListener('click', function() {
    let now = new Date();
    let endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let differenceInSeconds = Math.floor((endOfDay - now) / 1000);
    console.log(differenceInSeconds);
});
document.getElementById('buttonContainer784').appendChild(button784);

const button785 = document.createElement('button');
button785.innerText = '332_3';
button785.addEventListener('click', function() {
    let now = new Date();
    let nextYear = new Date(now.getFullYear() + 1, 0, 1);
    let differenceInDays = Math.ceil((nextYear - now) / (1000 * 60 * 60 * 24));
    console.log(differenceInDays);
});
document.getElementById('buttonContainer785').appendChild(button785);

const button786 = document.createElement('button');
button786.innerText = '332_4';
button786.addEventListener('click', function() {
    let year = new Date().getFullYear();
    let count = 0;

    for (let month = 0; month < 12; month++) {
        let date = new Date(year, month, 13);
        if (date.getDay() === 5) {
            count++;
        }
    }

    console.log(count);
});
document.getElementById('buttonContainer786').appendChild(button786);

const button787 = document.createElement('button');
button787.innerText = '332_5';
button787.addEventListener('click', function() {
    let now = new Date();
    let year = now.getFullYear();
    let threeMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 3);
    console.log(threeMonthsAgo.getFullYear());
});
document.getElementById('buttonContainer787').appendChild(button787);

const button788 = document.createElement('button');
button788.innerText = '332_6';
button788.addEventListener('click', function() {
    let now = new Date();
    let lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    console.log(lastDayOfMonth.getDay());
});
document.getElementById('buttonContainer788').appendChild(button788);

const button789 = document.createElement('button');
button789.innerText = '332_7';
button789.addEventListener('click', function() {
    let now = new Date();
    let year = now.getFullYear();
    let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    console.log(isLeap);
});
document.getElementById('buttonContainer789').appendChild(button789);

const button790 = document.createElement('button');
button790.innerText = '332_8';
button790.addEventListener('click', function() {
    let year = new Date().getFullYear();
    while (true) {
        year--;
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            console.log(year);
            break;
        }
    }
});
document.getElementById('buttonContainer790').appendChild(button790);

const button791 = document.createElement('button');
button791.innerText = '332_9';
button791.addEventListener('click', function() {
    let year = new Date().getFullYear();
    while (true) {
        year++;
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            console.log(year);
            break;
        }
    }
});
document.getElementById('buttonContainer791').appendChild(button791);

const button792 = document.createElement('button');
button792.innerText = '333_1';
button792.addEventListener('click', function() {
    let date1 = new Date('2020-11-31');
    let date2 = new Date('2020-12-01');

    if (date1 > date2) {
        console.log('Дата 1 больше');
    } else if (date1 < date2) {
        console.log('Дата 2 больше');
    } else {
        console.log('Даты равны');
    }
});
document.getElementById('buttonContainer792').appendChild(button792);

const button793 = document.createElement('button');
button793.innerText = '334_1';
button793.addEventListener('click', function() {
    let date1 = new Date('09-21');
    let date2 = new Date('09-23');

    if (date1 > date2) {
        console.log('Дата 1 больше');
    } else if (date1 < date2) {
        console.log('Дата 2 больше');
    } else {
        console.log('Даты равны');
    }
});
document.getElementById('buttonContainer793').appendChild(button793);

const button794 = document.createElement('button');
button794.innerText = '335_1';
button794.addEventListener('click', function() {
    const month = 10;
    const day = 14;

    let zodiacSign;

    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        zodiacSign = 'Овен';
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        zodiacSign = 'Телец';
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        zodiacSign = 'Близнецы';
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        zodiacSign = 'Рак';
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        zodiacSign = 'Лев';
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        zodiacSign = 'Дева';
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        zodiacSign = 'Весы';
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        zodiacSign = 'Скорпион';
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        zodiacSign = 'Стрелец';
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        zodiacSign = 'Козерог';
    } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        zodiacSign = 'Водолей';
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        zodiacSign = 'Рыбы';
    }

    console.log('Знак Зодиака: ' + zodiacSign);
});
document.getElementById('buttonContainer794').appendChild(button794);

const button795 = document.createElement('button');
button795.innerText = '336_1';
button795.addEventListener('click', function() {
    const now = new Date();
    const noon = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);

    if (now > noon) {
        console.log('Полдень уже прошёл.');
    } else {
        console.log('Полдень ещё не настал.');
    }
});
document.getElementById('buttonContainer795').appendChild(button795);

const button796 = document.createElement('button');
button796.innerText = '336_2';
button796.addEventListener('click', function() {
    const now = new Date();
    const fifteenth = new Date(now.getFullYear(), now.getMonth(), 15);

    if (now > fifteenth) {
        console.log('Половина месяца уже прошла.');
    } else {
        console.log('Половина месяца ещё не прошла.');
    }
});
document.getElementById('buttonContainer796').appendChild(button796);

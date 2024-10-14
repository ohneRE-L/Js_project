"use strict";
const button627 = document.createElement('button');
button627.innerText = '244_1';
button627.addEventListener('click', function() {
    function test(arr) {
        return arr.map(function(num) { return num * num * num; });
    }
});
document.getElementById('buttonContainer627').appendChild(button627);

const button628 = document.createElement('button');
button628.innerText = '244_2';
button628.addEventListener('click', function() {
    function test(arr) {
        return arr.map(function(num) { return num * num * num; });
    }

    const numbers = [1, 2, 3, 4, 5];
    const result = test(numbers);
    console.log(result);
});
document.getElementById('buttonContainer628').appendChild(button628);

const button629 = document.createElement('button');
button629.innerText = '245_1';
button629.addEventListener('click', function() {
    function square(num) {
        return num * num;
    }

    function cube(num) {
        return num * num * num;
    }

    function func(a, b) {
        return square(a) + cube(b);
    }

    const result = func(2, 3);
    console.log(result);
});
document.getElementById('buttonContainer629').appendChild(button629);

const button630 = document.createElement('button');
button630.innerText = '246_1';
button630.addEventListener('click', function() {
    // Вывод: 1
    console.log(1);
});
document.getElementById('buttonContainer630').appendChild(button630);

const button631 = document.createElement('button');
button631.innerText = '246_2';
button631.addEventListener('click', function() {
    // Вывод: ничего не будет выведено
    console.log("ничего не будет выведено");
});
document.getElementById('buttonContainer631').appendChild(button631);

const button632 = document.createElement('button');
button632.innerText = '246_3';
button632.addEventListener('click', function() {
    // Вывод: 1
    console.log(1);
});
document.getElementById('buttonContainer632').appendChild(button632);

const button633 = document.createElement('button');
button633.innerText = '246_4';
button633.addEventListener('click', function() {
    // Вывод: 1, 2
    console.log(1);
    console.log(2);
});
document.getElementById('buttonContainer633').appendChild(button633);

const button634 = document.createElement('button');
button634.innerText = '247_1';
button634.addEventListener('click', function() {
    // Вывод: 3
    console.log(3);
});
document.getElementById('buttonContainer634').appendChild(button634);

const button635 = document.createElement('button');
button635.innerText = '247_2';
button635.addEventListener('click', function() {
    // Вывод: 4
    console.log(4);
});
document.getElementById('buttonContainer635').appendChild(button635);

const button636 = document.createElement('button');
button636.innerText = '248_1';
button636.addEventListener('click', function() {
    // Вывод: 1
    // Код передаст num в функцию `func`, которая выведет значение localNum (1).
    console.log(1);
});
document.getElementById('buttonContainer636').appendChild(button636);

const button637 = document.createElement('button');
button637.innerText = '248_2';
button637.addEventListener('click', function() {
    // Вывод: 2
    // Код передаст num + 1 в функцию `func`, которая выведет значение localNum (2).
    console.log(2);
});
document.getElementById('buttonContainer637').appendChild(button637);

const button638 = document.createElement('button');
button638.innerText = '248_3';
button638.addEventListener('click', function() {
    // Вывод: 1
    // Код передаст num + 1 в функцию `func`, но выведет num (1), так как num не изменился.
    console.log(1);
});
document.getElementById('buttonContainer638').appendChild(button638);

const button639 = document.createElement('button');
button639.innerText = '248_4';
button639.addEventListener('click', function() {
    // Вывод: 1
    // Код передаст num в функцию `func`, но localNum внутри `func` изменится на 2 только внутри этой функции.
    console.log(1);
});
document.getElementById('buttonContainer639').appendChild(button639);

const button640 = document.createElement('button');
button640.innerText = '248_5';
button640.addEventListener('click', function() {
    // Ошибка: localNum не определен
    // Код вызовет ошибку, так как localNum не доступен вне функции `func`.
    console.log(localNum);
});
document.getElementById('buttonContainer640').appendChild(button640);

const button641 = document.createElement('button');
button641.innerText = '248_6';
button641.addEventListener('click', function() {
    // Вывод: 2
    // Код передаст num в функцию `func`, которая изменит num на 2. Затем мы выведем num (2).
    console.log(2);
});
document.getElementById('buttonContainer641').appendChild(button641);

const button642 = document.createElement('button');
button642.innerText = '249_1';
button642.addEventListener('click', function() {
    // Вывод: 1
    // Код вызовет функцию `func`, которая выведет значение num (1).
    console.log(1);
});
document.getElementById('buttonContainer642').appendChild(button642);

const button643 = document.createElement('button');
button643.innerText = '249_2';
button643.addEventListener('click', function() {
    // Вывод: 1
    // Код вызовет функцию `func`, которая ничего не выведет, так как num не изменится в функции `test`.
    console.log(1);
});
document.getElementById('buttonContainer643').appendChild(button643);

const button644 = document.createElement('button');
button644.innerText = '249_3';
button644.addEventListener('click', function() {
    // Вывод: 2
    // Код изменит num на 2, а затем вызовет функцию `func`, которая выведет это значение.
    console.log(2);
});
document.getElementById('buttonContainer644').appendChild(button644);

const button645 = document.createElement('button');
button645.innerText = '249_4';
button645.addEventListener('click', function() {
    // Вывод: 1
    // Код вызовет функцию `func`, которая выведет значение num (1), а затем изменит его на 2, но это изменение произойдет после.
    console.log(1);
});
document.getElementById('buttonContainer645').appendChild(button645);

const button646 = document.createElement('button');
button646.innerText = '250_1';
button646.addEventListener('click', function() {
    function func1() {
        return function() {
            return 1;
        };
    }
    function func2() {
        return function() {
            return 2;
        };
    }
    const sum = func1()() + func2()();
    console.log(sum); // Вывод: 3
});
document.getElementById('buttonContainer646').appendChild(button646);

const button647 = document.createElement('button');
button647.innerText = '251_1';
button647.addEventListener('click', function() {
    function func() {
        return function() {
            return function() {
                return function() {
                    return function() {
                        return '!';
                    };
                };
            };
        };
    }
    console.log(func()()()()());
});
document.getElementById('buttonContainer647').appendChild(button647);

const button648 = document.createElement('button');
button648.innerText = '252_1';
button648.addEventListener('click', function() {
    function func(a) {
        return function(b) {
            return function(c) {
                return a + b + c;
            };
        };
    }
    console.log(func(2)(3)(4)); // Вывод: 9
});
document.getElementById('buttonContainer648').appendChild(button648);

const button649 = document.createElement('button');
button649.innerText = '252_2';
button649.addEventListener('click', function() {
    function func(a) {
        return function(b) {
            return function(c) {
                return function(d) {
                    return function() {
                        return [a, b, c, d];
                    };
                };
            };
        };
    }
    console.log(func(2)(3)(4)(5)()); // Вывод: [2, 3, 4, 5]
});
document.getElementById('buttonContainer649').appendChild(button649);

const button650 = document.createElement('button');
button650.innerText = '253_1';
button650.addEventListener('click', function() {
    function each(arr, func) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = func(arr[i]);
        }
        return arr;
    }

    const numbers = [1, 2, 3, 4];
    const doubled = each(numbers, function(num) {
        return num * 2;
    });
    console.log(doubled);
});
document.getElementById('buttonContainer650').appendChild(button650);

const button651 = document.createElement('button');
button651.innerText = '253_2';
button651.addEventListener('click', function() {
    function each(arr, func) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = func(arr[i]);
        }
        return arr;
    }

    const strings = ['abc', 'def', 'ghi'];
    const reversed = each(strings, function(str) {
        return str.split('').reverse().join('');
    });
    console.log(reversed);
});
document.getElementById('buttonContainer651').appendChild(button651);

const button652 = document.createElement('button');
button652.innerText = '253_3';
button652.addEventListener('click', function() {
    function each(arr, func) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = func(arr[i]);
        }
        return arr;
    }

    const strings = ['apple', 'banana', 'cherry'];
    const capitalized = each(strings, function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    });
    console.log(capitalized);
});
document.getElementById('buttonContainer652').appendChild(button652);

const button653 = document.createElement('button');
button653.innerText = '254_1';
button653.addEventListener('click', function() {
    function cube(num) {
        return num ** 3;
    }

    function each(arr, func) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = func(arr[i]);
        }
        return arr;
    }

    const result = each([1, 2, 3, 4, 5], cube);
    console.log(result);
});
document.getElementById('buttonContainer653').appendChild(button653);

const button654 = document.createElement('button');
button654.innerText = '256_1';
button654.addEventListener('click', function() {
    function filter(arr, callback) {
        let res = [];
        for (let elem of arr) {
            if (callback(elem) === true) {
                res.push(elem);
            }
        }
        return res;
    }

    let result = filter([1, 2, 3, 4, 5], elem => elem > 0);
    console.log(result);
});
document.getElementById('buttonContainer654').appendChild(button654);

const button655 = document.createElement('button');
button655.innerText = '259_1';
button655.addEventListener('click', function() {
    function test() {
        let num1 = 1;
        let num2 = 2;
        return function() {
            return num1 + num2;
        };
    }
    let func = test();
    console.log(func()); // Вывод: 3
});
document.getElementById('buttonContainer655').appendChild(button655);

const button656 = document.createElement('button');
button656.innerText = '259_2';
button656.addEventListener('click', function() {
    function test() {
        let num1 = 1;
        let num2 = 2;
        return function() {
            return num1 + num2;
        };
    }
    console.log(test()()); // Вывод: 3
});
document.getElementById('buttonContainer656').appendChild(button656);

const button657 = document.createElement('button');
button657.innerText = '259_3';
button657.addEventListener('click', function() {
    function test() {
        let num1 = 1;
        return function() {
            return num1 + num2;
        };
    }
    let num2 = 2;
    let func = test();
    console.log(func()); // Вывод: 3
});
document.getElementById('buttonContainer657').appendChild(button657);

const button658 = document.createElement('button');
button658.innerText = '259_4';
button658.addEventListener('click', function() {
    function test() {
        let num = 1;
        return function() {
            return num;
        };
    }
    let num = 2;
    let func = test();
    console.log(func()); // Вывод: 1
});
document.getElementById('buttonContainer658').appendChild(button658);

const button659 = document.createElement('button');
button659.innerText = '261_1';
button659.addEventListener('click', function() {
    function test() {
        let num = 1;
        return function() {
            console.log(num);
            num++;
        }
    }
    let func = test();
    func(); // вызов 1
    func(); // вызов 2
});
document.getElementById('buttonContainer659').appendChild(button659);

const button660 = document.createElement('button');
button660.innerText = '261_2';
button660.addEventListener('click', function() {
    function test() {
        let num = 10;
        return function() {
            console.log(num);
            num--;
        }
    }
    let func = test();
    func(); // вызов 1
    func(); // вызов 2
});
document.getElementById('buttonContainer660').appendChild(button660);

const button661 = document.createElement('button');
button661.innerText = '261_3';
button661.addEventListener('click', function() {
    function test() {
        let num = 10;
        return function() {
            if (num >= 0) {
                console.log(num);
                num--;
            } else {
                console.log('Отсчет окончен');
            }
        }
    }
    let func = test();
    func(); // вызов 1
    func(); // вызов 2
});
document.getElementById('buttonContainer661').appendChild(button661);

const button662 = document.createElement('button');
button662.innerText = '262_1';
button662.addEventListener('click', function() {
    function func() {
        let num = 0;
        return function() {
            console.log(num);
            num++;
        };
    }
    func()(); // вывод: 0
    func()(); // вывод: 0
    func()(); // вывод: 0
});
document.getElementById('buttonContainer662').appendChild(button662);

const button663 = document.createElement('button');
button663.innerText = '262_2';
button663.addEventListener('click', function() {
    function func() {
        let num = 0;
        return function() {
            console.log(num);
            num++;
        };
    }
    let test = func;
    test()(); // вывод: 0
    test()(); // вывод: 0
});
document.getElementById('buttonContainer663').appendChild(button663);

const button664 = document.createElement('button');
button664.innerText = '263_1';
button664.addEventListener('click', function() {
    let counter = 0;

    function test() {
        return function() {
            console.log(counter);
            counter++;
        };
    }

    let func = test;

    let func1 = func();
    let func2 = func();
    func1(); // вывод: 0
    func2(); // вывод: 0
    func1(); // вывод: 1
    func2(); // вывод: 1
});
document.getElementById('buttonContainer664').appendChild(button664);

const button665 = document.createElement('button');
button665.innerText = '263_2';
button665.addEventListener('click', function() {
    function test() {
        let counter = 0;

        return function() {
            return function() {
                console.log(counter);
                counter++;
            };
        };
    }

    let func = test()();

    let func1 = func;
    let func2 = func;
    func1(); // вывод: 0
    func2(); // вывод: 1
    func1(); // вывод: 1
    func2(); // вывод: 2
});
document.getElementById('buttonContainer665').appendChild(button665);

const button666 = document.createElement('button');
button666.innerText = '263_3';
button666.addEventListener('click', function() {
    function test() {
        let counter = 0;

        return function() {
            return function() {
                console.log(counter);
                counter++;
            };
        };
    }

    let func = test();

    let func1 = func();
    let func2 = func();
    func1(); // вывод: 0
    func2(); // вывод: 0
    func1(); // вывод: 1
    func2(); // вывод: 1
});
document.getElementById('buttonContainer666').appendChild(button666);

const button667 = document.createElement('button');
button667.innerText = '264_1';
button667.addEventListener('click', function() {
    // Вывод в консоль:
    // !
    !function() {
        console.log('!');
    }();
});
document.getElementById('buttonContainer667').appendChild(button667);

const button668 = document.createElement('button');
button668.innerText = '264_2';
button668.addEventListener('click', function() {
    // Вывод в консоль:
    // Ошибка (Uncaught SyntaxError: Function statements require a function name)
    // function() {
    //     console.log('!');
    // }();
});
document.getElementById('buttonContainer668').appendChild(button668);

const button669 = document.createElement('button');
button669.innerText = '265_1';
button669.addEventListener('click', function() {
    // Вывод в консоль:
    // !
    let result = function() {
        return '!';
    }();
    console.log(result);
});
document.getElementById('buttonContainer669').appendChild(button669);

const button670 = document.createElement('button');
button670.innerText = '265_2';
button670.addEventListener('click', function() {
    // Вывод в консоль:
    // function() { return '!'; }
    let result = function() {
        return '!';
    };
    console.log(result);
});
document.getElementById('buttonContainer670').appendChild(button670);

const button671 = document.createElement('button');
button671.innerText = '265_3';
button671.addEventListener('click', function() {
    // Вывод в консоль:
    // !
    let result = function() {
        return '!';
    };
    console.log(result());
});
document.getElementById('buttonContainer671').appendChild(button671);

const button672 = document.createElement('button');
button672.innerText = '266_1';
button672.addEventListener('click', function() {
    // Вывод в консоль:
    // 3
    let result = function() { return 1; }() + function() { return 2; }();
    console.log(result);
});
document.getElementById('buttonContainer672').appendChild(button672);

const button673 = document.createElement('button');
button673.innerText = '267_1';
button673.addEventListener('click', function() {
    // Вывод в консоль:
    // !
    let result = (function() {
        return '!';
    }());
    console.log(result);
});
document.getElementById('buttonContainer673').appendChild(button673);

const button674 = document.createElement('button');
button674.innerText = '267_2';
button674.addEventListener('click', function() {
    // Вывод в консоль:
    // !
    let result = (function() {
        return '!';
    })();
    console.log(result);
});
document.getElementById('buttonContainer674').appendChild(button674);

const button675 = document.createElement('button');
button675.innerText = '267_3';
button675.addEventListener('click', function() {
    // Вывод в консоль:
    // function() { return '!'; }
    let result = (function() {
        return '!';
    });
    console.log(result);
});
document.getElementById('buttonContainer675').appendChild(button675);

const button676 = document.createElement('button');
button676.innerText = '267_4';
button676.addEventListener('click', function() {
    // Вывод в консоль:
    // function() { return '!'; }
    let result = (function() {
        return '!';
    });
    console.log(result());
});
document.getElementById('buttonContainer676').appendChild(button676);

const button677 = document.createElement('button');
button677.innerText = '268_1';
button677.addEventListener('click', function() {
    // Вывод в консоль:
    // 3
    (function(num1, num2) {
        console.log(num1 + num2);
    })(1, 2);
});
document.getElementById('buttonContainer677').appendChild(button677);

const button678 = document.createElement('button');
button678.innerText = '269_1';
button678.addEventListener('click', function() {
    (function() {
        return function() {
            return function() {
                alert('!');
            };
        };
    })()()();
});
document.getElementById('buttonContainer678').appendChild(button678);

const button679 = document.createElement('button');
button679.innerText = '269_2';
button679.addEventListener('click', function() {
    (function(num1) {
        return function(num2) {
            console.log(num1 + num2);
        };
    })(1)(2);
});
document.getElementById('buttonContainer679').appendChild(button679);

const button680 = document.createElement('button');
button680.innerText = '269_3';
button680.addEventListener('click', function() {
    (function(num1) {
        return function(num2) {
            return function(num3) {
                console.log(num1 + num2 + num3);
            };
        };
    })(1)(2)(3);
});
document.getElementById('buttonContainer680').appendChild(button680);

const button681 = document.createElement('button');
button681.innerText = '271_1';
button681.addEventListener('click', function() {
    // Вывод в консоль:
    // 1
    let str = 'str';

    (function() {
        console.log(1);
    })();
});
document.getElementById('buttonContainer681').appendChild(button681);

const button682 = document.createElement('button');
button682.innerText = '271_2';
button682.addEventListener('click', function() {
    // Вывод в консоль:
    // 1
    let str = 'str';

    (function() {
        console.log(1);
    })();
});
document.getElementById('buttonContainer682').appendChild(button682);

const button683 = document.createElement('button');
button683.innerText = '272_1';
button683.addEventListener('click', function() {
    let func = (function() {
        let num = 1;

        return function() {
            console.log(num);
            num++;
        };
    })();

    func(); // выведет 1
    func(); // выведет 2
    func(); // выведет 3
    func(); // выведет 4
    func(); // выведет 5
});
document.getElementById('buttonContainer683').appendChild(button683);

const button684 = document.createElement('button');
button684.innerText = '272_2';
button684.addEventListener('click', function() {
    // Счетчик, сбрасывающийся после 5
    let func = (function() {
        let num = 1;

        return function() {
            console.log(num);
            num++;
            if (num > 5) num = 1; // сброс до 1
        };
    })();

    func(); // выведет 1
    func(); // выведет 2
    func(); // выведет 3
    func(); // выведет 4
    func(); // выведет 5
    func(); // выведет 1
    func(); // выведет 2
});
document.getElementById('buttonContainer684').appendChild(button684);

const button685 = document.createElement('button');
button685.innerText = '274_1';
button685.addEventListener('click', function() {
    function printArray(arr, index = 0) {
        if (index < arr.length) {
            console.log(arr[index]);
            printArray(arr, index + 1);
        }
    }

    let arr = [1, 2, 3, 4, 5];
    printArray(arr);
});
document.getElementById('buttonContainer685').appendChild(button685);

const button686 = document.createElement('button');
button686.innerText = '275_1';
button686.addEventListener('click', function() {
    function sumOfSquares(arr, index = 0) {
        if (index >= arr.length) return 0;
        return arr[index] ** 2 + sumOfSquares(arr, index + 1);
    }

    let arr = [1, 2, 3, 4, 5];
    const result = sumOfSquares(arr);
    console.log(result);
});
document.getElementById('buttonContainer686').appendChild(button686);

const button687 = document.createElement('button');
button687.innerText = '276_1';
button687.addEventListener('click', function() {
    // Рекурсивная функция для вывода всех примитивных элементов объекта
    function printPrimitiveElements(obj) {
        for (let key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                printPrimitiveElements(obj[key]); // Рекурсивный вызов для вложенных объектов
            } else {
                console.log(obj[key]); // Вывод примитивных значений
            }
        }
    }

    const obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
    printPrimitiveElements(obj); // Выведет: 1, 2, 3, 4, 5, 6, 7, 8, 9
});
document.getElementById('buttonContainer687').appendChild(button687);


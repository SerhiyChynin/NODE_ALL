//Установите Node.js с сайта программы. Повторите действия урока.

console.log('Если вы это видите - то сделали!!!');

// Task 2. Напишите функцию f2, которая принимает 2 числа и выводит и возвращает максимальное из них. Для этого используйте Math.

const f2 = (a, b) => {
    if (a > b) {
        console.log('a: ' + a);
        return a;
    }
    else {
        console.log('b: ' + b);
        return b
    }
        
}
a = Math.round((Math.random() * 10));
b = Math.round((Math.random() * 10));
f2(a, b)

// Task 3. Напишите функцию f3, которая выводит и возвращает случайное число от 0 до 10.

const f3 = (a) => {
    console.log(a);
    return a;
}
f3(a)
// Task 4. Напишите функцию f4, которая выводит и возвращает случайное число от a до b.

const f4 = (a, b) => {
    let res = Math.floor(Math.random() * (a - b + 1)) + b;
    console.log(res);
    return res;
}
f4(a,b)

// Тask 5. Напишите фукнцию f5, которая выводит и возвращает текущую дату в формате год-месяц-день. Причем делает это с ведущим нулем.
// Пример 2020-03-22

const f5 = () => {
    let data = Date.now();
    console.log(data);
    return data;
}
f5()

//Task 6. Напишите функцию f6, которая проверяет является ли введенный год високосным. Возвращает true если да, и false если нет. 

const f6 = (year) => {

}
console.log('Hello');

let a;
a = '9';
console.log(a + 10);

function test() {
    console.log('1111111');
}
test();

const b = () => {
    console.log('Hello');
}

b();

const c = [1, 2, 3, 4, 5, 6];
console.log(c[3]);

// Home work
function a1(a, b) {
    if (a > b) return a;
    return b;
}
console.log(a1(10, 21));

function a2(min, max) {
     return Math.floor(Math.random() * (max - min)) + min;
}
console.log(a2(0,10));
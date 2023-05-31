const arg = process.argv;
// console.log(arg[2]);
const a = +arg[2];
const b = +arg[3];
console.log(typeof a)
//
// if (a > b) {
//     console.log(a);
// } else {
//     console.log(b)
// }
let c = (a > b) ? a : b;
console.log(c)

let out = ' ';
for (let i = 5; i >= 0; i--) {
    out += i + ' ';
}
console.log(out);

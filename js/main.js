// 1, 2.
let a = [1998, "lorem", 123, true, "ipsum", 523, "expo"];

console.log(`Длина массива: ${a.length}`);
console.log(`Первый элемент массива: ${a[0]}`);
console.log(`Последний элемент массива: ${a[a.length - 1]}`);

// 3, 4.
let em = [];
em.push("apple", "orange", "banana");

em.unshift("cherry", "grapes");

em.splice(2, 0, "kiwi", "pineapple");

let otherFruits = ["papaya", "coconut"];
em = em.concat(otherFruits);

console.log(em);

// 5.
em.shift();
em.pop();
em.pop();
console.log(em);

// 6.
let number = [1, 3, 5, 7, 9];
number.forEach(function (n) {
  console.log(n + 1);
});

// 7.
number.splice(2, 1, 100);
console.log(number);

// 1.
const user = [
{ name: "temo", age: 25 },
{ name: "lasha", age: 21 },
{ name: "ana", age: 28 },
];

const findSmallestAge = (users) => {
const smallestAge = Math.min(...users.map((user) => user.age));
const smallestAgePerson = users.find((user) => user.age === smallestAge);

return `The person with the smallest age is ${smallestAgePerson.name} with age ${smallestAge}`;
};

console.log(findSmallestAge(user));



// 2.
const originalUser = { name: "Alex", age: 21, city: "Tbilisi" };
const copyUser = originalUser;
copyUser.name = "gio";
copyUser.age = 27;
copyUser.city = "batumi";

console.log(originalUser, copyUser);

const originalUser2 = { name: "Alex", age: 21, city: "Tbilisi" };
const copyUser2 = { ...originalUser };
copyUser.name = "gio";
copyUser.age = 27;
copyUser.city = "batumi";

console.log(originalUser2, copyUser2);


// 3.
function randomNumber() {
  return parseInt(Math.random() * 6) + 1;
}

let rollA = randomNumber();
let rollB = randomNumber();
while ((rollA !== 3) & (rollB !== 3)) {
rollA = randomNumber();
rollB = randomNumber();

console.log(`მოთამაშე A გააგორა: ${rollA}`);
console.log(`მოთამაშე B გააგორა: ${rollB}`);

if (rollA === 3) {
    console.log(`მოთამაშე A გააგორა 6 და გამარჯვებულია! `);
} else if (rollB === 3) {
    console.log(`მმოთამაშე B გააგორა 6 და გამარჯვებულია! `);
}
}
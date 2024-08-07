"use strict";
function add(num1, num2) {
    return num1 + num2;
}
const add2 = (num3, num4) => {
    return num3 + num4;
};
const arr = [1, 4, 5, 7];
const newArr = arr.map((elem) => console.log(elem * elem));
const person = {
    name: "farok",
    balance: 10,
    AddBalance(money) {
        return this.balance + money;
    },
};
const myFriends = ["chandler", "joey", "tessa"];
const newFriends = ["monica", "rachel"];
myFriends.push(...newFriends);
console.log(myFriends);
// rest parameter
const greetFriends = (...friends) => {
    friends.forEach((friend) => console.log(`Hi ${friend}`));
};
greetFriends("Hasem", "kashem", "abol", "karim", "jonto");
// array and object destructuring

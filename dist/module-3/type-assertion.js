"use strict";
let em;
em = "Farok Hossain";
console.log(em.length);
const kgToGram = (param) => {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `The converted result is ${value}`;
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return value;
    }
};
const result = kgToGram(2);
const result21 = kgToGram("3");
console.log(result);
console.log(result21);
try {
}
catch (error) {
    console.log(error.message);
}

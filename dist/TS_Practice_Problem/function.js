"use strict";
const arrayOfNumbers = (numb1, numb2) => {
    const set2 = new Set(numb2);
    console.log("hi", set2);
    const commonElements = numb1.filter((element) => set2.has(element));
    return commonElements;
};
const resu = arrayOfNumbers([1, 3, 4, 5, 6], [1, 2, 4, 7, 0, 9]);
console.log(resu);

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const makePromise = () => {
    return new Promise((resolve, reject) => {
        const data = "Data is fetching";
        if (data) {
            resolve(data);
        }
        else {
            reject("Failed to fetched");
        }
    });
};
const res = makePromise();
console.log(res);
const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
    return yield res.json();
});
// const ress = getTodo();
// console.log(ress);
const getTodoData = () => __awaiter(void 0, void 0, void 0, function* () {
    const resulttt = yield getTodo();
    console.log(resulttt);
});
getTodoData();

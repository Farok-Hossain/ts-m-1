"use strict";
class Counter {
    constructor(counter) {
        this.counter = counter;
    }
    increment() {
        return (this.counter = this.counter + 1);
    }
    decrement() {
        return (this.counter = this.counter - 1);
    }
}
const i = new Counter(5).increment();
const de = new Counter(5).decrement();
console.log(i, de);
// static
class Counter2 {
    static increment2() {
        return (Counter2.counter = Counter2.counter + 1);
    }
    static decrement2() {
        return (Counter2.counter = Counter2.counter - 1);
    }
}
Counter2.counter = 0;
const i2 = Counter2.increment2();
const i3 = Counter2.increment2();
console.log(Counter2.decrement2());
console.log(i3);
console.log(i2);

function add(num1: number, num2: number): number {
  return num1 + num2;
}

const add2 = (num3: number, num4: number): number => {
  return num3 + num4;
};

const arr = [1, 4, 5, 7];
const newArr = arr.map((elem: number) => console.log(elem * elem));

const person: {
  name: string;
  balance: number;
  AddBalance(money: number): number;
} = {
  name: "farok",
  balance: 10,
  AddBalance(money: number) {
    return this.balance + money;
  },
};

const myFriends: string[] = ["chandler", "joey", "tessa"];
const newFriends: string[] = ["monica", "rachel"];

myFriends.push(...newFriends);
console.log(myFriends);

// rest parameter
const greetFriends = (...friends: string[]): void => {
  friends.forEach((friend) => console.log(`Hi ${friend}`));
};

greetFriends("Hasem", "kashem", "abol", "karim", "jonto");

// array and object destructuring

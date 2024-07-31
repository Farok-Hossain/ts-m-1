type User = {
  name: string;
  age: number;
};

type extendedUser = User & {
  role: string;
};

interface IUser {
  name: string;
  age: number;
}

const userWithType: User = {
  name: "TypeAlias",
  age: 12,
};
console.log(userWithType.name);

const userWithInterface: IUser = {
  name: "Interface",
  age: 13,
};
console.log(userWithInterface.name);

interface IExtendedUser extends IUser {
  role: string;
}

const userWithInterfaceExtends: IExtendedUser = {
  name: "Extends",
  age: 22,
  role: "admin",
};
console.log(userWithInterfaceExtends.name, userWithInterfaceExtends.role);

type NumberType = (number11: number, number12: number) => number;

interface NumberInterface {
  (number11: number, number12: number): number;
}

// function a type alias use kora valo cause ata besi clean
const addNumbers: NumberType = (number11, number12) => {
  return number11 + number12;
};
const addNumbers2: NumberInterface = (number11, number12) => {
  return number11 + number12;
};

const re = addNumbers(12, 11);
console.log(re);
const re2 = addNumbers2(12, 14);
console.log(re2);

type rollNumbersType = number[];
interface rollNumbersInterface {
  [index: number]: number;
}

const rollNumbers: rollNumbersInterface = [1, 2, 2, 3];

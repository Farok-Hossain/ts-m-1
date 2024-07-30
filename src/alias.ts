type CrushType = {
  name: string;
  age?: number;
  profession: string;
  address: string;
};

const crush1: CrushType = {
  name: "Tessa",
  age: 23,
  profession: "react developer",
  address: "usa",
};

const crush2: CrushType = {
  name: "Joye",
  profession: "next.js developer",
  address: "australia",
};

type CourseType = string;

const courseNames: CourseType = "Next Level Web Development";

const adds = (n1: number, n2: number): number => {
  return n1 + n2;
};

const sum = adds(12, 23);
console.log(sum);

type OperationType = (x: number, y: number) => number;

const calculate = (nm1: number, nm2: number, operation: OperationType) => {
  return operation(nm1, nm2);
};

const result1 = calculate(11, 13, (x, y) => x + y);
const result2 = calculate(11, 13, (x, y) => x - y);
const result3 = calculate(11, 13, (x, y) => x * y);
console.log(`result1: ${result1}\nresult2: ${result2}\nresult3: ${result3}`);

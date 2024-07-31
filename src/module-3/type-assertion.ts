let em: any;

em = "Farok Hossain";

console.log((em as string).length);

const kgToGram = (param: string | number): string | number | undefined => {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `The converted result is ${value}`;
  }
  if (typeof param === "number") {
    const value = param * 1000;
    return value;
  }
};

const result = kgToGram(2) as number;
const result21 = kgToGram("3") as string;
console.log(result);
console.log(result21);

type CustonErrorType = {
  message: string;
};

try {
} catch (error) {
  console.log((error as CustonErrorType).message);
}

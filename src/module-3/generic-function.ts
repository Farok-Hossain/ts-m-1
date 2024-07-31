const createArray = (param: string): string[] => {
  return [param];
};

const createArray1 = <T>(param: T): T[] => {
  return [param];
};

const resultt = createArray1<string>("Bangladesh");
const resultt2 = createArray1<number>(2334);
const resultt3 = createArray1<boolean>(false);

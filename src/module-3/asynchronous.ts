const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data is fetching";
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetched");
    }
  });
};

const res = makePromise();
console.log(res);

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await res.json();
};

// const ress = getTodo();
// console.log(ress);

const getTodoData = async (): Promise<void> => {
  const resulttt = await getTodo();
  console.log(resulttt);
};

getTodoData();

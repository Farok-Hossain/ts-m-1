const searchName = (value: string | null) => {
  if (value === null) {
    console.log("There is nothing to search");
  } else {
    console.log("Searching");
  }
};

searchName(null);

// unknown type
const getMyCarSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const convertedSpeed = (speed * 1000) / 3600;
    console.log(`My car speed is ${convertedSpeed}`);
  } else if (typeof speed === "string") {
    const [value, unit] = speed.split(" ");
    const convertedSpeed = (parseFloat(value) * 1000) / 3600;
    console.log(`My car speed  ${convertedSpeed}`);
  } else {
    console.log("stoped");
  }
};

getMyCarSpeed(10);
// getMyCarSpeed(true);

// never... kono function jodi kokhono return na kore tokhon amra never declare korte pari
const throwError = (message: string): never => {
  throw new Error(message);
};

throwError("Error is comming");

const user: {
  name: string;
  company: "AFS"; // literal type
  age: number;
  programmer: boolean;
} = {
  name: "Farok",
  company: "AFS",
  age: 28,
  programmer: true,
};

const user2: {
  name: string;
  age: number;
  programmer?: boolean;
} = {
  name: "Farok",
  age: 28,
};

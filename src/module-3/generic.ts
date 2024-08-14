type GenericType<T> = Array<T>;

const rollNumbers1: GenericType<number> = [1, 2, 3];
const rollNumbers2: Array<string> = ["123", "354"];
const rollNumbers3: Array<boolean> = [true, false];

type NameRollType = { name: string; roll: number };

const nameAndRollNumbers: GenericType<NameRollType> = [
  {
    name: "x",
    roll: 12,
  },
  {
    name: "y",
    roll: 11,
  },
];
const nameAndRollNumbers2: Array<NameRollType> = [
  {
    name: "x",
    roll: 12,
  },
  {
    name: "y",
    roll: 11,
  },
];

// Generic Interface
interface CrushInterface<T> {
  name: string;
  model: T;
}

const crush11: CrushInterface<boolean> = { name: "Tessa", model: true };

const crush12: CrushInterface<string> = {
  name: "Josephine Langford",
  model: "Yes",
};

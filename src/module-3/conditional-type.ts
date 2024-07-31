type a1 = string;
type a3 = number;
type a4 = undefined;

type a2 = a1 extends string ? string : null;

type b = a1 extends number
  ? string
  : a3 extends string
  ? string
  : a4 extends number
  ? number
  : null;

type Cats = {
  cat1: string;
  cat2: string;
};

type checkProperty<T> = T extends { cat1: string } ? true : false;

type checkCatType = checkProperty<Cats>;

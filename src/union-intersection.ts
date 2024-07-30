type NoobDeveloper = {
  name: string;
};

type JuniorDeveloper = {
  name: string;
  expertise: string;
  experience: number;
};

// union types
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "Farok Hossain",
  expertise: "React",
  experience: 2,
};

// intersection types

type NextLevelDeveloper = JuniorDeveloper & {
  leadershipExperience: number;
};

const seniorDeveloper: NextLevelDeveloper = {
  name: "Md. Farok Hossain",
  expertise: "Typescript",
  experience: 3,
  leadershipExperience: 1,
};

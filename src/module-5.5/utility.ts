interface Person {
  name: string;
  email: string;
  contactNo: number;
  address: string;
}

// jokhon onek gula property thake tokhon jodi sob gula use na kore 1 ba 2 property use kora lage tahole Pick use kore kaj kora jai
type Name = Pick<Person, "name">;
type Contact = Pick<Person, "email" | "contactNo">;

// omit holo pick er olta
type Emailsss = Omit<Person, "name" | "contactNo" | "address">;

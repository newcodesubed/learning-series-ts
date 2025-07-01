let myName: string = "Subedh";

let numberOfWheels: number = 4;

let isStudent: boolean = false;

//custom type
type Address = {
  street: string;
  city: string;
};
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address: Address;
};

let person1: Person = {
  name: "Subedh",
  age: 25,
  isStudent: false,
  address: {
    street: "123, ABC Street",
    city: "New York",
  },
};
let person2: Person = {
  name: "Subedh",
  age: 25,
  isStudent: false,
  address: {
    street: "123, ABC Street",
    city: "New York",
  },
};

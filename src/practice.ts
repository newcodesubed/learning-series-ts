//literal type

let myName = "Subed";
const myName1 = "Hello";

//unions

type UserRole = "user" | "admin" | "owner";
type User = { username: string; role: UserRole };

const users: User[] = [
  { username: "john_doe", role: "owner" },
  { username: "prabin", role: "admin" },
  { username: "subed", role: "user" },
];

function fetchUserDetails(username: string): User {
  const user = users.find((user) => user.username === username);
  if (!user) {
    throw new Error(`User with username ${username} not Found`);
  }
  return user;
}

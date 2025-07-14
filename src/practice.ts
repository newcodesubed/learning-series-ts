//literal type

let myName = "Subed";
const myName1 = "Hello";

//unions

type UserRole = "user" | "admin" | "owner";
type User = { id: number; username: string; role: UserRole };

const users: User[] = [
  { id: 1, username: "john_doe", role: "owner" },
  { id: 2, username: "prabin", role: "admin" },
  { id: 3, username: "subed", role: "user" },
  { id: 4, username: "arbyte", role: "admin" },
];

function fetchUserDetails(username: string): User {
  const user = users.find((user) => user.username === username);
  if (!user) {
    throw new Error(`User with username ${username} not Found`);
  }
  return user;
}

function updateUser(id: number, updates: any) {
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    console.error("User not found");
    return;
  }
  Object.assign(foundUser, updates);
}

updateUser(1, { username: "new_prabin" });
updateUser(4, { role: "owner" });

console.log(users);

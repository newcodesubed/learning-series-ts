type Pizza = {
  id: number;
  name: string;
  price: number;
};
type AddPizza = {
  name: string;
  price: number;
};
//unions
type OrderStatus = "order" | "completed";

type Order = {
  id: number;
  pizza: Pizza;
  status: OrderStatus;
};

let cashInRegister: number = 100;
let nextOderId: number = 1;
let orderHistory: Order[] = [];
let pizzaId: number = 1;
const menu: Pizza[] = [
  { id: pizzaId++, name: "Margherita", price: 8 },
  { id: pizzaId++, name: "Pepperoni", price: 10 },
  { id: pizzaId++, name: "Hawaiian", price: 3 },
  { id: pizzaId++, name: "Veggie", price: 4 },
];

function addNewPizza(pizzaObj: AddPizza): void {
  const orderAdded: Pizza = {
    id: pizzaId++,
    name: pizzaObj.name,
    price: pizzaObj.price,
  };
  menu.push(orderAdded);
}

function placeOrder(pizzaName: string): Order | undefined {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    console.error(`${pizzaName}... Sorry!, we don't have that pizza`);
    return;
  }
  cashInRegister += selectedPizza.price;
  const newOrder: Order = {
    id: nextOderId++,
    pizza: selectedPizza,
    status: "order",
  };
  orderHistory.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number): Order | undefined {
  const order = orderHistory.find((order) => order.id === orderId);
  // console.log("order i wanna look at", order);
  if (order) {
    order.status = "completed";
    // console.log("order status updated", order);
    return;
  }
  console.warn("Order not found");
  return order;
}

export function getPizza(identifier: string | number): Pizza | undefined {
  if (typeof identifier === "string") {
    return menu.find(
      (identifierObj) =>
        identifierObj?.name.toLocaleLowerCase() ===
        identifier.toLocaleLowerCase()
    );
  } else if (typeof identifier === "number") {
    return menu.find((identifierObj) => identifierObj?.id === identifier);
  } else {
    throw new TypeError(
      "Parameter 'identifier' must be either string or number"
    );
  }
}

// Demo
addNewPizza({ name: "My BBQ chicken", price: 200 });
// addNewPizza({ id: 6, name: "smoked chicken", price: 22 });
// addNewPizza({ id: 7, name: "grill chicken", price: 12 });

placeOrder("BBQ chicken");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order Queue:", orderHistory);

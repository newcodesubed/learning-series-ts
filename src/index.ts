type Pizza = {
  id: number;
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

const menu: Pizza[] = [
  { id: 1, name: "Margherita", price: 8 },
  { id: 2, name: "Pepperoni", price: 10 },
  { id: 3, name: "Hawaiian", price: 3 },
  { id: 4, name: "Veggie", price: 4 },
];

let cashInRegister: number = 100;
let nextOderId: number = 1;
let orderHistory: Order[] = [];

function addNewPizza(pizzaObj: Pizza) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName: string) {
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

function completeOrder(orderId: number) {
  const order = orderHistory.find((order) => order.id === orderId);
  console.log("order i wanna look at", order);
  if (order) {
    order.status = "completed";
    console.log("order status updated", order);
    return order;
  }
  console.warn("Order not found");
  return null;
}

function getPizza(identifier: string | number) {
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
addNewPizza({ id: 5, name: "BBQ chicken", price: 20 });
addNewPizza({ id: 6, name: "smoked chicken", price: 22 });
addNewPizza({ id: 7, name: "grill chicken", price: 12 });

placeOrder("BBQ chicken");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order Queue:", orderHistory);

const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 3 },
  { name: "Veggie", price: 4 },
];

const cashInRegister = 100;
const orderQueue = [];

function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);

  cashInRegister += selectedPizza.price;
  const newOrder = { pizza: selectedPizza, status: "order" };
  orderQueue.push(newOrder);
  return newOrder;
}

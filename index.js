const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 3 },
  { name: "Veggie", price: 4 },
];

const cashInRegister = 100;
const orderQueue = [];
const nextOderId = 1;
function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);

  cashInRegister += selectedPizza.price;
  const newOrder = {
    pizza: selectedPizza,
    status: "order",
    orderId: nextOderId++,
  };

  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId) {
  const completedPizza = orderQueue.find(
    (orderObj) => orderObj.orderId === orderId
  );
  completedPizza.status = "completed";
  return completedPizza;
}

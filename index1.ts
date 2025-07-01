(() => {
  type Pizza = {
    name: string;
    price: number;
  };

  const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 3 },
    { name: "Veggie", price: 4 },
  ];

  let cashInRegister: number = 100;
  let nextOderId: number = 1;
  let orderQueue = [];

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
    const newOrder = {
      pizza: selectedPizza,
      status: "order",
      orderId: nextOderId++,
    };

    orderQueue.push(newOrder);
    return newOrder;
  }

  function completeOrder(orderId: number) {
    const completedPizza = orderQueue.find(
      (orderObj) => orderObj.orderId === orderId
    );
    if (completedPizza) {
      completedPizza.status = "completed";
      return completedPizza;
    }
    console.warn("Order not found");
    return null;
  }

  // Demo
  addNewPizza({ name: "BBQ chicken", price: 20 });
  addNewPizza({ name: "smoked chicken", price: 22 });
  addNewPizza({ name: "grill chicken", price: 12 });

  placeOrder("BBQ chicken");
  completeOrder(1);

  console.log("Menu:", menu);
  console.log("Cash in register:", cashInRegister);
  console.log("Order Queue:", orderQueue);
})();

const round = num => Number(Math.round(num + "e2") + "e-2");

const getInventory = (req, res) => {
  const dbInstance = req.app.get("db");

  dbInstance
    .get_inventory()
    .then(response => res.status(200).send(response))
    .catch(console.log);
};

const getCart = (req, res) => {
  const dbInstance = req.app.get("db");

  const cart = {
    subtotal: 0,
    tax: 0,
    orderTotal: 0,
    items: []
  };

  dbInstance
    .get_cart()
    .then(response => {
      for (let i = 0; i < response.length; i++) {
        cart.subtotal += response[i].price;
        cart.items.push(response[i]);
      }
      cart.tax = round(cart.subtotal * 0.0825);
      cart.orderTotal = round(cart.subtotal * 1.0825);
      res.status(200).send(cart);
    })
    .catch(console.log);
};

const addToCart = (req, res) => {
  const dbInstance = req.app.get("db");
  const item = req.body;

  dbInstance
    .add_to_cart(req.sessionID, item.productId, item.quantity)
    .then(response => res.status(200).send(response))
    .catch(console.log());
};

const removeFromCart = (req, res) => {
  console.log(req.params);
  const dbInstance = req.app.get("db");
  const id = req.params.id;

  dbInstance
    .remove_from_cart(id)
    .then(response => res.status(200).send(response))
    .catch(console.log());
};

module.exports = {
  getInventory,
  addToCart,
  getCart,
  removeFromCart
};

const getInventory = (req, res) => {
  const dbInstance = req.app.get("db");

  dbInstance
    .get_inventory()
    .then(response => res.status(200).send(response))
    .catch(console.log);
};

const getCart = (req, res) => {
  const dbInstance = req.app.get("db");

  let subtotal = 0;
  const cart = [];

  dbInstance
    .get_cart()
    .then(
      response =>
        Object.keys(response).forEach(key => {
          subtotal = subtotal + parseInt(response[key].price);
          console.log(response[key].price);
          cart.push(response[key]);
        }),
      (cart.subtotal = subtotal),
      (cart.tax = subtotal * 0.0825),
      (cart.orderTotal = subtotal * 1.0825),
      console.log(cart)
    )
    .then(cart => console.log(cart))
    .catch(console.log);
};

const addToCart = (req, res) => {
  const dbInstance = req.app.get("db");
  const item = req.body;

  dbInstance
    .add_to_cart(req.sessionID, item.productId, item.quantity)
    .then(response => res.status(200).send(response))
    .catch(console.log);
};

module.exports = {
  getInventory,
  addToCart,
  getCart
};

const getInventory = (req, res) => {
  const dbInstance = req.app.get("db");

  dbInstance
    .get_inventory()
    .then(response => res.status(200).send(response))
    .catch(console.log);
};

const getCart = (req, res) => {
  const dbInstance = req.app.get("db");

  dbInstance
    .get_cart()
    .then(response => res.status(200).send(response))
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

SELECT e.quantity, e.cart_item_id, u.name, u.price, u.imageurl
FROM ecommerce_cart e
JOIN uluproducts u ON e.product_id=u.id;
SELECT e.quantity, u.name, u.price, u.imageurl
FROM ecommerce_cart e
JOIN uluproducts u ON e.product_id=u.id;
<template>
  <div class="cart-summary">
    <h1>
        Order Summary
    </h1>
    <div>
      <div class="flexbox">
        <h4>Subtotal</h4>
        <span>{{subtotal}}</span>
      </div>
      <div class="flexbox">
        <h4>Estimated Shipping</h4>
        <span>Free</span>
      </div>
      <div class="flexbox">
        <h4>Tax</h4>
        <span>{{tax}}</span>
      </div>
      <div class="flexbox">
        <h2>Total</h2> 
        <span>{{orderTotal}}</span>
      </div>
    </div>
    <button>Checkout</button>
  </div>
</template>

<script>
export default {
  props: ["orderTotal", "subtotal", "tax"]
};
</script>
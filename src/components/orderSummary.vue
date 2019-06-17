<template>
  <div class="cart-summary">
    <div>
    <h1>
        Order Summary
    </h1>
    <div class="cart-totals-wrapper">
      <div class="cart-total-line-item">
        <label>Subtotal</label>
        <span>{{subtotal}}</span>
      </div>
      <div class="cart-total-line-item">
        <label>Estimated Shipping</label>
        <span>Free</span>
      </div>
      <div class="cart-total-line-item">
        <label>Tax</label>
        <span>{{tax}}</span>
      </div>
      <div class="cart-total-line-item">
        <label>Total</label> 
        <span>{{orderTotal}}</span>
      </div>
    </div>
    </div>
    <!-- START PAYMENT DETAILS SECTION -->
    <div>
      <h1>Payment Details</h1>
      <div>
        <div>
          <label>
            Card Type:
          </label>
          <input>
        </div>
        <div>
          <label>Card Number:</label>
          <input>
        </div>
        <div>
          <label>
            Card Holder Name:
          </label>
          <input>
        </div>
        <div>
          <label>ExpirationDate:</label>
          <input>
          <label>CVV:</label>
          <input>
        </div>
      </div>
      <button>Place Order</button>
    </div>
  </div>


</template>

<script>
export default {
  props: ["orderTotal", "subtotal", "tax"]
};
</script>
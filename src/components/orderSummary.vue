<template>
  <div class="cart-summary">
    <div>
    <h1>
        Order Summary
    </h1>
    <div class="cart-totals-wrapper">
      <div class="cart-total-line-item">
        <label>Subtotal</label>
        <span>${{subtotal}}</span>
      </div>
      <div class="cart-total-line-item">
        <label>Estimated Shipping</label>
        <span>Free</span>
      </div>
      <div class="cart-total-line-item">
        <label>Tax</label>
        <span>${{tax}}</span>
      </div>
      <div class="cart-total-line-item">
        <label>Total</label> 
        <span>${{orderTotal}}</span>
      </div>
    </div>
    </div>
    <!-- START PAYMENT DETAILS SECTION -->
    <div class="payment-details-wrapper">
      <h1>Payment Details</h1>
      <div>
        <div class="payment-details-line">
          <label>
            Card Type:
          </label>
          <input>
        </div>
        <div class="payment-details-line">
          <label>Card Number:</label>
          <input>
        </div>
        <div class="payment-details-line">
          <label>
            Card Holder Name:
          </label>
          <input>
        </div>
        <div class="payment-details-line expiration">
          <div>
            <label>Expiration Date:</label>
            <input>
          </div>
          <div>
            <label>CVV:</label>
            <input>
          </div>
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
<template>
  <div class="about">
    <div class="cart-item-container">
    <cartItem
      v-for="item in cart"
      v-bind:item="item"
      v-bind:key="item.cart_item_id"
    >
    </cartItem>
    </div>
    <div>
      <orderSummary/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cartItem from "../components/cartItem";
import orderSummary from "../components/orderSummary";
export default {
  components: {
    cartItem,
    orderSummary
  },

  data: () => ({}),
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
  beforeMount() {
    this.$store.dispatch("getCart");
  }
};
</script>
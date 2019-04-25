<template>
  <div class="about">
    <h1>This is a cart page</h1>
    <cartItem
      v-for="item in cart"
      v-bind:item="item"
      v-bind:key="item.cart_item_id"
    >
    </cartItem>
  </div>
</template>

<script>
import axios from "axios";
import cartItem from "../components/cartItem";
export default {
  components: {
    cartItem
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
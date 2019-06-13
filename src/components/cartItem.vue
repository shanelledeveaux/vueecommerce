<template>

  <div class="cart-item">
      <img
          width="200px"
          v-bind:src="item.imageurl"
        >
    <h1>{{item.name}}</h1>
    <div>{{item.price}}</div>
    <div>{{item.quantity}}</div>
    <button class="button">edit</button>
    <button class="button" @click="deleteItem(item.cart_item_id)">trash</button>
  </div>

</template>

<script>
import axios from "axios";

export default {
  props: ["item"],

  methods: {
    deleteItem(id) {
      console.log(id);
      axios.delete(`/api/removeFromCart/${id}`);
    }
  }
};
</script>

<style scoped></style>
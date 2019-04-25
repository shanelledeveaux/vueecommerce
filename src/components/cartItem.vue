<template>

  <div class="cart-item">
      <img
          width="200px"
          v-bind:src="item.imageurl"
        >
    <h1>{{item.name}}</h1>
    <div>{{item.price}}</div>
    <div>{{item.quantity}}</div>
    <button>edit</button>
    <button>trash</button>
  </div>

</template>

<script>
export default {
  props: ["item"]
};
</script>

<style scoped></style>
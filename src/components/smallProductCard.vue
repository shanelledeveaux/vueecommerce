<template>
<router-link v-bind:to="/product/+product.id">
  <div class="product-card">
      <img
          width="200px"
          v-bind:src="product.imageurl"
        >
    <h1>{{product.name}}</h1>
    <div>{{product.price}}</div>
  </div>
  </router-link>
</template>

<script>
export default {
  props: ["product"]
};
</script>

<style scoped></style>
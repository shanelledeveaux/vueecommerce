<template>
  <div class="shop">
    <img
          width="200px"
          v-bind:src="product.imageurl"
        >
    <h1>{{product.name}}</h1>
    <div>{{product.price}}</div>
  </div>
</template>

<script>
export default {
  props: ["product"]
};
</script>
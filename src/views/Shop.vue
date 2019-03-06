<template>
  <div class="shop">
    <h1>This is the shopping page</h1>
    <smallProductCard
        v-for="product in productList"
        v-bind:product="product"
        v-bind:key="product.id"
    ></smallProductCard>
  </div>
</template>

<script>
import axios from "axios";
import smallProductCard from "../components/smallProductCard.vue";

export default {
  components: {
    smallProductCard
  },

  data: () => ({}),
  computed: {
    productList() {
      return this.$store.state.products;
    }
  },
  beforeMount() {
    this.$store.dispatch("getProducts");
  }
};
</script>
<template>
  <div class="shop flexbox">
    <img
          class="largeimage"
          v-bind:src="currentProduct[0].imageurl"
        >
    <div>
    <div>REVIEWS</div>
    <h1 class="accentfont">{{currentProduct[0].name}}</h1>
    <div>{{currentProduct[0].price}}</div>
    <div>Quantity</div>
    <div>
      <button v-on:click="quantity += 1">
        +
      </button>
      {{this.quantity}}
      <button v-on:click="quantity -= 1">
        -
      </button>
    </div>
    <button>ADD TO BAG</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data: () => ({
    quantity: 1
  }),
  computed: {
    currentProduct() {
      return this.$store.state.products.filter(
        product => product.id == this.$route.params.id
      );
    }
  }
};
</script>
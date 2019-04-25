<template>

  <div>
    <h1>{{item.name}}</h1>
    <div>{{item.price}}</div>
    <div>{{item.quantity}}</div>
  </div>

</template>

<script>
export default {
  props: ["item"]
};
</script>

<style scoped></style>
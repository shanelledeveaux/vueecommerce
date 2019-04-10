<template>
  <div class="app">
    <Header/>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "./sass/main.scss";
</style>

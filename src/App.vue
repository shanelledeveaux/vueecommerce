<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/shop">Shop</router-link> |
      <router-link to="/product">Product</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "main.scss";
</style>

import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    GET_PRODUCTS(state, products) {
      state.products = products;
    }
  },
  actions: {
    getProducts() {
      axios
        .get("/api/products")
        .then(res => this.commit("GET_PRODUCTS", res.data));
    }
  }
});

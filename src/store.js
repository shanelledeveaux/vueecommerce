import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    GET_PRODUCTS(state, products) {
      state.products = products;
    },
    ADD_TO_CART(state, cart) {
      state.cart = cart;
    }
  },
  actions: {
    getProducts() {
      axios
        .get("/api/products")
        .then(res => this.commit("GET_PRODUCTS", res.data));
    },
    addToCart(context, item) {
      axios.post("/api/cart", item);
    }
  }
});

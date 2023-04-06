import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueScrollTo from 'vue-scrollto'

import "swiper/css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// import Web3 from 'web3/dist/web3.min.js'

// const web3 = new Web3(Web3.givenProvider || 'wss://some.local-or-remote.node:8546')

createApp(App).use(store).use(VueScrollTo, {
    easing: 'linear',
     lazy: false,
     duration: 200
}).use(router).mount("#app");

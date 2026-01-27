import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

export function mount(selector) {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(selector);
}

export { App };


// import Vue from "vue";
// import App from "./App.vue";
// import "./registerServiceWorker";
// import router from "./router";
// import store from "./store";

// Vue.config.productionTip = false;

// new Vue({
//   router,
//   store,
//   render: function(h) {
//     return h(App);
//   }
// }).$mount("#app");

if (!window.__POWERED_BY_MF__) {
  import('./remote-entry').then(({ mount }) => {
    const el = document.createElement('div');
    el.id = 'app';
    document.body.appendChild(el);
    mount(el);
  });
}
if (typeof __webpack_public_path__ !== 'undefined') {
  __webpack_public_path__ = document.currentScript?.src?.replace(/remoteEntry\.js$/, '') || 'http://localhost:8080/';
}

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

export function mount(el) {
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  app.$mount(el);
  return app;
}

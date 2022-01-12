import "./theme/css/main.scss";

import App from "../src/App/App.vue";
import Vue from "vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

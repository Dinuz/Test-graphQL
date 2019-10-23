import Vue from "vue";
import App from "./App.vue";
import { createProvider } from "@/libraries/vue-apollo";

Vue.config.productionTip = false;

new Vue({
  //apollo,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount("#app");

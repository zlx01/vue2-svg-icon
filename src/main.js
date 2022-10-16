import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import SvgIcon from "@/components/SvgIcon";

const req = require.context("@/assets/svg", false, /\.svg$/);
const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
requireAll(req);

Vue.component("svg-icon", SvgIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

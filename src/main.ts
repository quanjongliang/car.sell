import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.scss";
import store from "./store";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons";
const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);
createApp(App)
  .use(store)
  .component("v-icon", OhVueIcon)
  .use(router)
  .mount("#app");

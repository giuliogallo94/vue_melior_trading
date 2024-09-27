import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";
import "./style/general.scss";

createApp(App).use(router).mount("#app");

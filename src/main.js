import "./assets/main.css";

import { createApp, nextTick } from "vue";
import { createHead } from "@unhead/vue/client";
import App from "./App.vue";
import router from "./router";
import './assets/tailwind.css'

const app = createApp(App);
app.use(createHead());

app.use(router).mount("#app");

nextTick(() => {
  document.dispatchEvent(new Event('render-event'));
});
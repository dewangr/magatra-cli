import "./assets/main.css";

import { createApp, nextTick } from "vue";
import { createHead } from "@unhead/vue/client";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";

const app = createApp(App);
const head = createHead();

app.use(head);


router.isReady().then(async () => {
  app.use(router).mount("#app");

  await nextTick();
  await nextTick();
    
  setTimeout(() => {
    document.dispatchEvent(new Event("render-event"));
  }, 2000);
});
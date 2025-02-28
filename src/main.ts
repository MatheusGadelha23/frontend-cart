import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";
import "./assets/styles/tailwind.css";

const app = createApp(App);

app.use(VueToast, {
  position: "top",
  duration: 5000,
  theme: "toasted-primary",
  dismissible: true,
});

app.use(router);

app.mount("#app");

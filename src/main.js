import { createApp } from "vue";
import store from "@/store";
import App from "./App.vue";
import "./assets/tailwind.css";

createApp(App).use(store).mount("#app");

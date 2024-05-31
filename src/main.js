import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./store/store";

import router from "./router";
// prime vue
import PrimeVue from "primevue/config";

//in main.js
import "primevue/resources/themes/aura-light-green/theme.css";

import InputText from "primevue/inputtext";
import Button from "primevue/button";

const app = createApp(App);

app.use(PrimeVue);
app.component("InputText", InputText);
app.component("Button", Button);

app.use(router);
app.use(store);

app.mount("#app");

/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import "element-plus/dist/index.css";
import "@/styles/settings.scss";
// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");

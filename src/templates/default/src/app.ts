import { createApp } from "nativescript-vue";
import GoogleMaps from "@nativescript/google-maps/vue";

import Home from "./components/Home.vue";

const app = createApp(Home);
app.use(GoogleMaps);

app.start();
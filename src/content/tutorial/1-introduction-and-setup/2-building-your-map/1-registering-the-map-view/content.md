---
type: lesson
title: Registering the Map View
focus: /src/app.ts
---

# Registering the Map View

To use the Google Maps API, you need to register the native view in your NativeScript application. This is done in the `app.module.ts` file. Open this file and add the following import statement at the top:

```typescript
import { createApp } from "nativescript-vue";
import GoogleMaps from "@nativescript/google-maps/vue";

import Home from "./components/Home.vue";

const app = createApp(Home);
app.use(GoogleMaps);

app.start();
```

Like other NativeScript native views, the Google Maps view needs to be registered in the application to tell the compiler how to handle the native view. The `GoogleMaps` plugin is imported from the `@nativescript/google-maps/vue` package and registered with the Vue application instance.

Once the plugin is registered, you can use the `<MapView>` component in your Vue components.

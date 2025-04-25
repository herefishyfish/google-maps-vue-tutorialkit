---
type: lesson
title: Customizing Markers
focus: /src/components/Home.vue
editor:
  fileTree: false
---

# Customizing Map Markers

Custom icons for markers not only make your map look sharper—they also help convey extra information at a glance. The NativeScript Google Maps plugin expects an `ImageSource` for a marker's `icon` property. So what is an `ImageSource`? It's a NativeScript class that wraps an image, and you can create one from:

- A remote URL
- A local file path
- A Base64 string
- A native image object (Bitmap for Android or a UIImage for iOS)

Below is an example that loads an image from the web. You can easily switch this out for a local file or a Base64 string if you prefer.

```ts
import { ImageSource } from "@nativescript/core";
import { MapReadyEvent, GoogleMap, MapType } from "@nativescript/google-maps";

async function onMapReady(args: MapReadyEvent) {
  const map = args.map as GoogleMap;

  const imageSource = await ImageSource.fromUrl(
    "https://ns-vue-maps-tutorial.web.app/pin.png"
  );
  const marker = map.addMarker({
    position: { lat: 37.7849, lng: -122.4194 },
    title: "San Francisco",
    snippet: "Welcome to San Francisco!",
    icon: imageSource
  });
}
```

For more on all the ways to create an ImageSource, check out the [NativeScript documentation on ImageSource](https://docs.nativescript.org/api/class/ImageSource).

---
type: lesson
title: Adding Markers to the Map
focus: /src/components/Home.vue
---

# Adding Markers to the Map

Most of the time, you will want to add markers to your map. Markers are used to indicate specific locations on the map, such as points of interest, user locations, or any other significant spots.

To add a marker to the map, you can use the `addMarker` method provided by the NativeScript Google Maps plugin. Here's how to do it:

```vue
<script lang="ts" setup>
import { MapReadyEvent, GoogleMap, MapType } from "@nativescript/google-maps";

function onMapReady(args: MapReadyEvent) {
  const map = args.map as GoogleMap;
  map.mapType = MapType.Hybrid;

  // Create a marker
  const marker = map.addMarker({
    position: { lat: 37.7749, lng: -122.4194 }, // San Francisco coordinates
    title: "San Francisco",
    snippet: "Welcome to San Francisco!",
  });
}
</script>
```

In this example, we create a new `Marker` instance and set its position to the coordinates of San Francisco. We also set the title and snippet for the marker, which will be displayed when the user taps on it.

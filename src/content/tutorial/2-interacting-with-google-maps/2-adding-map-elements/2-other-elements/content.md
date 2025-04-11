---
type: lesson
title: Adding Other Map Elements
focus: /src/components/Home.vue
editor:
  fileTree: false
---

# Adding Other Map Elements

In addition to markers, you can also add other elements to your map, such as circles, polygons, and polylines. These elements can be used to represent areas, routes, or any other shapes on the map.

```vue
<script lang="ts" setup>
import { MapReadyEvent, GoogleMap, MapType } from "@nativescript/google-maps";

function onMapReady(args: MapReadyEvent) {
  const map = args.map as GoogleMap;
  map.mapType = MapType.Hybrid;

  // Create a circle
  const circle = map.addCircle({
    center: { lat: 37.7849, lng: -122.4194 },
    radius: 10000,
    fillColor: "rgb(115, 172, 240)",
    strokeColor: "#FFFFFF",
  });

  // Create a polyline
  map.addPolyline({
    color: "white",
    width: 20,
    points: [
      { lat: 37.7232, lng: -122.465 },
      { lat: 37.8432, lng: -122.465 },
      { lat: 37.7232, lng: -122.365 },
      { lat: 37.8432, lng: -122.365 },
    ],
  });
}
</script>
```

For a complete list of available properties for circles, polygons, and polylines, refer to the [NativeScript Google Maps Plugin Documentation](https://docs.nativescript.org/plugins/google-maps).



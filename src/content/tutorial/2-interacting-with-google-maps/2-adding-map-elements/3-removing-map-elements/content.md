---
type: lesson
title: Removing Map Elements
focus: /src/components/Home.vue
---

# Removing Map Elements

Here we will learn how to remove elements from the map, such as markers and polylines. This is useful when you want to clear the map or update its contents dynamically.

Removing elements from the map is straightforward. You can use the `removeMarker` method to remove a marker, or `removePolyline` for polylines. Below is an example of how to remove a marker from the map.

```vue
<script lang="ts" setup>
import { MapReadyEvent, GoogleMap, MapType } from "@nativescript/google-maps";

let map: GoogleMap | null = null; // Declare a variable to hold the map instance
let marker: Marker | null = null; // Declare a variable to hold the marker

function onMapReady(args: MapReadyEvent) {
  map = args.map as GoogleMap;
  map.mapType = MapType.Hybrid;

  // Create a marker
  marker = map.addMarker({
    position: { lat: 37.7749, lng: -122.4194 },
    title: "San Francisco",
    snippet: "Welcome to San Francisco!",
  });
}

// Remove the marker from the map
function removeMarker() {
  if (marker) {
    map.removeMarker(marker); // Remove the marker from the map
  }
}

</script>
```

For detailed information on how to remove other elements, refer to the [NativeScript Google Maps Plugin Documentation](https://docs.nativescript.org/plugins/google-maps).
---
type: lesson
title: Getting the precise location
focus: /src/components/Home.vue
editor:
  fileTree: false
---

# Getting the precise location

Now that we have the user panning around the map, we can get the location of the "pin" by simply getting the `latitude` and `longitude` of the current map. This is done by using the `cameraPositon` property of the `GoogleMap` instance.
```vue
<script lang="ts" setup>
import { alert } from "@nativescript/core";
import { MapReadyEvent, GoogleMap } from "@nativescript/google-maps";

let map: GoogleMap | null = null;

function onMapReady(args: MapReadyEvent) {
  map = args.map as GoogleMap;
}

function getPreciseLocation() {
  if (map) {
    const cameraPosition = map.cameraPosition;
    const latitude = cameraPosition.target.lat;
    const longitude = cameraPosition.target.lng;
    alert(`Latitude: ${latitude}, Longitude: ${longitude}`);
  } 
}
</script>
```
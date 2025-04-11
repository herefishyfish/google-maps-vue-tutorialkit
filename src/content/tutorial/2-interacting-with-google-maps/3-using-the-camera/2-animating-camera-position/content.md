---
type: lesson
title: Animating The Camera Position
focus: /src/components/Home.vue
---

# Animating The Camera Position

Creating a smooth transition between two camera positions can be achieved using the `CameraUpdate` class.

```vue
<script lang="ts" setup>
import { MapReadyEvent, GoogleMap, CameraUpdate } from "@nativescript/google-maps";

function onMapReady(args: MapReadyEvent) {
  const map = args.map as GoogleMap;

  const cameraUpdate = CameraUpdate.fromCoordinate({
      lat: 37.7749,
      lng: -122.4194,
    },
    map.cameraPosition.zoom
  );
  map.animateCamera(cameraUpdate);
}
</script>
```

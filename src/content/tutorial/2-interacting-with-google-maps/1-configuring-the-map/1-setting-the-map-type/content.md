---
type: lesson
title: Setting the Map Type
focus: /src/components/Home.vue
---

# Setting the Map Type

One of the first things you might want to do when creating a map is to set the map type. The Google Maps API provides several different map types, including:
- **Normal**: The default map type, which shows a standard road map.
- **Satellite**: A satellite view of the map, which shows aerial imagery.
- **Hybrid**: A combination of the normal and satellite map types, which shows a standard road map with satellite imagery.
- **Terrain**: A map type that shows physical features such as mountains and valleys.
- **None**: A map type that does not show any map tiles.

The map type can be set using the `mapType` property of the `GoogleMap` object we now have access to via the `ready` event. 

the following example shows how to set the map type to `Hybrid`:

```ts
import { MapReadyEvent, GoogleMap, MapType } from "@nativescript/google-maps";

function onMapReady(args: MapReadyEvent) {
    const map = args.object as GoogleMap;
    map.mapType = MapType.Hybrid; // Set the map type to hybrid
}
```

You can also set the map type to `Normal`, `Satellite`, `Terrain`, or `None` by using the corresponding enum values from the `MapType` enum.

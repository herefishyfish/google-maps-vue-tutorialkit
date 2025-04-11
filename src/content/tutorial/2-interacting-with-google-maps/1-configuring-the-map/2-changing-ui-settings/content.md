---
type: lesson
title: Changing UI Settings
focus: /src/components/Home.vue
---

# Changing UI Settings

With the Google Maps API, you can customize the map's UI to suit your needs. This includes changing the visibility of certain controls, such as the zoom controls, compass, and my location button.

we can access the map's UI settings through the `uiSettings` property of the `GoogleMap` object. This property provides access to various UI settings that can be modified to customize the map's appearance and functionality.

The following example demonstrates how to change the visibility of the zoom controls and compass on the map:

```typescript
import { MapReadyEvent, GoogleMap, MapType } from "@nativescript/google-maps";

function onMapReady(args: MapReadyEvent) {
  const map = args.map as GoogleMap;
  map.mapType = MapType.Hybrid;

  map.uiSettings.zoomControlsEnabled = true;
}
```

For more details on the available UI settings check the [NativeScript Google Maps plugin documentation](https://docs.nativescript.org/plugins/google-maps).
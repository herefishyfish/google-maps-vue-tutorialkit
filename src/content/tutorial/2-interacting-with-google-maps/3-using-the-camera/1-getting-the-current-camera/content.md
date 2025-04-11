---
type: lesson
title: Getting the Current Camera
focus: /src/components/Home.vue
editor:
  fileTree: false
---

# Getting the Current Camera

The `GoogleMap` component provides a method to get the current camera position. This can be useful for various purposes, such as saving the current view or updating the map based on user interactions.

To get the current camera position, you can use the `cameraPosition` property.

```javascript
function onTap() {
  if (map) {
    const cameraPosition = map.cameraPosition;
    alert(`Current Camera Position: ${JSON.stringify(cameraPosition.target)}`);
  }
}
```

The `cameraPosition` property returns an object containing the following properties:
- `target`: The camera target is the location of the center of the map, specified as latitude and longitude.
- `bearing`: The direction in which the camera points, measured in degrees clockwise from north.
- `tilt`: The viewing angle of the camera, measured in degrees.
- `zoom`: The scale of the map.


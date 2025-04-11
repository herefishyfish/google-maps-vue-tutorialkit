---
type: lesson
title: Setting Map Default Properties
focus: /src/components/Home.vue
editor:
  fileTree: false
---

# Setting Map Default Properties

In this lesson, we will set the default properties for our map. This includes setting the initial center and zoom level of the map.

## Setting Default Properties

The `MapView` component allows you to set default properties such as `lat`, `lng`, and `zoom`. These properties determine the initial position and zoom level of the map when it is first loaded.

```vue
<MapView
  lat="37.7749"
  lng="-122.4194"
  zoom="10"
/>
```

This will set the initial center of the map to San Francisco, California, with a zoom level of 10.
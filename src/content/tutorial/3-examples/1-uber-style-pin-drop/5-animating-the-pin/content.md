---
type: lesson
title: Animating the pin
focus: /src/components/Home.vue
editor:
  fileTree: false
---

# Animating the pin

Because we're using a custom view as the editing pin, we can animate it to make it look like it's being dropped on the map based on the user's touch. 

We can achieve this by listening to the `cameraPosition` event of the map and updating the position of the pin accordingly.

```html
<MapView 
  ...
  @cameraPositionChanged="onCameraPositionChanged"
/>
```

```ts
const pin = useTemplateRef("pin");
const moving = ref(false);

function onCameraPosition(args: CameraPositionEvent) {
  const pinElement = pin.value.nativeView;

  if (args.state === "idle" && editing.value) {
    moving.value = false;
    pinElement.animate({
      rotate: 0,
      duration: 300,
      curve: "easeInOut",
    });
  } else if (args.state === "start" && editing.value) {
    moving.value = true;
    pinElement.animate({
      rotate: 45,
      duration: 300,
      curve: "easeInOut",
    });
  }
}
```

We can also use these events to disable the savable button while the pin is moving. This way, the user won't be able to save the location until the pin has stopped moving.

```html
<Button
  ...
  :isEnabled="!moving"
/>
```
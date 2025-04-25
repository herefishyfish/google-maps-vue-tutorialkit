---
type: lesson
title: Animating the pin
focus: /src/components/Home.vue
editor:
  fileTree: false
---

# Animating the pin

Because we're using a custom view as the editing pin, we can animate the pin just like any regular view. So let's give the pin a cool animation to let the user know that they're moving it based on the their touch. 

We can achieve this by tracking the state of the user's interaction with the map. Specifically, by listening to the `cameraPosition` event, we determine when the user has begun interacting with the map (for example, the `"start"` state) and when the interaction has settled (the `"idle"` state). This enables us to update the pin's state in real time and animate it accordingly, ensuring a fluid user experience. In this example, while the user is moving the map, the pin rotates to indicate movement, and once the map stops moving, the pin animates back to its default orientation.

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
      translate: {
        x: 0,
        y: 0,
      },
      scale: 1,
      duration: 300,
      curve: "easeInOut",
    });
  } else if (args.state === "start" && editing.value) {
    moving.value = true;
    pinElement.animate({
      translate: {
        x: 0,
        y: -50,
      },
      scale: 0.8,
      duration: 300,
      curve: "easeInOut",
    });
  }
}
```

To enhance the user experience, we can leverage these events to temporarily disable the save button while the pin is in motion. This ensures that the user cannot save the location until the pin has settled into its final position, preventing accidental or incorrect saves.

```html
<Button
  ...
  :isEnabled="!moving"
/>
```
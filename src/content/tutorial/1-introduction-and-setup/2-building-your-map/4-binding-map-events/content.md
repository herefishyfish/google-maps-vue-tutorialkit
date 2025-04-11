---
type: lesson
title: Binding Map Events
focus: /src/components/Home.vue
editor:
  fileTree: false
---

# Binding Map Events

Here we will explore how to access events and on the `MapView` component. The `MapView` component provides various events that you can listen to, such as `ready`, `mapTap`, and `markerTap`. These events allow you to interact with the map and respond to user actions.

The `ready` event is crucial as it acts as the gateway to your Google Maps instance. When this event fires, it signals that the `MapView` component is fully loaded, providing you with a wrapper around the native Google Maps SDK on both iOS and Android. This wrapper grants you direct access to native functionalities, allowing you to customize the map, add markers, and perform other advanced operations.

## The Ready Event

The `ready` event is not just another event; it's your ticket to accessing the native Google Maps capabilities. Once the map is ready, you can call native methods and properties that are otherwise unreachable.

```vue
<MapView
  @ready="onMapReady"
/>
```

Here's how you can handle the `ready` event, which provides you with the native map wrapper:

```typescript
onMapReady(event: MapReadyEvent) {
  const map: GoogleMap = event.map;
  // Use 'map' to access native methods and properties
}
```

It is recommended to store the `map` reference in your component's state or a store for later use. This allows you to call native methods and properties whenever needed.

## Handling User Interactions

Besides the `ready` event, the `MapView` component dispatches various user interaction events. For further information, visit the [NativeScript Google Map Plugin documentation](https://docs.nativescript.org/plugins/google-maps).

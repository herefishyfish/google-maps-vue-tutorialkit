---
type: lesson
title: Styling the map
focus: /src/components/Home.vue
---

# Styling the map

Google Maps allows you to customize the look and feel of the map using styles. You can change the colors, visibility of certain features, and more. In this example, we'll apply a simple style to the map.

For some good examples of styles, you can check out the [Google Maps Styling Wizard](https://mapstyle.withgoogle.com/).
You can also find a collection of styles on [Snazzy Maps](https://snazzymaps.com/).

We're going to apply a premade style to the map to make it look a little bit more like an Uber map from user [amolood](https://github.com/amolood/Uber-map-style).

Import the Uber style:
```ts
import { uberStyle } from "./uber-style";
```

Then, apply the style to the map in the `onMapReady` function:
```ts
map.mapStyle = uberStyle;
```
---
type: lesson
title: Setting Up the View
focus: /src/components/Home.vue
---

# Setting Up the View

Sometimes we all need to think outside of the "view"... Typically, we think of the `MapView` as the only way to interact with the map. We want a marker that's always centered on the `MapView`? No problem! Should we add a `Marker` to the `GoogleMap` instance and synchronize it with the `MapView`? Well we definitely could do that, but we'd be writing to the `GoogleMap` instance every tick of the map. Instead we can simply overlay a `View` (or `Image` in this case) on top of the `MapView` and there we have a fixed marker that represents where we want to drop the pin. 

```vue
<template>
  <Page>
    <ActionBar title="NativeScript Google Maps Tutorial" />
    <GridLayout>
      <MapView />
      <Image
        src="~/assets/pin.png"
      />
    </GridLayout>
  </Page>
</template>
```

Pan the map around and you will see the pin is always in the same place. This is because the `Image` is not part of the `MapView`. It is simply a `View` that is overlaid on top of the `MapView`. 
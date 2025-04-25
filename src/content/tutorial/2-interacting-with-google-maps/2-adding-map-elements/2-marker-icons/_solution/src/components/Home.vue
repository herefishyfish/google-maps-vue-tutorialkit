<template>
  <Page>
    <ActionBar title="NativeScript Google Maps Tutorial" />
    <GridLayout>
      <MapView 
        lat="37.7749" 
        lng="-122.4194" 
        zoom="10" 
        @ready="onMapReady" 
      />
    </GridLayout>
  </Page>
</template>

<script lang="ts" setup>
import { ImageSource } from "@nativescript/core";
import { type MapReadyEvent, GoogleMap } from "@nativescript/google-maps";

async function onMapReady(args: MapReadyEvent) {
  const map = args.map as GoogleMap;

  const imageSource = await ImageSource.fromUrl(
    "https://ns-vue-maps-tutorial.web.app/pin.png"
  );
  const marker = map.addMarker({
    position: { lat: 37.7849, lng: -122.4194 }, // San Francisco coordinates
    title: "San Francisco",
    snippet: "Welcome to San Francisco!",
    icon: imageSource
  });
}
</script>
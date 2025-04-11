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
import { MapReadyEvent, GoogleMap, MapType } from "@nativescript/google-maps";

function onMapReady(args: MapReadyEvent) {
  const map = args.map as GoogleMap;
  map.mapType = MapType.Hybrid;

  const marker = map.addMarker({
    position: { lat: 37.7849, lng: -122.4194 }, // San Francisco coordinates
    title: "San Francisco",
    snippet: "Welcome to San Francisco!",
  });
}
</script>
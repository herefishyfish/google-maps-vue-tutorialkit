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

  const circle = map.addCircle({
    center: { lat: 37.7849, lng: -122.4194 },
    radius: 10000,
    fillColor: "rgb(115, 172, 240)",
    strokeColor: "#FFFFFF",
  });

  map.addPolyline({
    color: "white",
    width: 20,
    points: [
      { lat: 37.7232, lng: -122.465 },
      { lat: 37.8432, lng: -122.465 },
      { lat: 37.7232, lng: -122.365 },
      { lat: 37.8432, lng: -122.365 },
    ],
  });
}
</script>

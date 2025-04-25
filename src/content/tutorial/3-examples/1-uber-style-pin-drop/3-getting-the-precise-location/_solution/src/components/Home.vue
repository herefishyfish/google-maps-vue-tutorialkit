<script lang="ts" setup>
import { alert } from "@nativescript/core";
import { MapReadyEvent, GoogleMap } from "@nativescript/google-maps";

let map: GoogleMap | null = null;

function onMapReady(args: MapReadyEvent) {
  map = args.map as GoogleMap;
}

function getPreciseLocation() {
  if (map) {
    const cameraPosition = map.cameraPosition;
    const latitude = cameraPosition.target.lat;
    const longitude = cameraPosition.target.lng;
    alert(`Latitude: ${latitude}, Longitude: ${longitude}`);
  } 
}
</script>

<template>
  <Page>
    <ActionBar title="NativeScript Google Maps Tutorial" />
    <GridLayout rows="* auto">
      <MapView 
        @ready="onMapReady"
      />
      <Image
        src="https://ns-vue-maps-tutorial.web.app/pin.png"
        width="128" height="128"
      />
      <Button
        text="Get Precise Location"
        @tap="getPreciseLocation"
        row="1"
      />
    </GridLayout>
  </Page>
</template>
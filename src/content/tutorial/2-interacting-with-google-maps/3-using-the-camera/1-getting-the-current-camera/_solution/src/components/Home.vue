<script lang="ts" setup>
import { MapReadyEvent, GoogleMap, CameraUpdate } from "@nativescript/google-maps";

let map: GoogleMap | null = null;
function onMapReady(args: MapReadyEvent) {
  map = args.map as GoogleMap;
}

function onTap() {
  if (map) {
    const cameraPosition = map.cameraPosition;
    alert(`Current Camera Position: ${JSON.stringify(cameraPosition.target)}`);
  }
}
</script>

<template>
  <Page>
    <ActionBar title="NativeScript Google Maps Tutorial" />
    <StackLayout>
      <Button text="Get Current Camera" @tap="onTap" />
      <MapView 
        @ready="onMapReady" 
      />
    </StackLayout>
  </Page>
</template>

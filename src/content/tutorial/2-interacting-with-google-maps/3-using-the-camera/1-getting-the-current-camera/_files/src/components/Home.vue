<script lang="ts" setup>
import { MapReadyEvent, GoogleMap, CameraUpdate } from "@nativescript/google-maps";

let map: GoogleMap | null = null;
function onMapReady(args: MapReadyEvent) {
  map = args.map as GoogleMap;
}

function onTap() {
  if (map) {
    console.log("Current Camera Position:");
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

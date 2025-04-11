<script lang="ts" setup>
import { MapReadyEvent, GoogleMap, CameraUpdate } from "@nativescript/google-maps";

function onMapReady(args: MapReadyEvent) {
  const map = args.map as GoogleMap;

  const cameraUpdate = CameraUpdate.fromCoordinate({
      lat: 37.7749,
      lng: -122.4194,
    },
    map.cameraPosition.zoom
  );
  map.animateCamera(cameraUpdate);
}

</script>

<template>
  <Page>
    <ActionBar title="NativeScript Google Maps Tutorial" />
    <StackLayout>
      <MapView 
        @ready="onMapReady" 
      />
    </StackLayout>
  </Page>
</template>
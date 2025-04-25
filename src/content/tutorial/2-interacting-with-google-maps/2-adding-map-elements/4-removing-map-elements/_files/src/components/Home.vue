<template>
  <Page>
    <ActionBar title="NativeScript Google Maps Tutorial" />
    <StackLayout>
      <Button 
        text="Remove Marker" 
        @tap="removeMarker" 
      />
      <MapView 
        lat="37.7749" 
        lng="-122.4194" 
        zoom="10" 
        @ready="onMapReady" 
      />
    </StackLayout>
  </Page>
</template>

<script lang="ts" setup>
import {
  MapReadyEvent,
  GoogleMap,
  MapType,
} from "@nativescript/google-maps";

function onMapReady(args: MapReadyEvent) {
  const map = args.map as GoogleMap;
  map.mapType = MapType.Hybrid;

  marker = map.addMarker({
    position: { lat: 37.7749, lng: -122.4194 },
    title: "San Francisco",
    snippet: "Welcome to San Francisco!",
  });
}

function removeMarker() {
  console.log('Remove the marker!');
}
</script>

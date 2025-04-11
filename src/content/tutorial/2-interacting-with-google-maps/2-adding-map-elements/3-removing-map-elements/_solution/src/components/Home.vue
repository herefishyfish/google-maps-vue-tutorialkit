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
import { MapReadyEvent, GoogleMap, MapType, Marker } from "@nativescript/google-maps";

let map: GoogleMap | null = null; // Declare a variable to hold the map instance
let marker: Marker | null = null; // Declare a variable to hold the marker

function onMapReady(args: MapReadyEvent) {
  map = args.map as GoogleMap;
  map.mapType = MapType.Hybrid;

  // Create a marker
  marker = map.addMarker({
    position: { lat: 37.7749, lng: -122.4194 },
    title: "San Francisco",
    snippet: "Welcome to San Francisco!",
  });
}

// Remove the marker from the map
function removeMarker() {
  if (marker) {
    map.removeMarker(marker); // Remove the marker from the map
  }
}

</script>
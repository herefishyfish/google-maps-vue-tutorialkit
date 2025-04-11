<script setup lang="ts">
import { MapReadyEvent, GoogleMap } from "@nativescript/google-maps";

let map: GoogleMap | null = null;

function onMapReady(args: MapReadyEvent) {
  map = args.map as GoogleMap;
}

function getPreciseLocation() {
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
        src="~/assets/pin.png"
      />
      <Button
        text="Get Precise Location"
        @tap="getPreciseLocation"
        row="1"
      />
    </GridLayout>
  </Page>
</template>
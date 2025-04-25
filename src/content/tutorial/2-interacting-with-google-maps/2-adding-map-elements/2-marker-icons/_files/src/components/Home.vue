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
import {
  type MapReadyEvent,
  GoogleMap,
} from "@nativescript/google-maps";

function onMapReady(args: MapReadyEvent) {
  const map = args.map as GoogleMap;
}
</script>

<template>
  <Frame>
    <Page>
      <ActionBar title="NativeScript Google Maps Tutorial" />

      <StackLayout>
        <MapView @ready="onMapReady" />
      </StackLayout>
    </Page>
  </Frame>
</template>

<script lang="ts" setup>
  import { MapReadyEvent, GoogleMap } from "@nativescript/google-maps";

  function onMapReady(args: MapReadyEvent) {
    console.log("Map is ready!");

    // Access the map instance
    const map: GoogleMap = args.map;
  }
</script>

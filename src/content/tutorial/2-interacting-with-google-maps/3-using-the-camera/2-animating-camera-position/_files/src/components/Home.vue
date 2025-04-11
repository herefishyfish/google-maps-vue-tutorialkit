<script lang="ts" setup>
import { MapReadyEvent, GoogleMap } from "@nativescript/google-maps";

function onMapReady(args: MapReadyEvent) {
  const map = args.map as GoogleMap;
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
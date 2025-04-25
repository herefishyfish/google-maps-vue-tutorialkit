<script lang="ts" setup>
import { ref, useTemplateRef } from "nativescript-vue";
import { alert, Image } from "@nativescript/core";
import { type CameraPositionEvent, type MapReadyEvent, GoogleMap, Marker } from "@nativescript/google-maps";
import { uberStyle } from "./uber-style";

let map: GoogleMap | null = null;
let marker: Marker | null = null;

const editing = ref(false);
const moving = ref(false);
const pin = useTemplateRef('pin');

function onMapReady(args: MapReadyEvent) {
  map = args.map as GoogleMap;

	marker = map.addMarker({
		position: {
			lat: 0,
			lng: 0,
		},
		title: "Pickup location",
	});

  // Set the map style to Uber style.
  map.mapStyle = uberStyle;
}

function toggleEditing() {
  if (editing.value) {
    // Save: update marker position to current camera center.
    if (map && marker) {
      marker.position = map.cameraPosition.target;
      alert(
        `Marker updated to Latitude: ${marker.position.lat}, Longitude: ${marker.position.lng}`
      );
    }
    editing.value = false;
  } else {
    // Edit: enable the editing state so that the image becomes visible.
    editing.value = true;
  }
}

function onCameraPosition(args: CameraPositionEvent) {
  const pinElement = pin.value.nativeView;

  if (args.state === "idle" && editing.value) {
    moving.value = false;
    pinElement.animate({
      rotate: 0,
      duration: 300,
      curve: "easeInOut",
    });
  } else if (args.state === "start" && editing.value) {
    moving.value = true;
    pinElement.animate({
      rotate: 45,
      duration: 300,
      curve: "easeInOut",
    });
  }
}
</script>

<template>
  <Page>
    <ActionBar title="NativeScript Google Maps Tutorial" />
    <GridLayout rows="* auto">
      <MapView @ready="onMapReady" @cameraPosition="onCameraPosition" />
      <Image
        ref="pin"
        src="https://ns-vue-maps-tutorial.web.app/pin.png"
        :visibility="editing ? 'visible' : 'collapse'"
      />
      <Button
        :text="editing ? 'Save' : 'Edit'"
				:isEnabled="!moving"
        @tap="toggleEditing"
        row="1"
      />
    </GridLayout>
  </Page>
</template>
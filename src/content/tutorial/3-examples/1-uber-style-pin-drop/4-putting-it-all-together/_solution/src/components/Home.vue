<script lang="ts" setup>
import { ref } from "nativescript-vue";
import { alert } from "@nativescript/core";
import { MapReadyEvent, GoogleMap, Marker } from "@nativescript/google-maps";

let map: GoogleMap | null = null;
let marker: Marker | null = null;

const editing = ref(false);

function onMapReady(args: MapReadyEvent) {
  map = args.map as GoogleMap;

	marker = map.addMarker({
		position: {
			lat: 0,
			lng: 0,
		},
		title: "Pickup location",
	})
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
</script>

<template>
  <Page>
    <ActionBar title="NativeScript Google Maps Tutorial" />
    <GridLayout rows="* auto">
      <MapView @ready="onMapReady" />
      <Image
        src="https://d81gju9fq33lb.cloudfront.net/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcm9zc2hhaXJDb2RlIjoiQ1NHTy15aVhtMy1WUllWNi1QU0dyZi1aRXlEYy03Sk5NQiIsIndpZHRoIjoxMjgsImhlaWdodCI6MTI4fQ.l41XXX87TjVThHcQ3f0ecA4qWudE-t_7kXed2ibKGb8"
        :visibility="editing ? 'visible' : 'collapse'"
      />
      <Button
        :text="editing ? 'Save' : 'Edit'"
        @tap="toggleEditing"
        row="1"
      />
    </GridLayout>
  </Page>
</template>
---
type: lesson
title: Generating an API Key Using Google Cloud
editor: false
---

# Generating an API Key Using Google Cloud

This tutorial will guide you through the process of generating an API key for Google Maps, which is essential for integrating Google Maps into your own applications. However if you are using the NativeScript Preview app, you can skip this step as the app already has the Google Maps API configured.

#### If you plan to continue with the tutorial on nativescript preview click [here](/1-introduction-and-setup/2-building-your-map/1-registering-the-map-view) to skip the native setup.  
<!-- GOTO Next -->


## Generating an API Key

To integrate the Google Maps API into your application, you'll need to generate an API key. Follow these steps:

1. Visit the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing one.
3. Enable the required Google Maps APIs by searching for "Maps" in the API Library and activating the appropriate services (e.g., Maps SDK for Android, Maps SDK for iOS).
4. Navigate to the "Credentials" section in the sidebar.
5. Click on "Create credentials" and select "API key" from the dropdown.
6. Your new API key will be displayed. Make sure to note it down for later configuration.

### Security Reminder

To safeguard your application, restrict your API key's usage by setting appropriate limits in the Google Cloud Console.

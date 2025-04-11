---
type: lesson
title: Using API Key in iOS
editor: false
---

# Using API Key in iOS

To use the API key in your iOS application, you need to add it to the `App_Resources/iOS/Info.plist` file. Open the `Info.plist` file and add the following entry:

```xml
<dict>
  <key>TNSGoogleMapsAPIKey</key>
  <string>yourKey</string>
</dict>
```

Replace `yourKey` with the actual API key you obtained from the Google Cloud Console.
This entry is used by the NativeScript Google Maps plugin to authenticate your application with the Google Maps service.

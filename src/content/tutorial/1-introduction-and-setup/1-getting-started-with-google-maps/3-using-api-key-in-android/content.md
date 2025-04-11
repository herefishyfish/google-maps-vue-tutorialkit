---
type: lesson
title: Using API Key in Android
editor: false
---

# Using API Key in Android 

To use the API key in your Android application, you need to add it to the `AndroidManifest.xml` file. Open the `App_Resources/Android/AndroidManifest.xml` file and add the following entry inside the `<application>` tag:

```xml
<application
  android:name="com.tns.NativeScriptApplication"
  android:allowBackup="true"
  android:icon="@mipmap/ic_launcher"
  android:label="@string/app_name"
  android:theme="@style/AppTheme"
  android:hardwareAccelerated="true">

  <meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="yourKey"/>
</application>
```

Replace `yourKey` with the actual API key you obtained from the Google Cloud Console. This entry is used by the NativeScript Google Maps plugin to authenticate your application with the Google Maps service.

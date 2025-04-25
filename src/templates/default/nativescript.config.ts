import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.tutorialkit',
  appPath: 'src',
  appResourcesPath: 'app_resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  },
} as NativeScriptConfig;

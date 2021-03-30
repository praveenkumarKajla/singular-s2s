export interface SingularEventData {
  n: string; // event name
  a?: string; // API_KEY
  p: Platform; // Platform Android or iOS.
  i: PackageIdentifier; // Package Name (Android) or Bundle ID (iOS) of your application.
  ip: string; // Ip of the event
  aifa?: string; // For Android.Lowercase raw advertising "8ecd7512-2864-440c-93f3-a3cabe62525b";
  andi?: string; //  Lower-case raw android ID "fc8d449516de0dfb"
  idfa?: string; // For iOS apps only. Upper-case raw advertising ID with dashes.
  idfv?: string;
  // optional params
  use_ip?: number;
  utime?: number; // Time of the event in UNIX time.  1483228800;
  umilisec?: number; // Time of the event in milliseconds UNIX time.
  custom_user_id?: string; // User ID  "123456789abcd";
  e?: string; // event data stringified
  // etc. consult https://support.singular.net/hc/en-us/articles/360048588672-Server-to-Server-S2S-API-Endpoint-Reference?navigation_side_bar=true
  // Event Notification Endpoint
}

export enum Platform {
  ANDROID = 'Android',
  IOS = 'iOS',
}

export type PackageIdentifier = string;

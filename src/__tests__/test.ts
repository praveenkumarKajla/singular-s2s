import { Platform, SingularEventData } from '../@typeroot/singular';
import  Singular from '../index';
const eventData: SingularEventData = {
  n: "event_name",
  e: JSON.stringify({"hello": "world"}), //event data
  p: Platform.ANDROID, // Android or iOS
  i: "com.testapp", // your app package name like com.company.com
  ip: "127.0.0.1", // user iP
  utime: Math.floor(Date.now() / 1000),
  umilisec: Date.now(),
  custom_user_id: "ABCDEFGHIJ",
};
test('NO andi ID ', () => {
  const singular = new Singular("API_KEY");
  expect(singular.sendEvent(eventData)).resolves.toMatchObject({"error": "andi ID required", "response": null})
});

test('Wrong Api Key ', () => {
  eventData.andi = "VHCGFJBJKHNJGH%GTJH"
  const singular = new Singular("API_KEY");
  expect(singular.sendEvent(eventData)).resolves.toMatchObject(  {
    "error": null,
     "response":  {
       "status": "ok",
     }})
    })
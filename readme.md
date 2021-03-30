# Singular-S2S
npm package to send events from server based on user interaction et. al.

[Singular Docs](https://support.singular.net/hc/en-us/articles/360048588672-Server-to-Server-S2S-API-Endpoint-Reference?navigation_side_bar=true)
## Installation

```bash
npm install singular-s2s
```

## Usage example

```javascript
import Singular from "singular-s2s";

const eventData: any = {
      n: "event_name",
      e: JSON.stringify(payload), //event data
      p: platform, // Android or iOS
      i: packageIdentifier, // your app package name like com.company.com
      ip: IP, // user iP
      utime: epochInSeconds(),
      umilisec: getEpoch(),
      custom_user_id: userEvent.user_uid,
    };
if (platform === Platform.ANDROID) {
    eventData.andi = headers["device-id"].toLowerCase();
}
if (platform === Platform.IOS) {
    eventData.idfv = headers["device-id"].toUpperCase();
}
const singular = new Singular(SINGULAR_CONFIG.API_KEY);
// code is executed with try catch block so check if error
const {error, response} = await singular.sendEvent(eventData); 
```


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Author

<table>
  <tr>
  <td align="center">
  <a href="https://github.com/praveenkumarKajla">
  <img src="https://avatars.githubusercontent.com/u/46952981?s=460&u=34941f4c5f5ff8d61e5589faf7cb136ab85f0287&v=4" width="100" alt="praveenkumarKajla"/>
  <br>
  <sub>
  <b>praveenkumarKajla</b>
  </sub>
  </a>
  </td>
  </tr>
</table>

## Contributors

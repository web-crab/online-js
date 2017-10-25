# Online-js
Checking internet connection.

## Browser Support
![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 8+ ✔ |

[![Browser Matrix](https://saucelabs.com/open_sauce/build_matrix/axios.svg)](https://saucelabs.com/u/axios)

## Installing
``` bash
npm i axios online-js --save
# or
yarn add axios online-js
```

## Usage
Basic
``` javascript
import Online from 'online-js'

const statusChecker = Online()

const callback = (status) => {
  if (status === true) {
    console.info('Connected!')
  } else {
    console.warn('Disconnected!')
  }
}

statusChecker.onUpdateStatus(callback)
```


Advanced
``` javascript
// Options with default values
const options = {
  url: 'favicon.ico',  // Link on your site. Cross-domain requests not supported
  delay: 2,            // Delay between checking in seconds
  startOnload: true    // Start checking after page load
}

const statusChecker = Online(options)

// Add listeners
statusChecker.onUpdateStatus(callback1, callback2, callback3...)

// Removing listeners
statusChecker.removeListener(callback)  // Single
statusChecker.removeAllListeners()      // All

// Methods
statusChecker.check(callback)  // Single checking
statusChecker.start()          // Start checking. Don't forget to add a listener
statusChecker.stop()           // Stop checking
```


Using with Vue.js
``` javascript
import Vue from 'vue'
import Online from 'online-js'

Vue.prototype.$online = Online({
  url: 'imgs/check-connect.jpg'
})

new Vue({
  created() {
    this.$online.onUpdateStatus(status => {
      alert(status ? 'Connected' : 'Disconnected')
    })
  }
})

```

## License
MIT
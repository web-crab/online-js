import { create } from 'axios';
const  { get } = create({ timeout: 1000 });

export default (options = {}) => {

  options = Object.assign({
    url: 'favicon.ico',
    delay: 2,
    startOnLoad: true
  }, options);

  let currentStatus = null
  let timer = null
  let listeners = []

  const online = {
    checkStatus(cb) {
      get(options.url)
      .then(() => true, err => Boolean(err.code || err.request.status))
      .then(status => {
        if (cb && typeof cb === 'function') cb(status)
        if (status !== currentStatus) {
          currentStatus = status
          listeners.forEach(fn => fn(status))
        }
      })
    },
    onUpdateStatus(...fns) {
      fns.forEach(fn => {
        if (typeof fn === 'function') listeners.push(fn)
      })
    },
    removeListener(fn) {
      const index = listeners.indexOf(fn)
      if (index !== -1) listeners.splice(index, 1)
    },
    removeAllListeners() {
      listeners.length = 0
    },
    start() {
      timer = setInterval(online.checkStatus, options.delay * 1000)
    },
    stop() {
      clearInterval(timer)
    }
  }

  if (options.startOnLoad) {
    online.checkStatus()
    online.start()
  }

  return online
}
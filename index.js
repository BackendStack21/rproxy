'use strict'

const gateway = require('fast-gateway')
const PORT = process.env.PORT || 8080

const proxy = gateway(require('./src/config'))
proxy.start(PORT).then(() => {
  console.log(`Proxy server listening on port ${PORT}`)
})

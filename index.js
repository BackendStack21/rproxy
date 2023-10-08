'use strict'
const config = require('./src/config')

const gateway = require('fast-gateway')
const PORT = process.env.PORT || 8080

const proxy = gateway(config)
proxy.start(PORT).then(() => {
  console.log(`Proxy server listening on port ${PORT}`)
})

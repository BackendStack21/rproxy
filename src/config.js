module.exports = {

  middlewares: [
    require('cors')()
  ],

  routes: [{
    prefix: '/api',
    target: 'https://httpbin.org'
  }]

}
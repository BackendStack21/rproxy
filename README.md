# rproxy
HTTP reverse proxy implementation based on Node.js and Docker. 

`rproxy` is based on `fast-gateway` and is a ready to use Docker container image for implementing reverse proxies or API Gateways.
> See: https://github.com/BackendStack21/fast-gateway


## Usage

### config.js
```js
module.exports = {

  middlewares: [
    require('cors')()
  ],

  routes: [{
    prefix: '/api',
    target: 'https://httpbin.org'
  }, {
    proxyType: 'websocket',
    prefix: '/echo',
    target: 'ws://ws.ifelse.io'
  }]

}
```

### Running locally using Docker
```bash
docker run --rm -p 8080:8080 -v $(pwd)/config.js:/rproxy/src/config.js kyberneees/rproxy:latest
```

### Dockerfile
```Dockerfile
FROM kyberneees/rproxy:latest
COPY config.js ./src
```

## Configuration
### Environment values
- `PORT`: Indicates the running port of the HTTP server. Defaults to: `8080`

### Installing custom NPM modules
In order to use custom NPM modules, those have to be installed through your `Dockerfile`. For example:

```Dockerfile
FROM kyberneees/rproxy:latest

RUN npm i morgan 
```

Modules installed by default:
- cors: https://www.npmjs.com/package/cors
- http-cache-middleware: https://www.npmjs.com/package/http-cache-middleware 

# homework

### Configure docker
##### BUILD:
```
docker build -t droids_shop_frontend .
```
##### RUN:
```
docker run -it -p 8080:8080 --rm --name droids_shop droids_shop_frontend
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

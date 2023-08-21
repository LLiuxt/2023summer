# chatgpt

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

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


计算属性允许你基于`data`中的数据进行计算，并将结果缓存起来，只有当依赖的数据发生变化时才会重新计算。这就是你需要的不再改变的特性。 ```vue <template> <div> <p>{{ computedValue }}</p> </div> </template> <script> export default { data() { return { originalData: 10, }; }, computed: { computedValue() { // 在这里对数据进行计算 return this.originalData```

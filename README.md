# Express Webpack Starter


## Configuration Notes

### Babel For Jest
- [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime#with-a-configuration-file-recommended) is used to resolve: 
`ReferenceError: regeneratorRuntime is not defined`

### Webpack Config

#### Plugins
- `"global.GENTLY"` is set `false` to resolve this [error](https://github.com/felixge/node-gently/issues/22) thrown by webpack `Critical dependency: require function is used in a way in which dependencies cannot be statically extracted`
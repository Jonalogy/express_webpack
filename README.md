# Express Webpack Starter


## Configuration Notes

### Babel
- [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime#with-a-configuration-file-recommended) is used to resolve: 
`ReferenceError: regeneratorRuntime is not defined`

### Jest
- Configuring aliases on webpack is only part of the job done. Test files will not get get bundled so you'll need to use Jest's `moduleNameMapper` to recognise the aliases as well. See this [article](https://alexjover.com/blog/enhance-jest-configuration-with-module-aliases/) to learn how to do so.

### Webpack Config

#### Plugins
- `"global.GENTLY"` is set `false` to resolve this [error](https://github.com/felixge/node-gently/issues/22) thrown by webpack `Critical dependency: require function is used in a way in which dependencies cannot be statically extracted`
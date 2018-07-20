module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'PannellumReact',
      externals: {
        react: 'React'
      }
    }
  }
}

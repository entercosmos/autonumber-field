module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'AutonumberField',
      externals: {
        react: 'React'
      }
    }
  }
}

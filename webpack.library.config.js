const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    worker: path.join(__dirname, './src/browser/src/library.js')
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'cordova-plugin-qrscanner-lib.min.js',
    library: 'QRScanner',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
};

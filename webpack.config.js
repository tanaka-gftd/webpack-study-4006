module.exports = {
  context: __dirname + '/app',  //クライアントの JavaScript が含まれるディレクトリ
  entry: './entry',  //依存関係を読み解く最初の入り口となる JavaScript ファイル名(.jsは省略)
  
  //まとめられた JavaScript の出力ディレクトリと、 出力される JavaScript 名 bundle.js の設定
  output: {
    path: __dirname + '/public/javascripts',
    filename: 'bundle.js'
  },


  mode: 'none',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  //polyfill の設定です
  //Node.js 由来のモジュールに、同じ機能をもち、ブラウザでも動くモジュールを対応させる
  resolve: {
    fallback: {
      buffer: require.resolve('buffer'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('crypto-browserify')
    }
  }
}
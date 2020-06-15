const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './app/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    module : {
        rules : [
			{test : /\.(js)$/, use:'babel-loader'},
			{
				test: /\.css$/,
				use: [
				  'style-loader',
				  {
					loader: 'css-loader',
					options: {
					  importLoaders: 1,
					  modules: true
					}
				  }
				]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		],
    },
	mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'app/index.html'
        })
	],
	resolve: {
		extensions: ['.js', '.jsx']
	}
}
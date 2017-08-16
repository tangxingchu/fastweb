const path = require('path');
const webpack = require('webpack');
const ROOT_PATH = path.resolve(__dirname);
const PORT = 3010;

module.exports = {
	devtool: "source-map",
    entry: ROOT_PATH + '/app/app.js',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        filename: 'app.bundle.js',
        path: path.join(__dirname, 'build'),
		publicPath: '/assets/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-0']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.json$/,
                use: {
                    loader: 'json-loader'
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    },
	devServer: {
		contentBase: path.join(__dirname, 'app'),
		historyApiFallback: true,
		hot: true,
		inline: true,
		host: '0.0.0.0',
		port: PORT
	}
};
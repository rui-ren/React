
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'main.js',
	},
	
	module: {
		// here setup the rule.
		rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader",
		},
		{
			test: /\.html$/,
			use: [{loader: "html-loader"}],
		},
		{
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader']
		}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/html/index.html",
			filename: "./index.html",
		})
	]
}


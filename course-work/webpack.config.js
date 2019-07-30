const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
	entry: {
		app: "./src/index.js"
	},
	output: {
		filename: "[name].js", // name в данном случае равняется bundle
		path: path.resolve(__dirname, "./dist"), // точка выхода ищется от корня диска, поэтому помогает path
		publicPath: "/dist" // для dev-servera
	},
	devServer: {
		overlay: true
	},
	module: {
		rules:[{
			test: /\.js$/,
			exclude:[
				path.resolve(__dirname, "src")
			],
			loader: "babel-loader"
		}, {
			test: /\.css$/,
			exclude: /node_modules/,
			use: [
				"style-loader",
				MiniCssExtractPlugin.loader,
				"css-loader",
				{
					loader: "postcss-loader",
					options: {
						config: { path: "./postcss.config.js" }
					}
				}
			]
		}]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/[name].css"
		})
	]
}
var path = require("path");
var webpack = require("@rspack/core");

/** @type {import("@rspack/core").Configuration} */
module.exports = {
	module: {
		rules: [
			{
				test: /a\.js$/,
				use: ["./queryloader?lions=roar"]
			}
		]
	},
	plugins: [
		new webpack.ContextReplacementPlugin(
			/context-replacement.d$/,
			path.resolve(__dirname, "modules?cats=meow"),
			{
				a: "./a"
			}
		)
	]
};

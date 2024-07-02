/** @type {import("@rspack/core").Configuration} */
module.exports = {
	entry: {
		index: {
			import: ["./index.js"]
		}
	},
	output: {
		publicPath: "/base"
	},
	builtins: {
		html: [
			{
				favicon: "favicon.ico"
			}
		]
	}
};

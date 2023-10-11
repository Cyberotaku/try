// module.exports = {
// 	root: true,
// 	parserOptions: {
// 		sourceType: 'module'
// 	},
// 	parser: 'vue-eslint-parser',
// 	extends: ['plugin:vue/vue3-essential', 'plugin:vue/vue3-strongly-recommended', 'plugin:vue/vue3-recommended'],
// 	env: {
// 		browser: true,
// 		node: true,
// 		es6: true
// 	},
// 	rules: {
// 		'no-console': 'off',
// 		'comma-dangle': [2, 'never'] //禁止使用拖尾逗号
// 	}
// }


module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		"plugin:vue/vue3-essential",
		"@vue/eslint-config-typescript/recommended"
	],
	overrides: [
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: "./tsconfig.json"
	},
	plugins: [
		"vue"
	],
	rules: {
		quotes: ["warn", "double"],
		semi: "error",
		"vue/multi-word-component-names": "off",
		"@typescript-eslint/ban-ts-comment": "off",
		"no-trailing-spaces": "error"
	}
};
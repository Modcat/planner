module.exports = {
	mode: 'spa',
	head: {
		title: 'Planner',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Meta description' }
		]
	}, // Headers of the page
	loading: true, // Disable default loading bar
	build: {
		extend (config, { isDev, isClient }) {
			const urlLoader = config.module.rules.find(rule => {
				return rule.test.toString().indexOf('svg') !== -1
			})

			urlLoader.test = /\.(png|jpe?g|gif)$/

			config.module.rules.push({
				test: /\.svg$/,
				oneOf: [
					{
						resourceQuery: /inline/, // foo.svg?inline
						loader: 'vue-svg-loader',
						options: {
							// optional [svgo](https://github.com/svg/svgo) options
							svgo: {
								plugins: [
									{ removeDoctype: true },
									{ removeComments: true },
									{ removeViewBox: false }
								]
							}
						}
					},
					{
						loader: 'url-loader',
						options: {
							limit: 1000, // 1KO
							name: 'img/[name].[hash:7].[ext]'
						}
					}
				],
				exclude: /(node_modules)/
			})
			
			if (isDev && isClient) {
				// Run ESLint on save
				/*config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})*/
			}
			// Extend only webpack config for client-bundle
			if (isClient) { config.target = 'electron-renderer' }
		}
	},
	dev: process.env.NODE_ENV === 'DEV',
	css: [
		'@/assets/css/color.scss',
		'@/assets/css/global.scss',
		'@/assets/css/materialize.scss'
	]
}

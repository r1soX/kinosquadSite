const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withPlugins = require('next-compose-plugins')
require('dotenv').config()

const nextConfig = {
	images: {
		domains: [
			'st.kp.yandex.net',
			'avatars.mds.yandex.net',
			'www.themoviedb.org',
		],
	},
	env: {
		API_KEY: 'R8SNTPN-FPJMYPJ-GYJMPJF-AHJKP2P',
		API_URL: 'https://api.kinopoisk.dev',
	},
}
module.exports = withPlugins(
	[
		[
			withPWA,
			{
				pwa: {
					dest: 'public',
					disable: process.env.NODE_ENV === 'development',
					runtimeCaching,
				},
			},
		],
	],
	nextConfig
)

/** @type {import('next').NextConfig} */

module.exports = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  env: {
		API_BASE_URL: process.env.API_BASE_URL,
	},
}

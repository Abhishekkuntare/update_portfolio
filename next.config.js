module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: ''
  }
}
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({})

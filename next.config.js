const withImages = require('next-images');
const getRoutes = require('./routes');

const isProd = process.env.NODE_ENV === 'production';
const isStaging = process.env.NODE_ENV === 'staging';

module.exports = withImages({
  webpack(config, options) {
    return config;
  },
  assetPrefix: () => {
    if (isProd) {
      return 'https://d2sme3l3qt7hwa.cloudfront.net';
    } else if (isStaging) {
      return 'https://d3m2aicst54pyg.cloudfront.net';
    }
    return '';
  },
  exportPathMap: getRoutes,
  useFileSystemPublicRoutes: false
});

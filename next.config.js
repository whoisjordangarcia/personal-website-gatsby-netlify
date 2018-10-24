const withImages = require('next-images');
const getRoutes = require('./routes');

module.exports = withImages({
  webpack(config, options) {
    return config;
  },
  exportPathMap: getRoutes,
  useFileSystemPublicRoutes: false
});

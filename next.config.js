const withImages = require('next-images');
const getRoutes = require('./routes');

module.exports = withImages({
  exportPathMap: getRoutes,
  useFileSystemPublicRoutes: false
});

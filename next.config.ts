import withImages from 'next-images';

import { routes } from './routes';

module.exports = withImages({
  exportPathMap: routes,
  useFileSystemPublicRoutes: false
});

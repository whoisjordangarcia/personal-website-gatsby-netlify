const express = require('express');
const next = require('next');
const { parse } = require('url');

const isProd = process.env.NODE_ENV === 'production';
<<<<<<< Updated upstream
const isStaging = process.env.NODE_ENV === 'staging';

const dev = !isProd || !isStaging;

const PORT = process.env.PORT || 3000;

const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

const getRoutes = require('./routes');

=======
const PORT = process.env.PORT || 3000;

const app = next({ dir: '.', dev: !isProd });
const handle = app.getRequestHandler();

const getRoutes = require('./routes');

>>>>>>> Stashed changes
const routes = getRoutes();

app.prepare().then(() => {
  const server = express();

  server.get('/robots.txt', (req, res) =>
    res.status(200).sendFile('robots.txt', {
      root: __dirname + '/static/',
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8'
      }
    })
  );

  server.get('/sitemap.xml', (req, res) =>
    res.status(200).sendFile('sitemap.xml', {
      root: __dirname + '/static/',
      headers: {
        'Content-Type': 'text/xml;charset=UTF-8'
      }
    })
  );

  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query = {} } = parsedUrl;
    const route = routes[pathname];

<<<<<<< Updated upstream
    let assetPrefix = '';
    if (isProd) {
      assetPrefix = 'https://static.jordangarcia.me';
    } else if (isStaging) {
      assetPrefix = 'https://de54hm83ewhv0.cloudfront.net';
    }
    app.setAssetPrefix(assetPrefix);
=======
    if (process.env.ASSET_PREFIX) {
      app.setAssetPrefix(process.env.ASSET_PREFIX);
    }
>>>>>>> Stashed changes

    if (route) {
      return app.render(req, res, route.page, query);
    }
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    return handle(req, res);
  });

  server.listen(PORT, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});

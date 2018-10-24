import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { FontStyles } from 'templates';

import { GA_TRACKING_ID } from '../constants';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          {this.props.styleTags}
          <Normalize />
          <FontStyles />

          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href="/static/man-technologist.png" />
          <link type="text/plain" rel="author" href="/static/humans.txt" />
          <meta property="og:title" content="Who is Jordan Garcia?" />
          <meta
            property="og:description"
            content="Senior Software Engineer at @todaytix. Currently residing in New York, New York."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://arickho.com/" />
          <meta property="og:site_name" content="Who is Jordan Garcia?" />
          <meta property="og:image" content="/static/og.png" />
          <meta property="og:image:width" content="1280" />
          <meta property="og:image:height" content="800" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:locale" content="en_US" />
          <meta
            name="description"
            content="Senior Software Engineer at @todaytix. Currently residing in New York, New York."
          />
          <meta
            name="keywords"
            content="development, web, arickho, jordan, garcia, javascript, react, front end,new york"
          />
          <meta itemProp="name" content="Who is Jordan Garcia?" />
          <meta
            itemProp="description"
            content="Senior Software Engineer at @todaytix. Currently residing in New York, New York"
          />
          <meta itemProp="image" content="/static/og.png" />
          <meta itemProp="jobTitle" content="Senior Software Engineer" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://arickho.com/" />
          <meta name="twitter:site" content="@whoismrgarcia" />
          <meta name="twitter:creator" content="@whoismrgarcia" />
          <meta name="twitter:title" content="Who is Jordan Garcia?" />
          <meta
            name="twitter:description"
            content="Senior Software Engineer at @todaytix. Currently residing in New York, New York."
          />
          <meta name="twitter:image:src" content="/static/og.png" />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${GA_TRACKING_ID}');`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

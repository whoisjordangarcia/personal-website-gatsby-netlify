import React from 'react';
import PropTypes from 'prop-types';

const HeaderTags = props => (
  <React.Fragment>
    <meta name="theme-color" content="#000000" />
    <link rel="shortcut icon" href={props.shortIcon} />
    <link type="text/plain" rel="author" href={props.humansText} />

    <meta property="og:title" content={props.title} />
    <meta property="og:description" content={props.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={props.url} />
    <meta property="og:site_name" content={props.title} />
    <meta property="og:image" content={props.imageUrl} />
    <meta property="og:image:width" content={props.imageWidth} />
    <meta property="og:image:height" content={props.imageHeight} />
    <meta property="og:image:type" content={props.imageType} />
    <meta property="og:locale" content={props.locale} />

    <meta name="description" content={props.description} />
    <meta name="keywords" content={props.keywords} />

    <meta itemProp="name" content={props.name} />
    <meta itemProp="description" content={props.description} />
    <meta itemProp="image" content={props.imageUrl} />
    <meta itemProp="jobTitle" content={props.jobTitle} />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:url" content={props.url} />
    <meta name="twitter:site" content={props.twitterHandle} />
    <meta name="twitter:creator" content={props.twitterHandle} />
    <meta name="twitter:title" content={props.title} />
    <meta name="twitter:description" content={props.description} />
    <meta name="twitter:image:src" content={props.imageUrl} />
  </React.Fragment>
);

HeaderTags.propTypes = {
  description: PropTypes.string,
  humansText: PropTypes.string,
  imageHeight: PropTypes.string,
  imageType: PropTypes.string,
  imageUrl: PropTypes.string,
  imageWidth: PropTypes.string,
  jobTitle: PropTypes.string,
  keywords: PropTypes.string,
  locale: PropTypes.string,
  shortIcon: PropTypes.string,
  siteName: PropTypes.string,
  title: PropTypes.string,
  twitterHandle: PropTypes.string,
  url: PropTypes.string
};

export default HeaderTags;

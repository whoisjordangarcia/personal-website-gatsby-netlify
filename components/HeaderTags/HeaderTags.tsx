import React from 'react';

interface IProps {
  description: string;
  humansText: string;
  imageHeight: string;
  imageType: string;
  imageUrl: string;
  imageWidth: string;
  jobTitle: string;
  keywords: string;
  locale: string;
  shortIcon: string;
  siteName: string;
  title: string;
  twitterHandle: string;
  url: string;
}

const HeaderTags: React.FunctionComponent<IProps> = props => (
  <>
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

    <meta itemProp="name" content={props.siteName} />
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
  </>
);

export default HeaderTags;

import GoogleAnalyticsGtag from '@redux-beacon/google-analytics-gtag';
import { eventsMap } from './eventsMap';
import { createMiddleware } from 'redux-beacon';
import { GA_TRACKING_ID } from 'store/constants';

const ga = GoogleAnalyticsGtag(GA_TRACKING_ID);

export const gaMiddleware = createMiddleware(eventsMap, ga);

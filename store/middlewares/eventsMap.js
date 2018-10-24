import { trackEvent } from '@redux-beacon/google-analytics-gtag';
export const eventsMap = {
  DOWNLOAD_CLICKED: trackEvent(action => ({
    category: 'CV',
    action: 'click',
    label: action.target
  })),
  EXTERNAL_CLICKED: trackEvent(action => ({
    category: 'EXTERNAL',
    action: 'click',
    label: action.target
  }))
};

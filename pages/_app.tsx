import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import React from 'react';
import withRedux from 'next-redux-wrapper';

import { reducer } from 'store';

const makeStore = (initialState, options) => createStore(reducer, initialState);

interface IProps {
  store: Store;
}

class MyApp extends App<IProps> {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);

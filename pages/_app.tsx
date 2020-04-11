import React from 'react'; 
import { ApolloProvider } from '@apollo/react-hooks';

import withData from '../lib/apollo-client';

function App({ Component, pageProps, apollo }) { 
  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

// Wraps all components in the tree with the data provider
export default withData(App);
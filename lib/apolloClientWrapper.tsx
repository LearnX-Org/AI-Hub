'use client';
import { ApolloLink, HttpLink } from '@apollo/client';
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';
import React from 'react'; // Required for JSX

const makeClient = () => {
  // Assuming `NextSSRApolloClient` type is available from imports
  const httpLink = new HttpLink({
    uri: process.env.GRAPHQL_ENDPOINT,
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
};

interface ApolloWrapperProps {
  children: React.ReactNode;
}

export function ApolloWrapper({
  children,
}: ApolloWrapperProps): React.ReactElement {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}

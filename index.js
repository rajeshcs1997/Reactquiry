import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

const RNQuiry = () => (
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)

AppRegistry.registerComponent(appName, () => RNQuiry);

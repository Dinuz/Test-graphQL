import Vue from "vue";
import VueApollo from "vue-apollo";
import defaultOptions from "./config";
import { createApolloClient } from "vue-cli-plugin-apollo/graphql-client";

// Install the vue plugin
Vue.use(VueApollo);

// Call this in the Vue app file
const createProvider = (options = {}) => {
  // Create apollo client
  const { apolloClient, wsClient } = createApolloClient({
    ...defaultOptions,
    ...options
  });
  apolloClient.wsClient = wsClient;

  // Create vue apollo provider
  return new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
      $query: {
        // fetchPolicy: 'cache-and-network',
      }
    },
    errorHandler(error) {
      // eslint-disable-next-line no-console
      console.log(
        "%cError",
        "background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;",
        error.message
      );
    }
  });
};

export { createProvider };

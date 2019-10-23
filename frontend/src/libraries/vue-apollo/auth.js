/* AUTH - VUE-APOLLO */

import { AUTH_TOKEN } from "@/libraries/vue-apollo/constants";
import { restartWebsockets } from "vue-cli-plugin-apollo/graphql-client";

/**
 * @function onLogin
 * Manually call this when user log in.
 * @type {function}
 */
export async function onLogin(apolloClient, token) {
  if (typeof localStorage !== "undefined" && token) {
    localStorage.setItem(AUTH_TOKEN, token);
  }
  if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient);
  try {
    await apolloClient.resetStore();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(
      "%cError on cache reset (login)",
      "color: orange;",
      error.message
    );
  }
}

/**
 * @function onLogout
 * Manually call this when user log out.
 * @type {function}
 */
export async function onLogout(apolloClient) {
  if (typeof localStorage !== "undefined") {
    localStorage.removeItem(AUTH_TOKEN);
  }
  if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient);
  try {
    await apolloClient.resetStore();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(
      "%cError on cache reset (logout)",
      "color: orange;",
      error.message
    );
  }
}

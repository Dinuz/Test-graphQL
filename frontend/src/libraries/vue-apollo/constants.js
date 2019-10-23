/* CONSTANTS - VUE-APOLLO */

/**
 * @constant httpEndpoint
 * Define the HTTP endpoint for the graphql server.
 * @type {string}
 */
export const httpEndpoint =
  process.env.VUE_APP_GRAPHQL_HTTP || "http://localhost:4000/graphql";

/**
 * @constant AUTH_TOKEN
 * Define the Name of the localStorage item.
 * @type {string}
 */
export const AUTH_TOKEN = "apollo-token";

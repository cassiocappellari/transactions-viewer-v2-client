import Vue from "vue";
import VueApollo from "vue-apollo";
import { createApolloClient, restartWebsockets } from "vue-cli-plugin-apollo/graphql-client";

Vue.use(VueApollo);

const AUTH_TOKEN = "apollo-token";
const httpEndpoint = process.env.VUE_APP_GRAPHQL_HTTP || "http://localhost:3000/graphql";

const defaultOptions = {
	httpEndpoint,
	wsEndpoint: null,
	tokenName: AUTH_TOKEN,
	persisting: false,
	websocketsOnly: false,
	ssr: false,
	apollo: { 
		fetchOptions: {
			mode: "no-cors",
		},
	}
};

export function createProvider (options = {}) {
	const { apolloClient, wsClient } = createApolloClient({
		...defaultOptions,
		...options,
	});
	apolloClient.wsClient = wsClient;

	const apolloProvider = new VueApollo({
		defaultClient: apolloClient,
		defaultOptions: {
			$query: {},
		},
		errorHandler (error) {
			// eslint-disable-next-line no-console
			console.log("%cError", "background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;", error.message);
		},
	});

	return apolloProvider;
}

export async function onLogin (apolloClient, token) {
	if (typeof localStorage !== "undefined" && token) {
		localStorage.setItem(AUTH_TOKEN, token);
	}
	if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient);
	try {
		await apolloClient.resetStore();
	} catch (e) {
		// eslint-disable-next-line no-console
		console.log("%cError on cache reset (login)", "color: orange;", e.message);
	}
}

export async function onLogout (apolloClient) {
	if (typeof localStorage !== "undefined") {
		localStorage.removeItem(AUTH_TOKEN);
	}
	if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient);
	try {
		await apolloClient.resetStore();
	} catch (e) {
		// eslint-disable-next-line no-console
		console.log("%cError on cache reset (logout)", "color: orange;", e.message);
	}
}

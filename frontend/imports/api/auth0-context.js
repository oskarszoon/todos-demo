import React, { Component, createContext, useContext } from 'react';
import { Meteor } from 'meteor/meteor';
import createAuth0Client from '@auth0/auth0-spa-js';
import { loadTodos } from './actions';
import { store } from './store';
import { setAuthToken } from './apiUrls';


const {
  // eslint-disable-next-line camelcase
  domain, audience, client_id,
} = Meteor.settings.public.auth0;

export const Auth0Context = createContext();
export const useAuth0 = () => { return useContext(Auth0Context); };

// create a provider
export class Auth0Provider extends Component {
  state = {
    auth0Client: null,
    isLoading: true,
    isAuthenticated: false,
    user: null,
  };

  config = {
    domain,
    client_id,
    audience,
    redirect_uri: window.location.origin,
  };

  componentDidMount() {
    this.initializeAuth0();
  }

  // initialize the auth0 library
  initializeAuth0 = async () => {
    const auth0Client = await createAuth0Client(this.config);
    this.setState({ auth0Client });

    // check to see if they have been redirected after login
    if (window.location.search.includes('code=')) {
      return this.handleRedirectCallback();
    }

    const isAuthenticated = await auth0Client.isAuthenticated();
    const user = isAuthenticated ? await auth0Client.getUser() : null;

    if (isAuthenticated) {
      const token = await auth0Client.getTokenSilently();
      setAuthToken(token);
      store.dispatch(loadTodos);
    }

    this.setState({
      isLoading: false,
      isAuthenticated,
      user,
    });
  };

  handleRedirectCallback = async () => {
    const { auth0Client } = this.state;
    this.setState({ isLoading: true });

    await auth0Client.handleRedirectCallback();
    const user = await auth0Client.getUser();
    const token = await auth0Client.getTokenSilently();
    setAuthToken(token);

    this.setState({ user, isAuthenticated: true, isLoading: false });
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  render() {
    const {
      auth0Client, isLoading, isAuthenticated, user,
    } = this.state;
    const { children } = this.props;

    const configObject = {
      isLoading,
      isAuthenticated,
      user,
      loginWithRedirect: (...p) => { return auth0Client.loginWithRedirect(...p); },
      getTokenSilently: (...p) => { return auth0Client.getTokenSilently(...p); },
      getIdTokenClaims: (...p) => { return auth0Client.getIdTokenClaims(...p); },
      logout: (...p) => { return auth0Client.logout(...p); },
    };

    return (
      <Auth0Context.Provider value={configObject}>
        {children}
      </Auth0Context.Provider>
    );
  }
}

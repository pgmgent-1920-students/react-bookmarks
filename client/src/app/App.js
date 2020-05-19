import React, {} from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import { AuthProvider, FirebaseProvider, FirestoreProvider } from './services';
import { RouteWithLayout } from './utilities';

import { BaseLayout } from './layouts';
import { HomePage, MessagesPage, SignInPage, BookmarksPage, PokemonsPage} from './pages';

import * as Routes from './routes';

import './App.scss';

function App() {
  return (
    <div className="app">
      <FirebaseProvider>
        <AuthProvider>
          <FirestoreProvider>
            <Router basename={'/react-firebase'}>
              <Switch>
                <RouteWithLayout exact path={Routes.LANDING} layout={ BaseLayout } component={ HomePage }/>
                <Redirect from={Routes.HOME} to={Routes.LANDING}/>
                <RouteWithLayout exact path={Routes.MESSAGES} layout={ BaseLayout } component={ MessagesPage }/>
                <RouteWithLayout exact path={Routes.BOOKMARKS} layout={ BaseLayout } component={ BookmarksPage }/>
                <RouteWithLayout exact path={Routes.POKEMONS} layout={ BaseLayout } component={ PokemonsPage }/>
                <RouteWithLayout exact path={Routes.AUTH_SIGN_IN} layout={ BaseLayout } component={ SignInPage }/>
              </Switch>
            </Router>
          </FirestoreProvider>
        </AuthProvider>
      </FirebaseProvider>
    </div>
  );
}

export default App;

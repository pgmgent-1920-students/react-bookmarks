import React, { useState } from 'react';

import './App.scss';
import { SEOSearchForm, SEOSearchResult } from './components';
import { AuthProvider, ProxyProvider, FirebaseProvider, FirestoreProvider } from './services';

function App() {
  const [seoResult, setSEOResult] = useState();

  const handleSearchResult = (result) => {
    setSEOResult(result);
  };

  return (
    <div className="app">
      <FirebaseProvider>
        <AuthProvider>
          <FirestoreProvider>
            <ProxyProvider>
              <SEOSearchForm searchResult={handleSearchResult} />
              <SEOSearchResult data={seoResult} />
            </ProxyProvider>
          </FirestoreProvider>
        </AuthProvider>
      </FirebaseProvider>
    </div>
  );
}

export default App;

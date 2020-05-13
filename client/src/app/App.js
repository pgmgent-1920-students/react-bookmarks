import React, { useState } from 'react';
import './App.scss';
import { SEOSearchForm, SEOSearchResult } from './components';
import { ProxyProvider, FirebaseProvider, FirestoreProvider } from './services';

function App() {
  const [seoResult, setSEOResult] = useState();

  const handleSearchResult = (result) => {
    setSEOResult(result);
  };

  return (
    <div className="app">
      <FirebaseProvider>
        <FirestoreProvider>
          <ProxyProvider>
            <SEOSearchForm searchResult={handleSearchResult} />
            <SEOSearchResult data={seoResult} />
          </ProxyProvider>
        </FirestoreProvider>
      </FirebaseProvider>
    </div>
  );
}

export default App;

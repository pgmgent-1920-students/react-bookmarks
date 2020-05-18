import React, { useState } from 'react';

import './App.scss';
import { SEOSearchForm, SEOSearchResult } from './components';
import { AuthProvider, ProxyProvider, FirebaseProvider, FirestoreProvider,  useFirestore } from './services';
import { MessagesList } from './components/message';
import { BookmarksList } from './components/bookmark';

function App() {
  const [seoResult, setSEOResult] = useState();  

  const handleSearchResult = async (result) => {
    setSEOResult(result);
  };

  return (
    <div className="app">
      <FirebaseProvider>
        <AuthProvider>
          <FirestoreProvider>
            <div className="container">
              <MessagesList />
            </div>
            <ProxyProvider>
              <SEOSearchForm searchResult={handleSearchResult} />
              <SEOSearchResult data={seoResult} />
            </ProxyProvider>
            <div className="container">
              <BookmarksList />
            </div>
          </FirestoreProvider>
        </AuthProvider>
      </FirebaseProvider>
    </div>
  );
}

export default App;

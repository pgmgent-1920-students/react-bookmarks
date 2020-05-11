import React, { useState } from 'react';
import './App.scss';
import { SEOSearchForm, SEOSearchResult } from './components';
import { ProxyProvider } from './services';

function App() {
  const [seoResult, setSEOResult] = useState();

  const handleSearchResult = (result) => {
    setSEOResult(result);
  };

  return (
    <div className="app">
      <ProxyProvider>
        <SEOSearchForm searchResult={handleSearchResult} />
        <SEOSearchResult data={seoResult} />
      </ProxyProvider>
    </div>
  );
}

export default App;

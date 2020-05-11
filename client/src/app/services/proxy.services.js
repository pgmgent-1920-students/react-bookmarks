import React, { createContext, useContext } from 'react';

const ProxyContext = createContext();
const useProxyContext = () => useContext(ProxyContext);

const ProxyProvider = ({children}) => {
  const PROXY_SEO_URL = 'https://nodejs-nmd-crawler.herokuapp.com/proxy/seo?url=';

  const getSEOFromUrl = async (url) => {
    const response = await fetch(`${PROXY_SEO_URL}${url}`);
    const jsonData = await response.json();
    return jsonData;
  };

  return (
    <ProxyContext.Provider value={{getSEOFromUrl}}>
      {children}
    </ProxyContext.Provider>
  )
};

export {
  ProxyContext,
  ProxyProvider,
  useProxyContext,
}
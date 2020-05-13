import { default as React, useContext, useState, useEffect } from 'react';
import 'firebase/auth';

import { useFirebase } from './firebase.services';

const AuthContext = React.createContext(null);
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {
  const { app } = useFirebase();

  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  );
};

export {
  AuthContext,
  AuthProvider,
  useAuth,
};

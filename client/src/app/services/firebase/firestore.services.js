import React, { useContext, useEffect, useState } from 'react';
import 'firebase/firestore';

import { useFirebase } from './firebase.services';

const FirestoreContext = React.createContext(null);
const useFirestore = () => useContext(FirestoreContext);

const FirestoreProvider = ({children}) => {
  const { app } = useFirebase();
  const db = app.firestore();

  const getMessages = async () => {
    const query = db.collection('messages').orderBy('createdAt', 'desc');
    const querySnapshot = await query.get();
    const messages = querySnapshot.docs.map((doc) => {
      return {
        uid: doc.id,
        ...doc.data()
      }
    });
    return messages;
  };

  const getBookmarks = async () => {
    const query = db.collection('bookmarks').orderBy('createdAt', 'desc');
    const querySnapshot = await query.get();
    const bookmarks = querySnapshot.docs.map((doc) => {
      return {
        uid: doc.id,
        ...doc.data()
      }
    });
    return bookmarks;
  };

  const addBookmark = async (bookmark) => {
    const ref = db.collection('bookmarks');
    const docRef = await ref.add(bookmark);
    return docRef;
  };

  return (
    <FirestoreContext.Provider value={{addBookmark, getBookmarks, getMessages}}>
      {children}
    </FirestoreContext.Provider>
  );
};

export {
  FirestoreContext,
  FirestoreProvider,
  useFirestore,
};
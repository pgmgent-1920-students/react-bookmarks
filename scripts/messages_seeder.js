import { admin, app, db, generateTimestamps } from './firebase';

(async () => {
  // Create an empty array for messages
  const messages = [];

  // Get messages collection
  let collectionRef = db.collection('messages');
  // Loop through the documents of the collection
  const result = await collectionRef.get().then(querySnapshot => {
    querySnapshot.forEach(documentSnapshot => {
      const id = documentSnapshot.id;
      messages.push({
        id,
        ...documentSnapshot.data()
      });
    });
  });
  console.log(messages);
})();


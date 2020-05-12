import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';
import { admin, app, db, generateTimestamps } from './firebase';

(async () => {
  // Create an empty array for messages
  const messages = [];

  // Get messages collection
  let collectionRef = db.collection('messages');
  // Loop through the documents of the collection
  const result = await collectionRef.get().then(querySnapshot => {
    const size = querySnapshot.size;
    console.log(size);
    querySnapshot.forEach(documentSnapshot => {
      const id = documentSnapshot.id;
      messages.push({
        id,
        ...documentSnapshot.data()
      });
    });
  });
  console.log(messages);

  // 1. Add a document
  /*collectionRef.add({foo: 'bar'}).then(documentReference => {
    console.log(`Added document with name: ${documentReference.id}`);
  });*/

  // 2. Add a document
  /*let documentRef = collectionRef.doc();
  documentRef.create({foo: 'bar'}).then((res) => {
    console.log(`Document created at ${res.writeTime.toDate()}`);
  }).catch((err) => {
    console.log(`Failed to create document: ${err}`);
  });*/

  // 3. Add a document
  /*collectionRef.doc(uuidv4()).create({bar: 'foo'}).then((res) => {
    console.log(`Document created at ${res.writeTime.toDate()}`);
  }).catch((err) => {
    console.log(`Failed to create document: ${err}`);
  });*/

  const createMessage = (content, sender) => {
    // Add a document with faker
    const data = {
      content: content,
      sender: sender,
      createdAt: Date.now()
    };

    collectionRef.add(data).then(documentReference => {
      console.log(`Added document with name: ${documentReference.id}`);
    });
  };

  
  for (let i=0; i < 200;i++) {
    createMessage(faker.lorem.paragraph(), faker.name.findName());
  }

})();



/*
collectionRef.add({foo: 'bar'}).then(documentReference => {
  console.log(documentReference.path);
});

collectionRef.doc().create({bar: 'foo'}).then(writeResult => {
  console.log(writeResult);
});

collectionRef.doc('pol').set({bar: 'foo'}, { merge: true}).then(writeResult => {
  console.log(writeResult);
});
*/
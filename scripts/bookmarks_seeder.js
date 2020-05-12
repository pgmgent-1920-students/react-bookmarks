import { v4 as uuidv4 } from 'uuid';

import { admin, app, db, generateTimestamps } from './firebase';
import Proxy from './Proxy';

(async () => {
  const seo = await Proxy.getSEOFromUrl('http://www.gdm.gent');
  console.log(seo);
})();

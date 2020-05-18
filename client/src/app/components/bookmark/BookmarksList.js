import React, { useEffect, useState, Fragment } from 'react';
import { useFirestore } from '../../services';

const BookmarksList = () => {
  const [bookmarks, setBookmarks] = useState();
  const {getBookmarks} = useFirestore();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBookmarks();
      console.log(data);
      setBookmarks(data);
    }

    fetchData();
  }, []);

  return (
    <div className="row bookmarks-list">
      {!!bookmarks
      ? bookmarks.map((bm) => {
        return (
          <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={bm.uid}>
            <article className="bookmark" data-id={bm.uid}>
              <h1>{!!bm.icon ? <img src={bm.icon}/> : <Fragment></Fragment>}{bm.title}</h1>
              {!!bm.image
              ? <picture>
                  <img src={bm.image} />
                </picture>
              : <Fragment></Fragment>
              }
            </article>
          </div>
        )
      })
      : <p>No bookmarks.</p>
      }
    </div>
  )
};

export default BookmarksList;
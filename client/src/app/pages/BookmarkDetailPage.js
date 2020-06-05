import React, { useEffect, useState  } from 'react';
import { useParams } from 'react-router';

import { BookmarkDetail } from '../components/bookmark';
import { useFirestore } from '../services';

const BookmarkDetailPage = ({}) => {
  const { id } = useParams();
  const [bookmark, setBookmark] = useState(null);
  const {getBookmark} = useFirestore();

  useEffect(() => {
    const fetchData = async (q) => {
      const data = await getBookmark(id);
      setBookmark(data);
    }; 

    if (!bookmark) {
      fetchData();
    }
  }, []);

  return (
    <div className="page page--bookmark">
      <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Bookmark</h1>
            </div>
          </div>
          <BookmarkDetail bookmark={bookmark} />
      </div>
    </div>
  );
};

export default BookmarkDetailPage;
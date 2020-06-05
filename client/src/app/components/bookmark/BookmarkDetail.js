import React, { useEffect, useState, Fragment } from 'react';
import { useFirestore } from '../../services';

import './BookmarkDetail.scss';

const BookmarkDetail = ({bookmark}) => {

  return (
    <div className="row align-items-stretch bookmark">
      {!!bookmark
      ? 
        (
          <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={bookmark.uid}>
            <div className="card bookmark" data-id={bookmark.uid}>
              <picture className="card-img-top bookmark__picture">
                {!!bookmark.image ? <img src={bookmark.image} alt={bookmark.title} /> : <Fragment></Fragment>}
              </picture>
              <div className="card-body">              
                <h6 class="card-subtitle mb-2 text-muted">{bookmark.provider}</h6>
                <h5 className="card-title  text-truncate">{bookmark.title}</h5>                
              </div>
            </div>
          </div>
        )
      : <p>No bookmark.</p>
      }
    </div>
  )
};

export default BookmarkDetail;
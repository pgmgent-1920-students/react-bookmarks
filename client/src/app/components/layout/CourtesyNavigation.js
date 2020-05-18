import React, { } from 'react';

import { Link } from 'react-router-dom';
import * as Routes from '../../routes';

const CourtesyNavigation = ({children}) => {
  return (
    <ul className="navbar-nav courtesy-navigation">
      <li className="nav-item">
        <Link className="nav-link" to={Routes.AUTH_SIGN_IN}>Sign In</Link>
      </li>
    </ul>
  );
};

export default CourtesyNavigation;

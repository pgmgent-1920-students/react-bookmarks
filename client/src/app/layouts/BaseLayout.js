import React, { Fragment } from 'react';

import { Header } from '../components/layout';

const BaseLayout = ({children}) => (
  <Fragment>
    <Header />
    <main className="app-main">
      { children }      
    </main>
  </Fragment>
);
export default BaseLayout;
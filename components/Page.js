/*
The Page component will act as a HOC for the layout of the application.
Here we an include the <Head />, <NavBar />, <Footer />, etc.
Like before in React his will be what accepts our {children}.
*/

import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

export default ({ children }) => (
  <div className="main">
    <Meta />
    <Header />

    <div className="page">
      {children}
    </div>

    <style jsx>{`
      .main {
        width: 85%;
        margin: auto;
        padding: 10px 0 0 0;
      }
      .page {
        color: #828282;
        background: #fff;
        padding: 3px 10px;
      }
      @media (max-width: 750px) {
        .main {
          padding: 0;
          width: auto;
        }
      }
    `}</style>
  </div>
)

import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import {store} from './redux/store';

const Root = (props: { children: React.ReactElement }) => {
  return (
      <Provider store={store}>
        <BrowserRouter>
          {props.children}
        </BrowserRouter>
      </Provider>
  );
};

export default Root;

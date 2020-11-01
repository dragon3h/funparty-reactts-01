import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistore} from './redux/store';

const Root = (props: { children: React.ReactElement }) => {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate persistor={persistore}>
            {props.children}
          </PersistGate>
        </BrowserRouter>
      </Provider>
  );
};

export default Root;

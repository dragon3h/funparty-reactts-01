import React from 'react';
import * as renderer from 'react-test-renderer';

import Login from './login.component';

it('renders Login component', () => {
  const tree = renderer
      .create(<Login />)
      .toJSON();
  
  expect(tree).toMatchSnapshot();
});
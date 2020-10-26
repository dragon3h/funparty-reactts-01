import React from 'react';
import * as renderer from 'react-test-renderer';

import Root from '../../root';
import Login from './login.component';

it('renders Login component', () => {
  const tree = renderer
      .create(
          <Root>
            <Login />
          </Root>)
      .toJSON();
  
  expect(tree).toMatchSnapshot();
});

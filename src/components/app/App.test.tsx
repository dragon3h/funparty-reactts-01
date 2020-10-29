import React from 'react';
import * as renderer from 'react-test-renderer';

import Root from '../../root';

import App from './App';

test('renders App component without crashes', () => {
  const mainScreen = renderer.create(
      <Root>
        <App />
      </Root>).toJSON();

  expect(mainScreen).toMatchSnapshot();
});

// it('renders without crashing', () => {
//   const tree = ren
// });

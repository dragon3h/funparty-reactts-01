import React from 'react';
import * as renderer from 'react-test-renderer';
import App from './App';

test('renders learn react link', () => {
  const mainScreen = renderer
      .create(
          <App/>
      )
      .toJSON();
  
  expect(mainScreen).toMatchSnapshot();
});

// it('renders without crashing', () => {
//   const tree = ren
// });

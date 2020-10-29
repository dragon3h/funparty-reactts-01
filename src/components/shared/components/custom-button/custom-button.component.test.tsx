import React from 'react';
import * as renderer from 'react-test-renderer';

import CustomButton from './custom-button.component';

it('CustomButton component renders correctly', () => {
  const button = renderer
      .create(<CustomButton
      children={'Login'}
      type="submit"/>)
      .toJSON();
  
  expect(button).toMatchSnapshot();
});
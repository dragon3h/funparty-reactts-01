import React from 'react';
import * as renderer from 'react-test-renderer';

import FormInput from './form-input.component';

it('FormInput for email component renders correctly', () => {
  const formInput = renderer
      .create(<FormInput
      attrType={'email'}
      handleChange={jest.fn()}
      value={''}
      name={'Email'}
      label={'Email'}
      required={true}/>)
      .toJSON();
  
  expect(formInput).toMatchSnapshot();
});
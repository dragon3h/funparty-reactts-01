import React from 'react';
import * as renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import FormInput from './form-input.component';

let wrapper: any;
beforeEach(() => {
  wrapper = shallow(<FormInput
      attrType={'email'}
      handleChange={jest.fn()}
      value={''}
      name={'Email'}
      label={'Email'}
      required={true}/>);
});

afterEach(() => {
  wrapper.unmount();
})

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

it('user can type text in the field', () => {
  wrapper.find('input').at(0).simulate('change', {
    target: {name: 'Email', value: 'test'}
  });
  wrapper.update();
  
  expect(wrapper.find('input').at(0).prop('value')).toEqual('test');
});

import React from 'react';
import {mount } from 'enzyme';
import * as renderer from 'react-test-renderer';

import Root from '../../root';
import Login from './login.component';

let wrapped: any;

beforeEach(() => {
  wrapped = mount(
      <Root>
        <Login/>
      </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
})

it('renders Login component', () => {
  const tree = renderer
      .create(
          <Root>
            <Login/>
          </Root>)
      .toJSON();
  
  expect(tree).toMatchSnapshot();
});

describe('Login component', () => {
  it('has 2 input fields', () => {
    expect(wrapped.find('input').length).toEqual(2);
  });
  
  it('has button', () => {
    expect(wrapped.find('button').length).toEqual(1);
  });
  
  it('has input field for username', () => {
    expect(wrapped.find('input[type="email"]').prop('name')).toEqual('email');
  });
  
  it('has input field for username', () => {
    expect(wrapped.find('input[type="password"]').prop('name')).toEqual('password');
  });
  
  it('has input fghfg field for username', () => {
    wrapped.find('input').at(0).simulate('change', {
      currentTarget: {value: 'pass123'}
    });
    wrapped.update();
    
    expect(wrapped.find('input').at(0).prop('value')).toEqual('pass123');
  });
})

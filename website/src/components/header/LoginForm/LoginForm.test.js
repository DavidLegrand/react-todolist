import React from 'react'
import { render, mount } from 'enzyme'
import TestUtils from 'react-dom/test-utils';
import LoginForm from './LoginForm'

let wrapper
beforeEach(() => {
  wrapper = mount(<LoginForm />)
});

afterEach(() => {
  jest.clearAllMocks();
});


describe("Login Form Renders", () => {
  it('renders properly', () => {

  })
  it('contains a form', () => {
    expect(wrapper.find('form')).toBeTruthy
  })
  it('contains a login', () => {
    expect(wrapper.find('input[type="text"]')).toBeTruthy
  })
  it('contains a button', () => {
    expect(wrapper.find('button[type="submit"]')).toBeTruthy
  })
})

describe("Events are properly triggered", () => {
  it('should trigger its `onClick` prop when clicked', () => {

    const setState = jest.fn()
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init.setState])


    const input = wrapper.find('#login')
    const event = {target: {name: "login", value: "abc"}}
    input.simulate('change', event)
    
    expect(input.props().value).toBe('abc');

  })
})

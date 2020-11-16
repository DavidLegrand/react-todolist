import React from 'react'
import { shallow } from "enzyme"
import App from './App'

xit('should render Contact Form', () => {
  const wrapper = shallow(<App />);
  const ContactForm = wrapper.find(ContactForm);
  expect(ContactForm.exists()).toBe(true);
})
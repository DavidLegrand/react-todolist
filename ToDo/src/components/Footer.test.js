import React from 'react'
import { shallow } from "enzyme"
import Footer from "./Footer"

describe('testing footer display', () => {
  it('should render customer service phone number', () => {
    const wrapper = shallow(<Footer />);
    const span = wrapper.find('span');
    const text = span.text();

    expect(text).toBe('Customer Service : 08-36-65-65-65')
  })
})
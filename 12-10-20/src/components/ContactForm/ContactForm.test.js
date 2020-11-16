import React from 'react'
import { shallow } from "enzyme"
import ContactForm from './'

describe('ContactForm', () => {
  let wrapper
  const getInput = () => wrapper.find('input')
  const getError = () => wrapper.find('.error')
  const getForm = () => wrapper.find('form')
  let updateContact
  beforeEach(() => {
    updateContact = jest.fn()
    wrapper = shallow(
      <ContactForm contact={{ name: 'John Doe' }} updateContact={updateContact} />
    )

  })
  it('should display username in the input', () => {
    expect(getInput().props().value).toEqual('John Doe')
  })
  it('should change the value on change', () => {
    getInput().simulate('change', { target: { value: 'Jane Doe' } })
    expect(getInput().props().value).toBe('Jane Doe')
  })

  it('displays the error message when input is empty', () => {
    expect(getError().length).toEqual(0)
    getInput().simulate('change', { target: { value: '' } })
    expect(getError().length).toEqual(1)
  })



  it('calls updateContact on form submit', () => {
    getInput().simulate('change', { target: { value: 'Jane Doe' } })
    getForm().simulate('submit', { preventDefault() { } })
    expect(updateContact).toHaveBeenCalledWith({ name: 'Jane Doe' })
  })

  it('doesn\'t call updateContact if input is empty', () => {
    getInput().simulate('change', { target: { value: '' } })
    getForm().simulate('submit', { preventDefault() { } })
    expect(updateContact).not.toHaveBeenCalled()
  })


})

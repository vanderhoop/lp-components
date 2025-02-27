import React from 'react'
import { mount } from 'enzyme'
import { Checkbox } from '../../../src/'

test('Checkbox toggles value when clicked', () => {
  const onChange = jest.fn()
  const props = {
    input: {
      name: 'test',
      value: false,
      onChange,
    },
    meta: {},
  }
  const wrapper = mount(<Checkbox {...props} />)
  wrapper.find('input').simulate('change')
  const newValue = onChange.mock.calls[0][0]
  expect(newValue).toEqual(true)
})

test('Checkbox is given an aria-describedby attribute when there is an input error', () => {
  const name = 'test'
  const props = {
    input: {
      name,
      value: false,
    },
    meta: {
      touched: true,
      invalid: true,
    },
  }
  const wrapper = mount(<Checkbox {...props} />)
  expect(wrapper.find('input').prop('aria-describedby')).toContain(name)
})

test('Checkbox does not receive invalid dom attributes', () => {
  const props = {
    input: {
      name: 'test',
      value: false,
    },
    meta: {},
    onClickLabel: () => 'foo',
  }

  const wrapper = mount(<Checkbox {...props} />)
  expect(wrapper.find('input').prop('onClickLabel')).toBe(undefined)
})

import React, { createRef } from 'react'
import { mount, shallow } from 'enzyme'
import { Button } from '../../../src/'

test('Button is aria-disabled when form is invalid', () => {
  const wrapper = shallow(<Button invalid={true}> Hi</Button>)
  expect(wrapper.props()['aria-disabled']).toBe(true)
})

test('Button is aria-disabled when form is pristine', () => {
  const wrapper = shallow(<Button pristine={true}> Hi</Button>)
  expect(wrapper.props()['aria-disabled']).toBe(true)
})

test('Button onClick is run when the form is not submitting, pristine, or invalid', () => {
  const onClick = jest.fn()
  const formProps = {
    invalid: false,
    pristine: false,
    submitting: false,
  }
  const wrapper = shallow(
    <Button onClick={onClick} {...formProps}>
      {' '}
      Hi
    </Button>
  )
  wrapper.find('button').simulate('click')

  expect(onClick).toHaveBeenCalled()
})

test('Button onClick is not run when form is invalid', () => {
  const onClick = jest.fn()
  const wrapper = mount(
    <Button onClick={onClick} invalid={true}>
      {' '}
      Hi
    </Button>
  )
  wrapper.find('button').simulate('click')

  expect(onClick).not.toHaveBeenCalled()
})

test('Button onClick is not run when form is pristine', () => {
  const onClick = jest.fn()
  const wrapper = mount(
    <Button onClick={onClick} pristine={true}>
      {' '}
      Hi
    </Button>
  )
  wrapper.find('button').simulate('click')

  expect(onClick).not.toHaveBeenCalled()
})

test('Button onClick is not run when form is submitting', () => {
  const onClick = jest.fn()
  const wrapper = mount(
    <Button onClick={onClick} submitting={true}>
      {' '}
      Hi
    </Button>
  )
  wrapper.find('button').simulate('click')

  expect(onClick).not.toHaveBeenCalled()
})

test('Button adds variant string to class', () => {
  const wrapper = shallow(<Button variant="custom"> Hi</Button>)
  expect(wrapper.hasClass('button-custom')).toBe(true)
})

test('Button adds type to button', () => {
  const wrapper = shallow(<Button type="reset"> Hi</Button>)
  expect(wrapper.props().type).toBe('reset')
})

test('Button has class "in-progress" when form is submitting', () => {
  const wrapper = shallow(<Button submitting={true}> Hi</Button>)
  expect(wrapper.hasClass('in-progress')).toBe(true)
})

test('Button passes extra props to button element', () => {
  const onClick = () => 'yo'
  const wrapper = shallow(<Button onClick={onClick}> Hi</Button>)
  expect(wrapper.props().onClick).toBe(onClick)
})

test('Specifying a class name prop does not override variant class', () => {
  const wrapper = shallow(
    <Button variant="primary" className="button-large">
      Click Me
    </Button>
  )
  expect(wrapper.hasClass('button-primary')).toBe(true)
  expect(wrapper.hasClass('button-large')).toBe(true)
})

test('Specifying a class name prop does not override is-disabled class', () => {
  const wrapper = shallow(
    <Button className="button-large" invalid>
      Click Me
    </Button>
  )
  expect(wrapper.hasClass('is-disabled')).toBe(true)
  expect(wrapper.hasClass('button-large')).toBe(true)
})

test('Specifying a class name prop does not override in-progress class', () => {
  const wrapper = shallow(
    <Button className="button-large" submitting>
      Submit
    </Button>
  )
  expect(wrapper.hasClass('in-progress')).toBe(true)
  expect(wrapper.hasClass('button-large')).toBe(true)
})

test('Button can receive object style prop', () => {
  const wrapper = shallow(<Button style={{ display: 'none' }}>Submit</Button>)
  expect(wrapper.find('button').prop('style').display).toEqual('none')
})

test('Button passes down forwardedRef to button', () => {
  const ref = createRef()
  const wrapper = mount(
    <Button id="my-button" ref={ref}>
      Click Me
    </Button>
  )
  expect(wrapper.find('button').prop('id')).toEqual(ref.current.id)
})

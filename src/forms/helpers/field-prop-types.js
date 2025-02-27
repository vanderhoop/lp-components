import PropTypes from 'prop-types'

/**
 *
 * A constant representing the `PropTypes` of the `options` prop for select components, e.g., {@link Select} and {@link CheckboxGroup}
 *
 * @constant {PropTypes} fieldOptionsType
 *
 */

export const fieldOptionsType = PropTypes.arrayOf(
  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]).isRequired,
    }),
  ])
)

/**
 *
 * A constant representing the `PropTypes` of the `optionGroups` prop for select components, e.g., {@link Select}
 *
 * @constant {PropTypes} fieldOptionGroupsType
 *
 */

export const fieldOptionGroupsType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string.isRequired,
    options: fieldOptionsType.isRequired,
  })
)

/**
 *
 * A function that takes `PropTypes` for a `redux-form` [input](http://redux-form.com/6.5.0/docs/api/Field.md/#input-props) object.
 * Returns an object containing all `PropTypes` for `redux-form` [Field](http://redux-form.com/6.5.0/docs/api/Field.md/) components.
 *
 * @name fieldPropTypesWithValue
 * @type Function
 * @param {PropTypes} value - `PropTypes` object
 * @returns {Object} `PropTypes` for `redux-form` [input](http://redux-form.com/6.5.0/docs/api/Field.md/#input-props) and [meta](http://redux-form.com/6.5.0/docs/api/Field.md/#meta-props) objects
 * @example
 *
 * const valuePropType = PropTypes.string
 *
 * fieldPropTypesWithValue(valuePropType)
 *
 * // {
 * //   input: PropTypes.shape({
 * //     value: PropTypes.string.isRequired,
 * //     name: PropTypes.string.isRequired,
 * //     onBlur: PropTypes.func,
 * //     onChange: PropTypes.func
 * //   }),
 * //   meta: PropTypes.shape({
 * //     dirty: PropTypes.bool,
 * //     invalid: PropTypes.bool,
 * //     pristine: PropTypes.bool,
 * //     touched: PropTypes.bool,
 * //     valid: PropTypes.bool,
 * //   }).isRequired
 * // }
 *
 */

export function fieldPropTypesWithValue(value) {
  return {
    input: PropTypes.shape({
      value: value.isRequired,
      name: PropTypes.string.isRequired,
      onBlur: PropTypes.func,
      onChange: PropTypes.func,
    }),
    meta: PropTypes.shape({
      dirty: PropTypes.bool,
      invalid: PropTypes.bool,
      pristine: PropTypes.bool,
      touched: PropTypes.bool,
      valid: PropTypes.bool,
    }).isRequired,
  }
}

/**
 *
 * A constant representing default `PropTypes` for `redux-form` [Field](http://redux-form.com/6.5.0/docs/api/Field.md/) values.
 * Default types are either `number` or `string`.
 *
 * @constant {PropTypes} defaultValueTypes
 *
 */

const defaultValueTypes = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
])

/**
 *
 * An object containing the default `PropTypes` for `redux-form` [Field](http://redux-form.com/6.5.0/docs/api/Field.md/) components.
 *
 * @constant {Object} fieldPropTypes
 *
 */

export const fieldPropTypes = fieldPropTypesWithValue(defaultValueTypes)

/**
 *
 * A constant representing the `PropTypes` of the `input` prop for the radio group component, e.g., {@link RadioGroup}
 *
 * @constant {PropTypes} radioGroupPropTypes
 *
 */

export const radioGroupPropTypes = fieldPropTypesWithValue(
  PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
)

/**
 *
 * A constant representing the `PropTypes` of the `input` prop for checkbox group components, e.g., {@link CheckboxGroup} and {@link DropdownCheckboxGroup}
 *
 * @constant {PropTypes} checkboxGroupPropTypes
 *
 */

export const checkboxGroupPropTypes = fieldPropTypesWithValue(
  PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
  )
)

const file = PropTypes.shape({
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  size: PropTypes.number,
  type: PropTypes.string,
  lastModified: PropTypes.number,
})

export const fileInputPropTypes = fieldPropTypesWithValue(
  PropTypes.oneOfType([PropTypes.oneOf(['']), file, PropTypes.arrayOf(file)])
)

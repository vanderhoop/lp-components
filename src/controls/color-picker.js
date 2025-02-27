import React from 'react'
import PropTypes from 'prop-types'
import ChromePicker from 'react-color/lib/Chrome'
import { noop, useToggle } from '../utils'

/**
 *
 * @name ColorPicker
 * @type Function
 * @description A control component for picking a hex color value. Built using the [react-color](https://casesandberg.github.io/react-color/) `ChromePicker`.
 * @param {String} [value] - The hex value of the selected color
 * @param {Function} [onChange] - A function called with the new hex value when a color is selected
 * @param {Function} [onOpen] A function called when the picker is expanded
 * @param {Function} [onClose] A function called when the picker is closed
 * @param {Boolean} [active] - A boolean that controls whether the picker is expanded or not.
 * @example
 *
 * function BackgroundSetter ({ backgroundColor, setBackgroundColor }) {
 *   return (
 *     <div>
 *       <h1> Set background color </h1>
 *       <ColorPicker
 *         value={ backgroundColor }
 *         onChange={ setBackgroundColor }
 *       />
 *     </div>
 *   )
 * }
 *
 */

const propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  active: PropTypes.bool,
}

const defaultProps = {
  value: '#000000',
  onChange: noop,
  onOpen: noop,
  onClose: noop,
}

function ColorPicker({ active, value, onChange, onOpen, onClose, ...rest }) {
  const [expanded, toggleExpanded] = useToggle()
  const isExpanded = active === undefined ? expanded : active

  return (
    <div className="color-picker">
      <span
        className="swatch"
        style={{ background: value || 'black' }}
        onClick={() => {
          toggleExpanded()
          return onOpen()
        }}
      />
      {isExpanded && (
        <div className="popover">
          <div
            className="cover"
            onClick={() => {
              toggleExpanded()
              return onClose()
            }}
          />
          <ChromePicker
            color={value}
            onChange={({ hex }) => onChange(hex)}
            disableAlpha={true}
            {...rest}
          />
        </div>
      )}
    </div>
  )
}

ColorPicker.propTypes = propTypes
ColorPicker.defaultProps = defaultProps

export default ColorPicker

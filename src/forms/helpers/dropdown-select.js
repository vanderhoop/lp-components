import React from 'react'
import PropTypes from 'prop-types'
import { useToggle } from '../../utils'
import OutsideClickHandler from 'react-outside-click-handler'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  selectedValues: PropTypes.arrayOf(PropTypes.string),
}

const defaultProps = {
  className: '',
  selectedValues: [],
}

// Wraps the `DropdownCheckboxGroup` component

function DropdownSelect({ children, className, selectedValues }) {
  const [expanded, toggleExpanded] = useToggle()

  return (
    <OutsideClickHandler onOutsideClick={() => toggleExpanded(false)}>
      <div className="dropdown-select">
        <div className="select-input" onClick={() => toggleExpanded()}>
          <p>{getLabel(selectedValues)}</p>
        </div>
        <div
          className={classnames(className, 'options', {
            'is-active': expanded,
          })}
        >
          <div className="scroll-box">{children}</div>
        </div>
      </div>
    </OutsideClickHandler>
  )
}

DropdownSelect.propTypes = propTypes

DropdownSelect.defaultProps = defaultProps

function getLabel(values) {
  return values.length ? values.join(', ') : 'None'
}

export default DropdownSelect

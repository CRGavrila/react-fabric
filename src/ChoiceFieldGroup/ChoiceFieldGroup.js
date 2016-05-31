import React from 'react'

import Label from '../Label'
import fabricComponent from '../fabricComponent.js'

import style from '../ChoiceField/ChoiceField.scss'

const onChildBlur = child => () => {
  if (child.props.onBlur) {
    child.props.onBlur(child.props.checked)
  }
}

const onChoiceChanged = (children, i) => () => {
  React.Children.forEach(children, (child, ci) => {
    if (child && child.props.onChange) {
      child.props.onChange(ci === i)
    }
  })
}

const createChoices = ({ name, children }) => React.Children.map(children, (child, i) => (
  child !== null ? React.cloneElement(child, {
    groupId: i,
    name,
    onBlur: onChildBlur(child),
    onChange: onChoiceChanged(children, i),
    type: 'radio'
  }) : null
))

const ChoiceFieldGroup = ({
  children, name, required, title, ...props
}) => (
  <div data-fabric="ChoiceFieldGroup"
    {...props}
    styleName="ms-ChoiceFieldGroup">
    <div>
      { title && <Label required={required}>{title}</Label> }
    </div>
    { createChoices({ name, children }) }
  </div>
)
ChoiceFieldGroup.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  required: React.PropTypes.bool,
  title: React.PropTypes.string
}
ChoiceFieldGroup.defaultProps = {
  required: false
}

export default fabricComponent(ChoiceFieldGroup, style)

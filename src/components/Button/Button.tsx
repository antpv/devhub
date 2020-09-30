import React from 'react'
import './button.css'
import { IButtonProps } from '../../interfaces'

const Button: React.FunctionComponent<IButtonProps> = props => {
  const { bordered = false, rounded = false } = props
  const containerDynamicClasses = []

  containerDynamicClasses.push('button__container')

  if (bordered) {
    containerDynamicClasses.push('button__container--bordered')
  }

  if (rounded) {
    containerDynamicClasses.push('button__container--rounded')
  }

  return (
    <button className="button">
      <div className={containerDynamicClasses.join(' ')}>
        { props.children }
      </div>
    </button>
  )
}

export default Button

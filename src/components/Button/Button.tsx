import React from 'react'
import './button.css'
import { IButtonProps } from '../../interfaces'

const Button: React.FunctionComponent<IButtonProps> = props => {
  return (
    <button className="button">
      { props.children }
    </button>
  )
}

export default Button

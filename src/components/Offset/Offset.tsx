import React from 'react'
import './offset.css'
import { IOffsetProps } from '../../interfaces'

const Offset: React.FunctionComponent<IOffsetProps> = props => {
  return (
    <div>
      { props.children }
    </div>
  )
}

export default Offset

import React from 'react'
import './divider.css'

const Divider: React.FunctionComponent = props => {
  return (
    <div className="divider">
      { props.children }
    </div>
  )
}

export default Divider

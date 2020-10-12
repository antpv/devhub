import React from 'react'
import { IOffsetProps } from '../../interfaces'

interface IStyles {
  [key: string]: string
}

enum OffsetVariables {
  xxs = '--space-xxs',
  xs = '--space-xs',
  s = '--space-s',
  m = '--space-m',
  l = '--space-l',
  xl = '--space-xl',
  xxl = '--space-xxl'
}

const Offset: React.FunctionComponent<IOffsetProps> = props => {
  const styles: IStyles = {}

  if (props.block) {
    styles.display = 'block'
  } else {
    styles.display = 'inline-block'
  }

  if (props.top) {
    styles.paddingTop = `var(${OffsetVariables[props.top]})`
  }

  if (props.right) {
    styles.paddingRight = `var(${OffsetVariables[props.right]})`
  }

  if (props.bottom) {
    styles.paddingBottom = `var(${OffsetVariables[props.bottom]})`
  }

  if (props.left) {
    styles.paddingLeft = `var(${OffsetVariables[props.left]})`
  }

  return (
    <div style={styles}>
      { props.children }
    </div>
  )
}

export default Offset

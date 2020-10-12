export interface IButtonProps {
  bordered?: boolean
  rounded?: boolean
}

export type Offset = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'

export interface IOffsetProps {
  top?: Offset
  right?: Offset
  bottom?: Offset
  left?: Offset
  block?: boolean
}

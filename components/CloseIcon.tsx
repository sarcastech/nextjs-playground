import {FC} from 'react'
import sass from './Column.module.scss'

type IconProps = {
  onClick: any
}

const CloseIcon: FC<IconProps> = ({onClick}) => {
  return (
    <span onClick={onClick} className={sass.cancel}>
      X
    </span>
  )
}

export default CloseIcon

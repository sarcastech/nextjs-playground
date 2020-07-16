import {FC} from 'react'
import sass from './Column.module.scss'

type IconProps = {
  clickHandler: (event: React.MouseEvent<HTMLSpanElement>) => void
}

const CloseIcon: FC<IconProps> = ({clickHandler}) => {
  return (
    <span onClick={clickHandler} className={sass.cancel}>
      X
    </span>
  )
}

export default CloseIcon

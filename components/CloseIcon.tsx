import sass from './Column.module.scss'

type IconProps = {
  onClick: any
}

function CloseIcon ({onClick}: IconProps) {
  return (
    <span onClick={onClick} className={sass.cancel}>
      X
    </span>
  )
}

export default CloseIcon

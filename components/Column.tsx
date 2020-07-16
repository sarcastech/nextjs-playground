import {FC} from 'react'
import CloseIcon from './CloseIcon'
import sass from './Column.module.scss'

type ColumnProps = {
  id: string,
  rowId: number,
  order: number,
  editMode: boolean,
  content: string,
  removeColumn: any
}

const Column: FC<ColumnProps> = ({id, rowId, content, removeColumn}) => {

  function handleClick (e: Event): void {
    e.stopPropagation()
    if (removeColumn) {
      removeColumn({
        id: id,
        rowId: rowId
      })
    }
  }

  return (
    <div className={sass.col}>
      <CloseIcon onClick={handleClick} />
      {content}
    </div>
  )
}

export default Column
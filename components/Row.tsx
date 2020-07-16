import {FC, useState} from 'react'
import Column from './Column'
import ColumnInterface from '../interfaces/Column'
import sass from './Rows.module.scss'

type RowProps = {
  id: number,
  order: number,
  editMode: boolean,
  columns: ColumnInterface[],
  onUpdate: any,
  removeColumn: any,
  removeRow: any
}

const Row: FC<RowProps> = ({id, columns, onUpdate, removeColumn, removeRow}) => {
  let [showMenu, setShowMenu] = useState(false)

  function toggleMenu (): void {
    setShowMenu(!showMenu)
  }

  function renderCols (list: ColumnInterface[]): JSX.Element[] {
    return list.map((item: ColumnInterface) => {
      return <Column key={item.id} {...item} removeColumn={removeColumn} />
    })
  }

  function renderMenu (): JSX.Element {
    return (
      <div style={{color: '#fff', background: '#666'}}>
        Menu
        {' '}
        <button onClick={onUpdate}>add column</button>{' '}
        <button onClick={removeRow}>remove row</button>
      </div>
    )
  }

  return (
    <div>
      {showMenu ? renderMenu() : false}
      <div onClick={toggleMenu} className={`${sass.row} ${sass.editMode}`}>
        {renderCols(columns)}
      </div>
    </div>
  )
}

export default Row
import {useState} from 'react'
import Column from './Column'
import ColumnInterface from '../interfaces/Column'
import sass from './Rows.module.scss'

type RowProps = {
  id: number,
  order: number,
  editMode: boolean,
  columns: any,
  onUpdate: any,
  removeColumn: any,
  removeRow: any
}

function Row ({id, columns, onUpdate, removeColumn, removeRow}: RowProps) {
  let [showMenu, setShowMenu] = useState(false)

  function launchMenu (): void {
    setShowMenu(!showMenu)
  }

  function renderCols (list: any[]): any[] {
    return list.map((item: ColumnInterface) => {
      return <Column key={item.id} {...item} removeColumn={removeColumn} />
    })
  }

  function renderMenu () {
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
      <div onClick={launchMenu} className={`${sass.row} ${sass.editMode}`}>
        {renderCols(columns)}
      </div>
    </div>
  )
}

export default Row
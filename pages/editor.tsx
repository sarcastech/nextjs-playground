import {FC, useState} from 'react'
import Layout from '../components/Layout'
import Row from '../components/Row'
import RowModel from '../interfaces/Row'
import ColModel from '../interfaces/Column'
import sass from './builder.module.scss'

function buildRowModel (id=0, order=0): RowModel {
  return {
    id: id,
    order: order,
    editMode: false,
    columns: [
      {
        id: `${id}-0`,
        rowId: id,
        order: 0,
        editMode: false,
        content: 'edit me'
      }
    ]
  }
}

const Editor: FC = () => {
  let [rows, setRows] = useState([])

  function addRow (): void {
    let newRow = [buildRowModel(Date.now(), rows.length)]
    let newRows = (rows as []).concat(newRow as [])
    setRows(newRows)
  }

  function updateRow (id: number): Function {
    return function (): void {
      let  _rows: RowModel[] = rows.slice()
      let matchIndex = _rows.findIndex(row => {
        return row.id === id
      })
      _rows[matchIndex].columns.push({
        id: `${id}-${_rows[matchIndex].columns.length}`,
        rowId: id,
        order: _rows[matchIndex].columns.length,
        editMode: false,
        content: 'edit me'
      })
      setRows(_rows as [])
    }
  }

  function removeRow (id: number): Function {
    return function (): void {
      let newRows = rows.filter((row: RowModel) => {
        return row.id !== id
      })

      setRows(newRows)
    }
  }

  function renderRows (list: RowModel[]): JSX.Element[] {
    return list.map(item => {
      let _id = item.id
      return (
        <Row
          {...item}
          onUpdate={updateRow(_id)}
          removeRow={removeRow(_id)}
          removeColumn={removeColumn}
         />
      )
    })
  }

  function removeColumn (col: ColModel): void {
   let _rows: RowModel[] = rows.slice()
    let matchIndex = _rows.findIndex(row => {
      return row.id === col.rowId
    })
    let _cols = _rows[matchIndex].columns
    let _filteredCols = _cols.filter(column => {
      return column.id !== col.id
    })
    _rows[matchIndex].columns = _filteredCols
    setRows(_rows as [])
  }

  return (
  <Layout title="Editor">
    <h1>Editor</h1>
    <p>Let's Make Stuff</p>
    <button onClick={addRow}>
      + Row
    </button>
    <div className={sass.display}>
      {renderRows(rows)}
    </div>
  </Layout> 
  )
}

export default Editor
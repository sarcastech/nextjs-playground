import {useState} from 'react'
import Layout from '../components/Layout'
import Row from '../components/Row'
import sass from './builder.module.scss'

function buildRow (id=0, order=0) {
  return {
    id: id,
    order: order,
    editMode: false,
    columns: [
      {
        id: 0,
        rowId: id,
        order: 0,
        editMode: false,
        content: 'edit me'
      }
    ]
  }
}

function Builder () {
  let [rows, setRows] = useState([])

  function addRow () {
    let newRow = [buildRow(Date.now(), rows.length)]
    let newRows = rows.concat(newRow)
    setRows(newRows)
  }

  function updateRow (id, col) {
    return function () {
      let _rows = rows.slice()
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
      setRows(_rows)
    }
  }

  function removeRow(id) {
    return function () {
      let newRows = rows.filter(row => {
        return row.id !== id
      })
      console.log('id >> ', id)
      console.log('rows ', rows)
      console.log('new rows ', newRows)

      setRows(newRows)
    }
  }

  function renderRows (list) {
    return list.map(item => {
      console.log('item ', item)
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

  function removeColumn (col) {
    let _rows = rows.slice()
    let matchIndex = _rows.findIndex(row => {
      return row.id === col.rowId
    })
    let _cols = _rows[matchIndex].columns
    let _filteredCols = _cols.filter(column => {
      return column.id !== col.id
    })
    _rows[matchIndex].columns = _filteredCols
    setRows(_rows)
  }

  return (
    <Layout title="Builder">
    <h1>Builder</h1>
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

export default Builder
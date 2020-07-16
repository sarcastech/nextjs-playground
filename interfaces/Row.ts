import Column from './Column'

interface Row {
  id: number,
  order: number,
  editMode: boolean,
  columns: Column[]
}

export default Row

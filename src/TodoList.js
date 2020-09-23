import React,{useState} from 'react'
import useLocalStorage from './useLocalStorage'

function TodoList({name}) {
  const [list, setList] = useLocalStorage(name, [])

  function addItem(event) {
    list.push('new item')
    setList(list)
  }

  function updateItem(index,value) {
    list[index] = value
    setList(list)
  }

  function TodoItem({index,item}) {
    const [state, setState] = useState(item)

    function update(event) {
      const newValue = event.target.value

      setState(newValue)
      updateItem(index,newValue)
    }

    return <li>
      <input 
        onChange={update}
        value={state}
      />
      {JSON.stringify(item,null,2)}
    </li>
  }

  return (<>
    <ul>
      {list.map((el,I)=><TodoItem key={I} index={I} item={el} />)}
    </ul>

    <button onClick={addItem}>Add Item</button>
  </>)
}

export default TodoList

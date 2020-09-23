import React,{useRef,useState} from 'react';
import useLocalStorage from './useLocalStorage'
import './App.css';
import TodoList from './TodoList';

function App() {
  const [lists, setLists] = useLocalStorage('_todo_lists', [])

  const newList = useRef(null)

  function addList() {
    lists.push(newList.current.value)
    setLists(lists)
  }

  function ListContainer({index,name}) {
    const [state, setState] = useState(name)

    function update(event) {
      const newValue = event.target.value
      setState(newValue)
      lists[index] = newValue
      setLists(newValue)
    }

    return <li>
      <label>
        List
        <input value={state} onChange={update} />
      </label>
      <TodoList index={index} name={state} />
    </li>
  }

  function AllLists() {
    return <ul>
      {lists.map((el,I)=><ListContainer key={I} index={I} name={el} />)}
    </ul> 

  }

  return (<>
    <AllLists />
    <br/>
    <hr/>
    <input ref={newList} />
    <button onClick={addList}>Add List</button>
  </>)
}

export default App
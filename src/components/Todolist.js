import React, { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function Todolist() {
  const [todo, setTodo] = useState({ desc: '', date: '', priority: '' });
  const [todos, setTodos] = useState([]);
  const gridRef = useRef();

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }

  const columns = [
    { headerName: 'Date', field: "date", sortable: true, filter: true, floatingFilter: true  },
    { headerName: 'Description', field: "desc", sortable: true, filter: true, floatingFilter: true },
    { headerName: 'Priority', field: "priority", sortable: true, filter: true, floatingFilter: true }
  ]

  const deleteTodo = () => {
    if (gridRef.current.getSelectedNodes().length > 0) {    
      setTodos(todos.filter((todo, index) =>      
      index !== gridRef.current.getSelectedNodes()[0].childIndex))  
    }
    else {    
      alert('Select row first');  
    }
  }



  return (
    <div>
      <header>
        <h1>Simple todolist</h1>
      </header>
      <div>
        <input type="date" name="date" value={todo.date} onChange={inputChanged} />
        <input type="text" name="desc" value={todo.desc} onChange={inputChanged} />
        <input type="text" name="priority" value={todo.priority} onChange={inputChanged} />
        <button onClick={addTodo}>Add</button>
        <button onClick={deleteTodo}>Delete</button>
      </div>

      <div className="ag-theme-material" style={{ height: '700px', width: '70%', margin: 'auto' }} >
        <AgGridReact
          columnDefs={columns}
          rowData={todos}
          animateRows={true}
          rowSelection="single"
          ref={gridRef}
          onGridReady={ params => gridRef.current = params.api }>
        </AgGridReact>
      </div>
    </div>
  );
};

export default Todolist;
import React, { useState } from 'react';

function Todolist() {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  return (
    <div>
      <header>
        <h1>Simple todolist</h1>
      </header>
      <form onSubmit={addTodo}>
        <input type="date" name="date" value={todo.date} onChange={inputChanged} />
        <input type="text" name="desc" value={todo.desc} onChange={inputChanged} />
        <input type="submit" value="Add" />  
      </form>

      <table>
        <tr>
          <th>Description</th>
          <th>Date</th>
        </tr>
        <tbody>
          {
            todos.map((todo, index) =>
            <tr key={index}>
              <td>{todo.desc}</td>
              <td>{todo.date}</td>
              <td> <input type="button" value="Delete" onClick={() => 
                setTodos(todos.filter((todo, i) => i !== index))} />
              </td>
            </tr>
            )
          }
        </tbody>
      </table>   
    </div>
  );
};

export default Todolist;
import React from 'react';

function Todotable(props) {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                    {
                        props.todos.map((todo, index) => <tr key={index}>
                            <td>{todo.date}</td>
                            <td>{todo.desc}</td>
                            <td> <input type="button" value="Delete" onClick={() => props.setTodos(props.todos.filter((todo, i) => i !== index))} /></td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Todotable;
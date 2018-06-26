import React from 'react';

const Todo = props => <li  key={props.id}>
                        <p> {props.text}</p>
                        <button onClick={() => props.remove(props.id)}>X</button>
                    </li>

export default Todo;
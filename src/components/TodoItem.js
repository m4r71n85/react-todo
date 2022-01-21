import React from 'react';
import { RiCheckLine } from 'react-icons/ri';

const TodoItem = ({ todos,  removeTodo }) => {

  return todos.map((todo, index) => (
    <div
      className='todo-row'
      key={index}
      onClick={() => removeTodo(todo.id)}
    >
      <div key={todo.id}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCheckLine
          className='delete-icon'
        />
      </div>
    </div>
  ));
};

export default TodoItem;

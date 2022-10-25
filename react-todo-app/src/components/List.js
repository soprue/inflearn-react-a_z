import React, { useState } from 'react'

const List = React.memo( ({
  id, title, completed, todoData, setTodoData, provided, snapshot
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
    localStorage.setItem('todoData', JSON.stringify(newTodoData));
  };

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if(data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    })
    setTodoData(newTodoData);
    localStorage.setItem('todoData', JSON.stringify(newTodoData));
  }

  const handleEditChange = (e) => {
    setEditedTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodoData = todoData.map((data) => {
      if(data.id === id) {
        data.title = editedTitle;
      }
      return data;
    })
    setTodoData(newTodoData);
    localStorage.setItem('todoData', JSON.stringify(newTodoData));
    setIsEditing(false);
  }

  if(isEditing) {
    return (
      <div className="listItem">
        <div className="listText">
          <form onSubmit={handleSubmit}>
            <input 
              value={editedTitle} 
              onChange={handleEditChange}
            />
          </form>
        </div>
        <div className="listButton">
          <button onClick={() => setIsEditing(false)}>x</button>
          <button onClick={handleSubmit} type="submit">save</button>
        </div>
      </div>
    )
  } else {
    return (
      <div 
        className={`${snapshot.isDragging ? "dragging" : ""} listItem`} 
        key={id} 
        ref={provided.innerRef} 
        {...provided.draggableProps} 
        {...provided.dragHandleProps}
      >
        <div className="listText">
          <input 
            type="checkbox" 
            defaultChecked={completed} 
            onChange={() => handleCompleteChange(id)}
          />
          <span className={completed ? "line-through" : ""}>{title}</span>
        </div>
        <div className="listButton">
          <button onClick={() => handleClick(id)}>x</button>
          <button onClick={() => setIsEditing(true)}>edit</button>
        </div>
      </div>
    )
  }
} );

export default List;
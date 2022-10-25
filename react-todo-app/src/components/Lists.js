import React from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "../css/Lists.css";
import List from "../components/List";

const Lists = React.memo( ({ todoData, setTodoData }) => {
  const handleEnd = (result) => {
    if(!result.destination) return;

    let newTodoData = [...todoData];
    let [reorderedItem] = newTodoData.splice(result.source.index, 1);

    newTodoData.splice(result.destination.index, 0, reorderedItem);
    setTodoData(newTodoData);
    localStorage.setItem('todoData', JSON.stringify(newTodoData));
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>

        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <List
                      key={data.id}
                      id={data.id}
                      title={data.title}
                      completed={data.completed}
                      todoData={todoData}
                      setTodoData={setTodoData}
                      provided={provided}
                      snapshot={snapshot}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        
      </DragDropContext>
    </div>
  )
} );

export default Lists;
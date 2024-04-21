import React from 'react';
import TaskItem from './TaskItem';
import '../styles/TaskList.css';

const TaskList = ({ tasks, onRemove, onEdit, onToggleDone }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onRemove={onRemove}
          onEdit={onEdit}
          onToggleDone={onToggleDone}
        />
      ))}
    </ul>
  );
};

export default TaskList;
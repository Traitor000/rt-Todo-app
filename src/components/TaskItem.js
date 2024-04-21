import React, { useState } from 'react';
import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import '../styles/TaskItem.css';

const TaskItem = ({ task, onRemove, onEdit, onToggleDone }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleToggleDone = () => {
    onToggleDone(task.id);
    if (!task.done) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const handleEdit = () => {
    onEdit(task.id, editedText);
    setIsEditing(false);
  };

  return (
    <li className={`task-item ${task.done ? 'done' : ''}`}>
      <span className="task-text" onClick={handleToggleDone}>
      {task.text}
    </span>
      <div className="task-actions">
        <button
          className={`done-button ${task.done ? 'checked' : ''}`}
          onClick={() => onToggleDone(task.id)}
        >
          <FaCheck />
        </button>
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onBlur={handleEdit}
            autoFocus
          />
        ) : (
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            <FaEdit />
          </button>
        )}
        <button className="remove-button" onClick={() => onRemove(task.id)}>
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
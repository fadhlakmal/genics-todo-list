import React from 'react';

const Header = ({ taskText, handleInputChange, handleAddTask }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center">To-Do List</h1>

      <input
        id="taskInput"
        className="text-black mt-4"
        type="text"
        placeholder="Add a task"
        value={taskText}
        onChange={handleInputChange}
      />
      <button id="addBtn" className="mt-2" onClick={handleAddTask}>
        Add
      </button>
    </div>
  );
};

export default Header;

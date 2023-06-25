import React from 'react';

const CardList = ({ taskList, handleDeleteTask }) => {
  return (
    <section id="taskList" className="card-list">
      {taskList.map(task => (
        <article key={task.id} className="card">
          <header className="card-header">
            <p>{task.date}</p>
          </header>
          <span className="task mr-2.5 flex-grow">{task.text}</span>
          <div className="delete-text">Delete</div>
          <span
            className="delete-btn cursor-pointer inline-block"
            onClick={() => handleDeleteTask(task.id)}
          >
            ❌
          </span>
        </article>
      ))}
    </section>
  );
};

export default CardList;
import React, { useState } from 'react';
import CardList from './component/CardList';
import Header from './component/header';

const App = () => {
  const [taskText, setTaskText] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleAddTask = () => {
    const trimmedText = taskText.trim();
    if (trimmedText !== '') {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const day = currentDate.getDate();

      const newTask = {
        id: Date.now(),
        text: trimmedText,
        date: `${day}-${month}-${year}`
      };

      setTaskList((prevTaskList) => [...prevTaskList, newTask]);
      setTaskText('');
    }
  };

  const handleDeleteTask = (taskId) => {
    setTaskList((prevTaskList) => prevTaskList.filter(task => task.id !== taskId));
  };

  return (
    <>
      <Header
        taskText={taskText}
        handleInputChange={handleInputChange}
        handleAddTask={handleAddTask}
      />

      <CardList
        taskList={taskList}
        handleDeleteTask={handleDeleteTask}
      />
    </>
  );
};

export default App;
import { useState } from 'react';

import AddTask from './components/AddTask';
import Layout from './layouts';

function App() {
  const [tasks, setTasks] = useState(['Task 1', 'Task 2']);

  const addTaskToTasks = (taskToAdd) => {
    setTasks([...tasks, taskToAdd]);
  };

  const deleteTaskFromTasks = (taskToDelete) => {
    setTasks(tasks.filter((task) => task != taskToDelete));
  };

  return (
    <Layout addTask={<AddTask onAdd={addTaskToTasks} />}>
      {tasks.map((task) => (
        <p
          style={{ cursor: 'pointer' }}
          onClick={() => deleteTaskFromTasks(task)}
          key={task}
        >
          {task}
        </p>
      ))}
    </Layout>
  );
}

export default App;

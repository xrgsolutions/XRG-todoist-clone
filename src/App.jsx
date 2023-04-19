import { useState } from 'react';

import AddTask from './components/AddTask';
import Layout from './layouts';

function App() {
  const [tasks, setTasks] = useState(['Task 1', 'Task 2']);

  const addTaskToTasks = (taskToAdd) => {
    setTasks([...tasks, taskToAdd]);
  };

  return (
    <Layout addTask={<AddTask onAdd={addTaskToTasks} />}>
      {tasks.map((task) => (
        <p key={task}>{task}</p>
      ))}
    </Layout>
  );
}

export default App;

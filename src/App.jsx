import AddTask from './components/AddTask';
import Layout from './layouts';

function App() {
  return <Layout addTask={AddTask}>Children</Layout>;
}

export default App;

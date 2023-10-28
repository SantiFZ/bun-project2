import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import { TodoCompleted } from './components/TodoCompleted';
function App() {
  return (
    <div className="App">
      <TodoWrapper  />
      
      <TodoCompleted/>
    </div> 
   
  );
}

export default App;

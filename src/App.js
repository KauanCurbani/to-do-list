import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div class="app">
      <div className="todo-app">
        <TodoList />
      </div>
      <div className="footer">
        copyright © 2021 todos os direitos reservados
      </div>
    </div>
  );
}

export default App;

import Card from "./components/Card";
import { todos } from "../mock/mock";
import "./App.css";

function App() {
  return (
    <div className="wrapperTodos">
      <div className="todoList">
        {todos.map((todo) => (
          <Card data={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;

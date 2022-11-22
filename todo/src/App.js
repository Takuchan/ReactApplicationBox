import {useState} from "react"
import TodoList from "./TodoList";
function App() {
  const [todos,setTodos] = useState([]);

  return (
    <div>
      <TodoList todos={todos} />
      <input type="text"/>
      <button>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク:p0</div>
    </div>
  );
}

export default App;

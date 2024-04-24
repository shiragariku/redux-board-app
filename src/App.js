import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const postList = useSelector((state) => state.posts.value);
  console.log(postList);
  return (
    <div className="App">
      <div>
        <h1>React-Redux掲示板</h1>
      </div>
      <div className="addPost">
        <input type="text" placeholder="お名前" />
        <input type="text" placeholder="投稿内容" />
        <button>投稿</button>
        <hr />
      </div>
    </div>
  );
}

export default App;

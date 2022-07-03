import "./App.css";
import Todos from "./components/Todos";

function App() {
  return <Todos todos={[{ id: 1, text: "someText" }]} />;
}

export default App;

import "./App.css";
import { useBoolean } from "./hooks/useBoolean";

function App() {
  const [isToggle, { toggle, setTrue, setFalse }] = useBoolean(false);
  return (
    <div className="App">
      <button onClick={toggle}>Toggle</button>
      <button onClick={setTrue}>Set true</button>
      <button onClick={setFalse}>Set false</button>

      {isToggle.toString()}
    </div>
  );
}

export default App;

import "./index.css";
import Letter from "./components/Letter";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Letter letter="안" />
        <Letter letter="녕" />
        <Letter letter="하" />
        <Letter letter="세" />
        <Letter letter="요" />
      </div>
    </div>
  );
}

export default App;

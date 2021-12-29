import "./style.css";
import Counter from "@Components/Counter";
import img from "./img.jpg";

function App() {
  return (
    <div>
      <img src={img} alt="testimg" />
      <h1>{process.env.NAME}123</h1>
      <Counter />
    </div>
  );
}
export default App;

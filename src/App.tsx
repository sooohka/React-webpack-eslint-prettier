import "./style.css";
import Counter from "@Components/Counter";
import img from "./img.jpg";
import Random from "./assets/random.svg";

function App() {
  return (
    <div>
      <img src={img} alt='testimg' />
      <Random />
      <h1>{process.env.NAME}123</h1>
      <Counter />
    </div>
  );
}
export default App;

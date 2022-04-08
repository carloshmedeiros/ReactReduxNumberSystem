import "./styles.css";
import Intervalo from "./components/Intervalo";

import Media from "./components/Media";
import Soma from "./components/Soma";
import Sorteio from "./components/Sorteio";

export default function App() {
  return (
    <div className="App">
      <div className="linha">
        <Intervalo></Intervalo>
      </div>
      <div className="linha">
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>
    </div>
  );
}

import { useState } from "react";
import DrumButton from "./DrumButton";
import drumData from "./data.js";
import "./App.css";

function App() {
  const [keyPress, setKeyPress] = useState(
    "press any key or click button to play"
  );

  return (
    <>
      <div id="drum-machine">
        <div id="display">{keyPress.toUpperCase()}</div>
        <div className="drums">
          {drumData.map((drum, key) => (
            <DrumButton
              key={key}
              id={drum.id}
              src={drum.src}
              setKeyPress={setKeyPress}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

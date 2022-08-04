import "./App.css";

function App() {
  return (
    <>
      <div id="drum-machine">
        <div id="display">Drum Machine</div>
        <div className="drums">
          <button className="drum-pad" id="drum-q">
            Q<audio id="Q" className="clip" src="#"></audio>
          </button>
          <button className="drum-pad" id="drum-w">
            W<audio id="W" className="clip" src="#"></audio>
          </button>
          <button className="drum-pad" id="drum-e">
            E<audio id="E" className="clip" src="#"></audio>
          </button>
          <button className="drum-pad" id="drum-a">
            A<audio id="A" className="clip" src="#"></audio>
          </button>
          <button className="drum-pad" id="drum-s">
            S<audio id="S" className="clip" src="#"></audio>
          </button>
          <button className="drum-pad" id="drum-d">
            D<audio id="D" className="clip" src="#"></audio>
          </button>
          <button className="drum-pad" id="drum-z">
            Z<audio id="Z" className="clip" src="#"></audio>
          </button>
          <button className="drum-pad" id="drum-x">
            X<audio id="X" className="clip" src="#"></audio>
          </button>
          <button className="drum-pad" id="drum-c">
            C<audio id="C" className="clip" src="#"></audio>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

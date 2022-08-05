import { useRef } from "react";

const DrumButton = ({ id = "", src, setKeyPress }) => {
  const audio = useRef(null);

  const onClickListener = (e) => {
    audio.current.play();
    setKeyPress(id);
  };

  return (
    <button
      id={`drum-${id.toLowerCase()}`}
      className="drum-pad"
      onClick={onClickListener}
    >
      <span>{id}</span>
      <audio id={id} className="clip" src={src} ref={audio}></audio>
    </button>
  );
};

export default DrumButton;
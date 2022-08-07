import { useEffect, useRef } from "react";

const DrumButton = ({ id = "", src, setKeyPress }) => {
  const audio = useRef(null);

  const playSound = () => {
    try {
      audio.currentTime = 0;
      audio.current.play();
      setKeyPress(id);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickListener = (e) => playSound();

  const onKeyListener = () =>
    document.addEventListener("keypress", (e) => {
      if (e.key.toUpperCase() == id) {
        try {
          playSound();
        } catch (error) {}
      }
    });

  useEffect(() => {
    onKeyListener();
    return () => onKeyListener();
  }, []);

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

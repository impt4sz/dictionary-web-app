import playButton from "../../assets/images/icon-play.svg";
import { useState } from "react";

export default function HeaderAudio({ audioUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const playAudio = () => {
    const audio = new Audio(`${audioUrl}`);
    audio.play();
    setIsPlaying(true);
    audio.addEventListener("ended", () => {
      setIsPlaying(false);
    });
  };

  return (
    <button
      onClick={playAudio}
      disabled={isPlaying}
      style={{ border: "none", background: "none" }}
    >
      <img src={playButton} alt="" />
    </button>
  );
}

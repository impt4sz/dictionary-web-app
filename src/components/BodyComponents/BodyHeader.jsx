import HeaderAudio from "./HeaderAudio";

export default function BodyHeader({ word, phonetics, phonetic }) {
  const audioObj = phonetics.find((e) => e.audio);
  return (
    <div className="bodyHeader-container">
      <div>
        <h1 className="word-title">{word}</h1>
        {phonetic && <p className="phonetic">{phonetic}</p>}
      </div>
      {audioObj && <HeaderAudio audioUrl={audioObj.audio} />}
    </div>
  );
}

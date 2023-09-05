import BodyHeader from "./BodyComponents/BodyHeader";
import Word from "./BodyComponents/Word";

export default function Body({ wordData }) {
  if (!wordData.length) return null;
  return (
    <div>
      <BodyHeader
        word={wordData[0].word}
        phonetics={wordData[0].phonetics}
        phonetic={wordData[0].phonetic}
      />
      {wordData.map((word, i) => (
        <Word key={i} meanings={word.meanings} sourceUrls={word.sourceUrls} />
      ))}
    </div>
  );
}

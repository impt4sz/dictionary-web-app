import windowIcon from "../../assets/images/icon-new-window.svg";
import Meaning from "./Meaning";

export default function Word({ meanings, sourceUrls }) {
  const windowImg = <img src={windowIcon} alt="window icon" />;
  const sourceLinks = sourceUrls.map((url, i) => (
    <a
      className="source small-text-footer"
      key={i}
      href={url}
      rel="noreferrer"
      target="_blank"
    >
      {i === sourceUrls.length - 1 ? `${url}` : `${url},`}
      {windowImg}
    </a>
  ));
  return (
    <div>
      {meanings.map((meaning, i) => (
        <Meaning
          key={i}
          partOfSpeech={meaning.partOfSpeech}
          definitions={meaning.definitions}
        />
      ))}
      <div className="line-border"></div>
      <div className="source-container">
        <p className="small-text-footer">Source</p>
        {sourceLinks}
      </div>
    </div>
  );
}

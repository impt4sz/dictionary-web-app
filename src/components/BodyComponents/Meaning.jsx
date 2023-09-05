import Definition from "./Definition";

export default function Meaning({ partOfSpeech, definitions }) {
  return (
    <div>
      <div className="partSpeech-container">
        <h1 style={{ fontStyle: "italic" }} className="small-header">
          {partOfSpeech}
        </h1>
        <div className="line-border"></div>
      </div>
      <p className="light-text">Meaning</p>
      <ul>
        {definitions.map((def, i) => (
          <Definition
            key={i}
            definition={def.definition}
            synonyms={def.synonyms}
            antonyms={def.antonyms}
            example={def.example}
          />
        ))}
      </ul>
    </div>
  );
}

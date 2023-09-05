export default function Definition({ definition, synonyms, antonyms, example }) {
  const createString = (arr) => {
    const strings = arr.map((word, i) => (
      <p className="definition-string" key={i}>
        {i === arr.length - 1 ? `${word}` : `${word}, `}
      </p>
    ));
    return strings;
  };
  return (
    <div>
      <div style={{ paddingLeft: "1.37rem" }}>
        <li className="definition">{definition}</li>
      </div>
      {example && <p className="light-text example">{`"${example}"`}</p>}
      {synonyms.length > 0 && (
        <div className="definition-strings">
          <p className="light-text">Synonyms</p>
          {createString(synonyms)}
        </div>
      )}
      {antonyms.length > 0 && (
        <div className="definition-strings">
          <p className="light-text">Antonyms</p>
          {createString(antonyms)}
        </div>
      )}
    </div>
  );
}

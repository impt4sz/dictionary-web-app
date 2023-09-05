export default function Error({ error }) {
  return (
    <div className="error-container">
      <p style={{ fontSize: "4rem" }}>😕</p>
      <h1 className="small-header">{error.title}</h1>
      <p className="definition">
        {error.message} {error.resolution}
      </p>
    </div>
  );
}

// {
//     "title": "No Definitions Found",
//     "message": "Sorry pal, we couldn't find definitions for the word you were looking for.",
//     "resolution": "You can try the search again at later time or head to the web instead."
// }

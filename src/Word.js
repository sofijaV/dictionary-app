export default function Word(props) {
  if (props.data) {
    return (
      <div className="Word">
        <h1>{props.data.word}</h1>
        <p>{props.data.phonetic}</p>
      </div>
    );
  } else {
    return null;
  }
}

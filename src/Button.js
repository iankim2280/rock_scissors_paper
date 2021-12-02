import Reset from "./Reset";

function Button({ onClick }) {
  return (
    <button onClick={onClick}>
      <Reset />
    </button>
  );
}

export default Button;

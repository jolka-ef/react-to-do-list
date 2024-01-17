export const Button = ({ className, onCLick, text, type }) => {
  return (
    <button className={className} onClick={onCLick} type={type ? type : null}>
      {text}
    </button>
  );
};

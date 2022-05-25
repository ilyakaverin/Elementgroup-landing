import style from './style.module.css';

const Button = ({ name, click, isDisabled, action }) => {
  function handleClick() {
    click && click({ type: action });
  }

  return (
    <button className={style.button} onClick={() => handleClick()} disabled={isDisabled}>
      {name}
    </button>
  );
};
export default Button;

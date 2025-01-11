import style from "./InputField.module.scss";

export const InputField = ({ type, placeholder, name, labelText, action }) => {
  const onInputChange = (e) => {
    action(e.target.value);
  };
  return (
    <>
      {labelText && <label htmlFor={name}>{labelText}</label>}
      <input
        className={style.InputField}
        onChange={onInputChange}
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

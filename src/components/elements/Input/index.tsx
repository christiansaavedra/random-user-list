import { FC, ChangeEvent } from "react";
import styles from "./Input.module.scss";

interface InputProps {
  key?: string | number;
  name: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input: FC<InputProps> = ({ key, name, value, onChange, placeholder }) => {
  const getInputType = () => {
    if (name === "email") {
      return "email";
    }
    return "text";
  };

  return (
    <input
      key={key}
      name={name}
      type={getInputType()}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.input}
    />
  );
};

export default Input;

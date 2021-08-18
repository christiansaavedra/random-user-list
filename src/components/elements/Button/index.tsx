import { FC } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  label: string;
  onClick: () => void;
}
const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;

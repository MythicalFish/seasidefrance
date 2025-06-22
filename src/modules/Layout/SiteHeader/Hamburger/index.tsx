import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type Props = {
  toggleMenu: () => void;
  isOpen: boolean;
};

const Hamburger: React.FC<Props> = ({ toggleMenu, isOpen }) => {
  return (
    <button
      className={clsx(styles.hamburger, { [styles.open]: isOpen })}
      onClick={toggleMenu}
    >
      <span />
      <span />
      <span />
    </button>
  );
};

export default Hamburger;

import type { ReactNode } from "react";

import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
};

const Hero: React.FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Hero;

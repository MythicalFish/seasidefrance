interface Props {
  items: string[];
  className?: string;
  small?: boolean;
}

import clsx from 'clsx';
import styles from './styles.module.css';

const Pills = ({ items, className, small }: Props) => (
  <div className={clsx(styles.features, className, { [styles.small]: small })}>
    {items.map((item) => (
      <div className={styles.item}>{item}</div>
    ))}
  </div>
);

export default Pills;

import clsx from 'clsx';
import styles from './styles.module.css';

type Props = {
  id?: string;
  className?: string;
  cozy?: boolean;
  glassy?: boolean;
  children: React.ReactNode;
};

const Box: React.FC<Props> = ({ id, className, cozy, glassy, children }) => {
  return (
    <section
      id={id}
      className={clsx(styles.box, className, { [styles.cozy]: cozy, [styles.glassy]: glassy })}
    >
      {children}
    </section>
  );
};

export default Box;

import styles from './styles.module.css';
import clsx from 'clsx';
import Pin from './Pin';

type Props = {
  text: string;
  lat: number;
  lng: number;
  left?: boolean;
  highlight?: boolean;
};

const Marker: React.FC<Props> = ({ text, left, highlight }) => {
  return (
    <div className={styles.markerContainer}>
      <div className={clsx(styles.marker, left && styles.left, highlight && styles.highlight)}>
        <Pin />
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Marker;

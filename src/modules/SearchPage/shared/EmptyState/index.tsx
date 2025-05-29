import styles from './styles.module.css';

type Props = {
  message?: string;
};

const EmptyState = ({ message = 'No properties available.' }: Props) => (
  <div className={styles.emptyContainer}>
    <p className={styles.emptyText}>{message}</p>
  </div>
);

export default EmptyState;

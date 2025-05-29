import styles from './styles.module.css';

const LoadingState = () => (
  <div className={styles.loadingContainer}>
    <div className={styles.loadingSpinner}></div>
    <p className={styles.loadingText}>Searching available periods...</p>
  </div>
);

export default LoadingState;

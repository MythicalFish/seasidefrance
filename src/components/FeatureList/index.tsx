import styles from './styles.module.css';

type Props = {
  title: string;
  items: string[];
};

const FeatureList: React.FC<Props> = ({ title, items }: Props) => {
  return (
    <section className={styles.highlights}>
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default FeatureList;

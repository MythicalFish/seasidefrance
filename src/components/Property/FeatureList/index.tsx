import clsx from 'clsx';
import styles from './styles.module.css';

type Props = {
  title: string;
  items: string[];
  className?: string;
};

const FeatureList: React.FC<Props> = ({ title, items, className }: Props) => {
  return (
    <section className={clsx(className, styles.list)}>
      <div className="prose">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeatureList;

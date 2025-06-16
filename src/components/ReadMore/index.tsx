import { useState } from 'react';
import styles from './styles.module.css';

interface Props {
  content: string;
}

export default function ReadMore({ content }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.readMoreContainer}>
      <div
        className={`${styles.readMoreContent} md:!h-auto md:!max-h-none md:after:hidden prose ${isExpanded ? styles.expanded : ''}`}
        style={{
          maxHeight: isExpanded ? 'none' : '200px',
          overflow: isExpanded ? 'visible' : 'hidden',
          paddingBottom: isExpanded ? '40px' : '0',
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {!isExpanded && (
        <button
          className={`${styles.readMoreButton} md:hidden`}
          onClick={() => setIsExpanded(true)}
        >
          Read more
        </button>
      )}
    </div>
  );
}

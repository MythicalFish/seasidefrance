import Button from '@components/Button';
import styles from './styles.module.css';

type Props = {
  showControls: boolean;
  onToggleControls: () => void;
  onResetFilters: () => void;
};

const ControlsToggle = ({ showControls, onToggleControls, onResetFilters }: Props) => (
  <div className={styles.container}>
    {!showControls ? (
      <Button variant="primary" onClick={onToggleControls} icon={<FilterIcon />}>
        Refine dates
      </Button>
    ) : (
      <div className={styles.controlsGroup}>
        <Button variant="secondary" onClick={onToggleControls} icon={<ChevronUpIcon />}>
          Hide filters
        </Button>
        <Button variant="ghost" onClick={onResetFilters} icon={<XIcon />}>
          Show default results
        </Button>
      </div>
    )}
  </div>
);

// Icon components
const FilterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46 22,3"></polygon>
  </svg>
);

const ChevronUpIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="18,15 12,9 6,15"></polyline>
  </svg>
);

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default ControlsToggle;

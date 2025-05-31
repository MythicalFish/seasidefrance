import Button from '@components/Button';

type Props = {
  showControls: boolean;
  onToggleControls: () => void;
  onResetFilters: () => void;
};

const ControlsToggle = ({ showControls, onToggleControls, onResetFilters }: Props) => (
  <div className="mb-6">
    <div className="flex items-center gap-3 mb-4">
      <Button variant="secondary" onClick={onToggleControls}>
        {showControls ? 'Hide' : 'Refine dates'}
      </Button>
      <Button variant="secondary" onClick={onResetFilters}>
        Reset filters
      </Button>
    </div>
  </div>
);

export default ControlsToggle;

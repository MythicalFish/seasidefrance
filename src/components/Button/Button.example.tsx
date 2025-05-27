import React from 'react';
import Button from './index';

// Example icon components (you can replace these with your actual icons)
const FilterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46 22,3"></polygon>
  </svg>
);

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12,5 19,12 12,19"></polyline>
  </svg>
);

const ButtonExamples: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-6">Button Component Examples</h1>

      {/* Basic Variants */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" onClick={handleClick}>
            Primary Button
          </Button>
          <Button variant="secondary" onClick={handleClick}>
            Secondary Button
          </Button>
          <Button variant="ghost" onClick={handleClick}>
            Ghost Button
          </Button>
          <Button variant="danger" onClick={handleClick}>
            Danger Button
          </Button>
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm" onClick={handleClick}>
            Small
          </Button>
          <Button size="md" onClick={handleClick}>
            Medium
          </Button>
          <Button size="lg" onClick={handleClick}>
            Large
          </Button>
        </div>
      </section>

      {/* With Icons */}
      <section>
        <h2 className="text-lg font-semibold mb-4">With Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" icon={<FilterIcon />} onClick={handleClick}>
            Refine dates
          </Button>
          <Button
            variant="secondary"
            icon={<ArrowRightIcon />}
            iconPosition="right"
            onClick={handleClick}
          >
            Continue
          </Button>
        </div>
      </section>

      {/* As Links */}
      <section>
        <h2 className="text-lg font-semibold mb-4">As Links</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" href="/search">
            Go to Search
          </Button>
          <Button
            variant="secondary"
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            External Link
          </Button>
        </div>
      </section>

      {/* States */}
      <section>
        <h2 className="text-lg font-semibold mb-4">States</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" onClick={handleClick}>
            Normal
          </Button>
          <Button variant="primary" disabled onClick={handleClick}>
            Disabled
          </Button>
        </div>
      </section>

      {/* Full Width */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Full Width</h2>
        <Button variant="primary" fullWidth onClick={handleClick}>
          Full Width Button
        </Button>
      </section>
    </div>
  );
};

export default ButtonExamples;

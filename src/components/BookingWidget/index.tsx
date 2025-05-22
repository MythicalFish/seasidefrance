import { useState, useRef, useEffect } from 'react';
import Widget from './Widget';

type Props = {
  propertyId: number;
};

const BookingWidget = ({ propertyId }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className="relative" ref={wrapperRef}>
      <button className="text-sm text-gray-500 underline" onClick={() => setIsOpen(!isOpen)}>
        Select specific dates
      </button>
      {isOpen && <Widget propertyId={propertyId} />}
    </div>
  );
};

export default BookingWidget;

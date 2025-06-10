import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import { useStore } from '@nanostores/react';
import {
  searchStore,
  setStartDate,
  setIsPickerOpen,
  setExactDateSelected,
} from '@stores/searchStore';

import styles from './styles.module.css';

const ExactDateSelector = () => {
  const { startDate } = useStore(searchStore);

  const handleDateSelect = (date: Date | undefined) => {
    if (date) setStartDate(date);
    setIsPickerOpen(false);
    setExactDateSelected(true);
  };

  return (
    <DayPicker
      mode="single"
      selected={startDate}
      onSelect={handleDateSelect}
      disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
      className={styles.dayPicker}
      hideNavigation
      month={startDate}
      timeZone="+01:00"
    />
  );
};

export default ExactDateSelector;

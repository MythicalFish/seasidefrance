import React, { useState, useRef, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/style.css';

import styles from './styles.module.css';

type Props = {
  startDate: Date;
  setStartDate: (date: Date) => void;
  isPickerOpen: boolean;
  setIsPickerOpen: (isOpen: boolean) => void;
};

const ExactDateSelector = ({ startDate, setStartDate, setIsPickerOpen }: Props) => {
  const handleDateSelect = (date: Date | undefined) => {
    if (date) setStartDate(date);
    setIsPickerOpen(false);
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
    />
  );
};

export default ExactDateSelector;

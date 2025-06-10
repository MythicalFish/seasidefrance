import { atom } from 'nanostores';
import { DEFAULT_STAY_LENGTH } from '@lib/getBookingPeriods/constants';
import type { StayLengthOption } from '@modules/Availability/SearchControls';

export interface SearchState {
  startDate: Date;
  stayLength: StayLengthOption;
  isPickerOpen: boolean;
  exactDateSelected: boolean;
}

export const searchStore = atom<SearchState>({
  startDate: new Date(),
  stayLength: DEFAULT_STAY_LENGTH as StayLengthOption,
  isPickerOpen: false,
  exactDateSelected: false,
});

export const setStartDate = (date: Date) => {
  searchStore.set({ ...searchStore.get(), startDate: date });
};

export const setStayLength = (length: StayLengthOption) => {
  searchStore.set({ ...searchStore.get(), stayLength: length });
};

export const setIsPickerOpen = (isOpen: boolean) => {
  searchStore.set({ ...searchStore.get(), isPickerOpen: isOpen });
};

export const setExactDateSelected = (isSelected: boolean) => {
  searchStore.set({ ...searchStore.get(), exactDateSelected: isSelected });
};

export const updateSearchState = (updates: Partial<SearchState>) => {
  searchStore.set({ ...searchStore.get(), ...updates });
};

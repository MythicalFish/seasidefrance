import { atom } from 'nanostores';

export interface BookingState {
  nights: number;
  month: number;
}

// Initialize with default values
export const bookingStore = atom<BookingState>({
  nights: 2,
  month: new Date().getMonth() + 1, // Current month (1-12)
});

// Actions to update the store
export function setNights(nights: number) {
  bookingStore.set({
    ...bookingStore.get(),
    nights,
  });
}

export function setMonth(month: number) {
  bookingStore.set({
    ...bookingStore.get(),
    month,
  });
}

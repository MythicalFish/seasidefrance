import type { Availabilities } from './getAvailability';

const getBookingPeriods = (availabilities: Availabilities): Availabilities => {
  const result: Availabilities = [];

  for (const dateArray of availabilities) {
    // If the array has 7 or fewer dates, add it as is
    if (dateArray.length <= 7) {
      result.push(dateArray);
    } else {
      // Split the array into chunks of 7
      for (let i = 0; i < dateArray.length; i += 7) {
        const chunk = dateArray.slice(i, i + 7);
        result.push(chunk);
      }
    }
  }

  return result.map((arr) => arr.sort());
  // return result.map((arr) => arr.sort((a, b) => new Date(a).getTime() - new Date(b).getTime()));
};

export default getBookingPeriods;

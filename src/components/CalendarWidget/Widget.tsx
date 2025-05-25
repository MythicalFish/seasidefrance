import { useEffect } from 'react';

type Props = {
  propertyId: number;
};

const BookingWidget = ({ propertyId }: Props) => {
  useEffect(() => {
    // Check if script is already loaded
    if (
      !document.querySelector(
        'script[src="https://app.lodgify.com/book-now-box/1.23.0/renderBookNowBox.js"]'
      )
    ) {
      const script = document.createElement('script');
      script.src = 'https://app.lodgify.com/book-now-box/1.23.0/renderBookNowBox.js';
      script.defer = true;
      document.head.appendChild(script);

      // Clean up
      return () => {
        const loadedScript = document.querySelector(
          'script[src="https://app.lodgify.com/book-now-box/1.23.0/renderBookNowBox.js"]'
        );
        if (loadedScript) {
          document.head.removeChild(loadedScript);
        }
      };
    }
  }, []);

  return (
    <div className="absolute top-0 left-0 w-[330px] min-h-[217px] border-2 border-gray-500 rounded-lg">
      <div
        id="lodgify-book-now-box"
        data-rental-id={String(propertyId)}
        data-website-id="280907"
        data-slug="rochebonne"
        data-language-code="en"
        data-new-tab="true"
        data-version="1.23.0"
        data-currency-code="EUR"
        data-hide-minimum-price
        data-check-in-label="Check-in"
        data-check-out-label="Check-out"
        data-guests-label="Guests"
        data-guests-singular-label="{{NumberOfGuests}} guest"
        data-guests-plural-label="{{NumberOfGuests}} guests"
        data-location-input-label="Location"
        data-total-price-label="Total price:"
        data-select-dates-to-see-price-label="Select dates to see total price"
        data-minimum-price-per-night-first-label="From"
        data-minimum-price-per-night-second-label="per night"
        data-book-button-label="Book Now"
        data-guests-breakdown-label="Guests"
        data-adults-label='{"one":"adult","other":"adults"}'
        data-adults-description="Ages {minAge} or above"
        data-children-label='{"one":"child","other":"children"}'
        data-children-description="Ages {minAge}-{maxAge}"
        data-children-not-allowed-label="Not suitable for children"
        data-infants-label='{"one":"infant","other":"infants"}'
        data-infants-description="Under {maxAge}"
        data-infants-not-allowed-label="Not suitable for infants"
        data-pets-label='{"one":"pet","other":"pets"}'
        data-pets-not-allowed-label="Not allowed"
        data-done-label="Done"
      ></div>
    </div>
  );
};

export default BookingWidget;

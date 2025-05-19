export interface LodgifyAvailability {
  propertyId: number;
  start: string;
  end: string;
  available: number;
  closedPeriod?: {
    start: string;
    end: string;
    reason?: string;
  };
  bookings?: Array<{
    id: number;
    start: string;
    end: string;
    status: string;
  }>;
  channelCalendars?: Array<{
    start: string;
    end: string;
    reason?: string;
  }>;
}

export interface AvailabilityResponse {
  items: LodgifyAvailability[];
  total: number;
}

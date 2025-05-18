export type Room = {
  id: number;
  name: string;
};

export type PropertyV1 = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  rooms: Room[];
  subscription_plans: string[];
};

export type Property = {
  id: number;
  name: string;
  internal_name: string | null;
  description: string;
  latitude: number;
  longitude: number;
  address: string;
  hide_address: boolean;
  zip: string;
  city: string;
  state: string;
  country_code: string;
  country: string;
  image_url: string;
  has_addons: boolean;
  has_agreement: boolean;
  agreement_text: string;
  agreement_url: string | null;
  contact: {
    spoken_languages: string[];
  };
  rating: number;
  price_unit_in_days: number;
  min_price: number;
  original_min_price: number;
  max_price: number;
  original_max_price: number;
  rooms: Room[];
  in_out_max_date: string;
  in_out: any;
  currency_code: string;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  subscription_plans: string[];
};

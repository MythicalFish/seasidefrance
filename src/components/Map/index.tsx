import { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyle from './mapStyle';
import Marker from './Marker';

const GOOGLE_MAPS_API_KEY = 'AIzaSyBSr7OBcCo_2TC-sBuOPufN7kb-S1Qw_lM';

const Map = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  return (
    <div
      id="location"
      className="w-full h-[200px] lg:h-[470px] lg:w-[460px] flex-none rounded-lg overflow-hidden"
    >
      <GoogleMapReact
        options={{
          styles: mapStyle,
          mapTypeId: 'terrain',
        }}
        bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
        defaultCenter={{
          lat: 45.6262198,
          lng: -1.185302,
        }}
        defaultZoom={7.5}
      >
        <Marker lat={45.793648} lng={-1.034697} text="Rochebonne" highlight />
        <Marker lat={46.162413} lng={-1.150898} text="La Rochelle" />
        <Marker lat={44.839882} lng={-0.574353} text="Bordeaux" />
        <Marker lat={46.195159} lng={-1.384777} text="Ile de Ré" left />
        <Marker lat={45.95} lng={-1.29} text="Ile d'Oléron" left />
        <Marker lat={48.856614} lng={2.352222} text="Paris" left />
      </GoogleMapReact>
    </div>
  );
};

export default Map;

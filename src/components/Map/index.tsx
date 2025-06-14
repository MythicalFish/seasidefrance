import GoogleMapReact from 'google-map-react';
import mapStyle from './mapStyle';

const GOOGLE_MAPS_API_KEY = 'AIzaSyBSr7OBcCo_2TC-sBuOPufN7kb-S1Qw_lM';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
  return (
    <div style={{ height: '400px', width: '400px', flex: 'none' }}>
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
        <AnyReactComponent lat={45.793648} lng={-1.034697} text="X" />
        <AnyReactComponent lat={46.162413} lng={-1.150898} text="La Rochelle" />
        <AnyReactComponent lat={45.793648} lng={-1.034697} text="X" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;

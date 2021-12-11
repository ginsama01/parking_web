import React from 'react'
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from "react-google-maps"
import {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';

function Map() {
  const parks = [
    {location: "Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam"},
    {location: "Bac Giang"},
	{location: "144 Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Việt Nam"}
  ];

  const [markers, setMarkers] = React.useState([]);

  React.useEffect(() => {
    parks.map(park =>
		geocodeByAddress(park.location)
		.then(results => getLatLng(results[0]))
		.then(latLng => {
			const data = {lat: latLng.lat, lng: latLng.lng}
			  setMarkers((prev) => [...prev, data]);
		})
		.catch(error => console.error('Error', error)));
  }, []);

  return (
    <div>
      <GoogleMap
          defaultZoom={15}
          defaultCenter={{ lat: 21.0168864, lng: 105.7855574 }}
        >
        {markers.map((marker)=> {
          return (
            <Marker position={{ lat: marker.lat, lng: marker.lng }} />
          )
        })}
      </GoogleMap>
    </div>
  );
}

export default withScriptjs(withGoogleMap(Map));
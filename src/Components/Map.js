import React from 'react'
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps"

const Map = () => {
  return (
    <div>
      <GoogleMap
          defaultZoom={15}
          defaultCenter={{ lat: 21.0168864, lng: 105.7855574 }}
        >
      </GoogleMap>
    </div>
  );
}

export default withScriptjs(withGoogleMap(Map));
import React, {useState} from 'react'
import { Marker, InfoWindow } from 'react-google-maps'
import Autocomplete from 'react-google-autocomplete'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
import { useSelector, useDispatch } from "react-redux";


function AllMarker(){
  // const parks = useSelector(state => state.all_parks)
  // const dispatch = useDispatch();
  let markers = [];
  const parks = [ {location: "Hà Nội, Hoàn Kiếm, Hà Nội, Việt Nam"},{location: "Tôkyô, Nhật Bản"}]
  parks.map(park =>
    geocodeByAddress(park.location)
    .then(results => getLatLng(results[0]))
    .then(latLng => {markers.unshift(latLng);})
    .catch(error => console.error('Error', error)))
  console.log(markers)
  return (
    <ul>
        {markers.map((marker)=>
        <Marker position={marker}>
        </Marker>)}

    </ul>
  )
}

export default AllMarker;
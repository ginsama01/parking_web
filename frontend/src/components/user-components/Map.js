import React from 'react'
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from "react-google-maps"
import {
	geocodeByAddress,
	getLatLng,
} from 'react-places-autocomplete';
import { fetchAllParks } from "../../redux/UserActionCreators";
import { connect } from "react-redux";

const mapStateToProps = state => {
	return {
		all_parks: state.all_parks,
	}
}

const mapDispatchToProps = dispatch => ({
	fetchAllParks: () => dispatch(fetchAllParks())
});

function Map(props) {

	const { search_info } = props
	const [markers, setMarkers] = React.useState([]);

	React.useEffect(() => {
		props.fetchAllParks();
	}, []);

	React.useEffect(() => {
		props.all_parks.parks.map(park =>
			geocodeByAddress(park.location)
				.then(results => getLatLng(results[0]))
				.then(latLng => {
					const data = { park_id: park.park_id, lat: latLng.lat, lng: latLng.lng }
					setMarkers((prev) => [...prev, data]);
				})
				.catch(error => console.error('Error', error)));
	}, [props.all_parks.parks]);

	const handleClickMarker = (event, value) => {
		props.setSelectedPark(value);
	}

	return (
		<div>
			<GoogleMap
				defaultZoom={15}
				center={{ lat: search_info.lat, lng: search_info.lng }} >
				{markers.map((marker) => {
					return (
						<Marker position={{ lat: marker.lat, lng: marker.lng }} onClick={(event) => handleClickMarker(event, marker.park_id)} />
					)
				})}
			</GoogleMap>
		</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(withScriptjs(withGoogleMap(Map)));
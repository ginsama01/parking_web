import React from 'react'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';

function Search() {
    const [address, setAddress] = React.useState("")
    const handleChange = (value) => {
        setAddress(value);
    }
    const handleSelect = (value) => {
        geocodeByAddress(value)
        .then(results => getLatLng(results[0]))
        .then(latLng => console.log('Success', latLng))
        .catch(error => console.error('Error', error));
        setAddress(value);
    }
        return (
            <div>
                <PlacesAutocomplete value={address} onChange={handleChange} onSelect={handleSelect}>
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            <input
                                {...getInputProps({
                                    placeholder: 'Nhập địa chỉ',
                                    className: 'form-control',
                                })}
                            />
                            <div className="autocomplete-dropdown-container">
                                {loading && <div>Loading...</div>}
                                {suggestions.map(suggestion => {
                                    const className = suggestion.active ?
                                        'suggestion-item--active' :
                                        'suggestion-item'
    
                                    const style = suggestion.active ?
                                        { backgroundColor: '#CEE5D0', cursor: 'pointer' } :
                                        { backgroundColor: '#ffffff', cursor: 'pointer' }
    
                                    return (
                                        <div {...getSuggestionItemProps(suggestion, { className, style, })}>
                                            <span>
                                                {suggestion.description}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </PlacesAutocomplete>
            </div>
        );
    

}
export default Search;
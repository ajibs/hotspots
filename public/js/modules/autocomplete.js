import searchPlaces from './searchPlaces';


function autocomplete(input) {
  if (!input) return; // skip this function from running if there is no input on the page

  const dropdown = new google.maps.places.Autocomplete(input);
  dropdown.addListener('place_changed', () => {
    const place = dropdown.getPlace();
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    searchPlaces(lat, lng);
  });

  // if someone hits enter on the address field, don't submit the form
  input.on('keydown', (e) => {
    if (e.keyCode === 13) e.preventDefault();
  });
}


export default autocomplete;

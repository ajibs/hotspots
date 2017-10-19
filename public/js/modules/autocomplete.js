import axios from 'axios';

function searchPlaces(latInput, lngInput) {
  console.log(latInput, lngInput);
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=7.377535,3.9470396&radius=10000&type=night_club&key=AIzaSyDPxdi1VQQ3vF8voAvgQ93jugBmHEAc5fY';
  axios
    .get(proxyurl + url)
    .then((res) => {
      const hotspots = res.data;
      // console.log(hotspots);
      console.log(hotspots.results[0].name);
      document.getElementById('data').innerHTML = hotspots.results[0].name;
    })
    .catch(err => console.error(err));
}


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

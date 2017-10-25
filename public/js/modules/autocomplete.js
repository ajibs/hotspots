import axios from 'axios';
import { $ } from './bling';

function searchPlaces(latInput, lngInput) {
  console.log(latInput, lngInput);
  $('#data').innerHTML = '';

  // remove CORS proxy on uploading to host
  const proxyurl = 'https://ajibs-cors-anywhere.herokuapp.com/';

  // pass lat, lng and places key to url
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latInput},${lngInput}&radius=10000&type=night_club&key=AIzaSyDPxdi1VQQ3vF8voAvgQ93jugBmHEAc5fY`;
  // const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=7.3775,3.94703&radius=10000&type=night_club&key=AIzaSyDPxdi1VQQ3vF8voAvgQ93jugBmHEAc5fY`;
  axios
    .get(proxyurl + url)
    .then((res) => {
      const hotspots = res.data;

      // hotspots.results contains all the data I need
      hotspots.results.forEach((place) => {
        console.log(place.name);
        // render data on the page
        $('#data').innerHTML += `${place.name}<br><br>`;
      });
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

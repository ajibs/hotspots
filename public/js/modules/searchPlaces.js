import axios from 'axios';
import { $, $$ } from './bling';
import ajaxGoing from './ajaxGoing';


function openModal() {
  $('#chillOut').style.display = 'block';
}


function closeModal() {
  $('#chillOut').style.display = 'none';
}

function generateHotspotsLayout(hotspot) {
  return `
  <div class="col-md-8 col-md-offset-2 top-wrapper">
    <form action="/places/${hotspot.place_id}" class="going">
      <h3><strong>${hotspot.name}</strong></h3>
      <p>Rating: ${hotspot.rating || 'Not Available'} </p>
      <button type="submit" name="goingButton" class="data-button">0 Going</button>
      </form>
  </div>
`;
}


function searchPlaces(latInput, lngInput) {
  $('#data').innerHTML = '';
  openModal();

  // remove CORS proxy on uploading to host
  // const proxyurl = 'https://ajibs-cors-anywhere.herokuapp.com/';

  // pass lat, lng and places key to url
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latInput},${lngInput}&radius=10000&type=night_club&key=AIzaSyDPxdi1VQQ3vF8voAvgQ93jugBmHEAc5fY`;
  axios
    .get(url)
    .then((res) => {
      const hotspots = res.data.results;
      let html = '';

      // hotspots contains all the data I need
      hotspots.forEach((place) => {
        // generate html and save to variable
        html += generateHotspotsLayout(place);
      });

      // paint html to page
      $('#data').innerHTML = html;
      closeModal();

      // pass token to ajaxGoing because of csrf package
      const csrfGeneralToken = $('#csrfGeneralToken').value;

      // when user clicks "going button" update database and UI
      $$('form.going').on('submit', function(e) {
        ajaxGoing(e, this, csrfGeneralToken);
      });
    })
    .catch((err) => {
      console.error(err);
      closeModal();
      alert('Error! Unable to Retrieve Night clubs at the moment');
    });
}


export default searchPlaces;

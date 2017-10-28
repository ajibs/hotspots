import axios from 'axios';
import { $, $$ } from './bling';
import ajaxGoing from './ajaxGoing';


function openModal() {
  $('#chillOut').style.display = 'block';
}


function closeModal() {
  $('#chillOut').style.display = 'none';
}


function searchPlaces(latInput, lngInput) {
  console.log(latInput, lngInput);
  $('#data').innerHTML = '';
  openModal();

  // remove CORS proxy on uploading to host
  const proxyurl = 'https://ajibs-cors-anywhere.herokuapp.com/';

  // pass lat, lng and places key to url
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latInput},${lngInput}&radius=10000&type=night_club&key=AIzaSyDPxdi1VQQ3vF8voAvgQ93jugBmHEAc5fY`;
  axios
    .get(proxyurl + url)
    .then((res) => {
      const hotspots = res.data;
      const csrfGeneralToken = $('#csrfGeneralToken').value;
      let html = '';
      // hotspots.results contains all the data I need
      hotspots.results.forEach((place) => {
        // render data on the page
        html +=
          `<form action="/places/${place.place_id}" class="going">
            <input type="hidden" name="_csrf" value=${csrfGeneralToken}>
            ${place.name}
            <button type="submit" name="goingButton">0 Going</button>
          </form><br><br>
          `;
      });
      $('#data').innerHTML = html;
      closeModal();

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

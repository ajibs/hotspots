import axios from 'axios';

function ajaxGoing(e, target, csrfToken) {
  e.preventDefault();
  axios
    .post(target.action, {
      _csrf: csrfToken
    })
    .then((res) => {
      // user not logged in; thus no message property
      if (!res.data.message) {
        alert('You must be logged in');
        // could replace this with production url for better readility
        window.location.href = `${self.location}login`;
      }

      const result = res.data;
      const value = result.updated ? result.updated.numberTonight : result.newSpot.numberTonight;

      // select "going button" with name tag
      const button = target.goingButton;
      button.innerHTML = `${value} Going`;
    })
    .catch(err => console.error(err));
}

export default ajaxGoing;

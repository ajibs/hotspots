import axios from 'axios';

function ajaxGoing(e, target, csrfToken) {
  e.preventDefault();
  axios
    .post(target.action, {
      _csrf: csrfToken
    })
    .then((res) => {
      console.log(res.data);
      const value = res.data.updatedPlace ? res.data.updatedPlace.numberTonight : res.data.newHotspot.numberTonight;

      const button = target.goingButton;
      button.innerHTML = `${value} Going`;
    })
    .catch(err => console.error(err));
}

export default ajaxGoing;

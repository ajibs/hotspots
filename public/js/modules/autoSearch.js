import searchPlaces from './searchPlaces';

function autoSearch(input) {
  input.on('click', () => {
    if (navigator.geolocation) {
      const geoSuccess = (position) => {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        searchPlaces(latitude, longitude);
      };

      const geoError = (error) => {
        console.log(`Error occured. Error code: ${error.code}`);
      };

      const geoOptions = {
        // tell the browser to use a recently obtained geolocation result; for speed
        maximumAge: 5 * 60 * 1000,
        // timeout in case my request for current position never returns
        timeout: 10 * 1000
      };

      navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
    } else {
      console.log('Error! Your browser does not support geolocation');
    }
  });
}

export default autoSearch;

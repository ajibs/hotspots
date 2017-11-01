import '../css/style.css';

import { $ } from './modules/bling';
import autocomplete from './modules/autocomplete';
import geoLocate from './modules/geoLocate';

autocomplete($('#search-input'));

$('#your-location').on('click', geoLocate);

if (signedInUser) {
  geoLocate();
}

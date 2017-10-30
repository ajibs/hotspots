import '../css/style.css';

import { $ } from './modules/bling';
import autocomplete from './modules/autocomplete';
import geoLocate from './modules/geoLocate';

autocomplete($('#search-place'));

if (signedInUser) {
  geoLocate();
}
$('#your-location').on('click', geoLocate);

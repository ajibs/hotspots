import '../css/style.css';

import { $ } from './modules/bling';
import autocomplete from './modules/autocomplete';
import autoSearch from './modules/autoSearch';

autocomplete($('#search-place'));
autoSearch($('#geolocation'));


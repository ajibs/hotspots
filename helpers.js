/**
 * File of helper functions that we use repeatedly and can expose to our template
 */

// built-in node module to help us read files from the server we are running on
const fs = require('fs');

// dump is a function that can be used to preview data from the database
exports.dump = obj => JSON.stringify(obj, null, 2);

// favicon
exports.icon = name => fs.readFileSync(`./public/images/icons/${name}.svg`);

// site name
exports.siteName = 'Best Hangouts Around';

// site menu
exports.menu = [
  { slug: '/featured', title: 'Featured Hotspots', icon: 'hotspots' },
  { slug: '/explore', title: 'Explore Hostpots', icon: 'explore' }
];

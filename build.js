const bundles = require('./bundles');

(async () => {
  console.log('Compiling modern and legacy versions of scripts');
  await bundles();
})();
// Handle the gaia-header back
var gaiaHeader = document.querySelector('gaia-header');
gaiaHeader.addEventListener('action', e => {
  e.preventDefault();
  window.close();
});

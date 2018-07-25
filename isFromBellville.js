module.exports = function(registration) {
  if (registration.startsWith('CY'))
    return true;
  else
    return false;
}
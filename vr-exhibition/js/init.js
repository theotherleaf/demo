if (AFRAME.utils.device.isMobile()) {
  document.querySelector('#scene').setAttribute('joystick', '');
  document.querySelector('#camera').setAttribute('look-controls', '');
} else {
  document.querySelector('#camera').setAttribute('universal-controls', '');
}

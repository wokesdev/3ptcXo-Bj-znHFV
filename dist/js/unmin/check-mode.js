var whatModeIsIt = localStorage.getItem('choosen_web_mode');
if (whatModeIsIt == 'light_mode') {
    lightMode();
}
function lightMode() {
    $('html, body').addClass('light__mode__body');
    $('h1, h2, h3, h4, h5, h6').addClass('light__mode__headers');
    $('p').addClass('light__mode__parag');
    $('a').addClass('light__mode__anchor');
}

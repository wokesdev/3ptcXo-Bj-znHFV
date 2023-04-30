window.onload = () => {
    setTimeout(() => {
        document.getElementById('arc-widget-container') ? document.getElementById('arc-widget-container').style.setProperty('z-index', 202, 'important') : null;
        document.getElementById('onesignal-bell-container') ? document.getElementById('onesignal-bell-container').style.setProperty('z-index', 202, 'important') : null;
    }, 3000);
};

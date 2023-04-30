$(window).on('load', function () {
    setTimeout(() => {
        if (Notification.permission === 'granted' || Notification.permission === 'denied' || !document.body.contains(document.getElementsByClassName('onesignal-customlink-subscribe')[0])) {
            document.getElementById('onesignalCustomlink').style.display = 'none';
        }
    }, 1000);
});

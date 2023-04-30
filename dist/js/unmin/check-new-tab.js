function checkUseNewTab() {
    const useNewTab = localStorage.getItem('use_new_tab');
    if (window.matchMedia('(display-mode: standalone)').matches || useNewTab == 'none') {
        // if webapp installed, remove 'target' attribute of links
        document.querySelectorAll('a[target=_blank]').forEach(function(a) {
            appDomain = $('#appUrl').val().replace('https://', '').replace('http://', '');
            if (a.href.includes(appDomain)) {
                a.removeAttribute('target');
            }
        });

        if (window.matchMedia('(display-mode: standalone)').matches) {
            $('#new-tab-setting').hide();
        }
    } else if (useNewTab == 'all') {
        document.querySelectorAll('a').forEach(function(a) {
            a.setAttribute('target', '_blank');
        });
    }
}

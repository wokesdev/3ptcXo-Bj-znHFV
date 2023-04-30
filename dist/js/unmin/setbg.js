function setBg() {
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
        if (parseInt($('#isDesktop').val())) {
            $(this).hover(function () {
                $(this).css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(' + bg + ')');
            }, function () {
                $(this).css('background-image', 'url(' + bg + ')');
            });
        }
    });
}

function setBgV2() {
    $('.set-bg-v2').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(' + bg + ')');
    });
}

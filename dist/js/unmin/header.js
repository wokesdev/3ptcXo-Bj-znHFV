$(window).on('load', function() {
    function openDropdown(id, setId, that, leftPx = '40px', topPx = '62px') {
        $(id).css('left', leftPx);
        $(id).css('top', topPx);
        $(id).css('opacity', 1);
        $(id).css('visibility', 'visible');
        that.attr('id', setId);
    }

    function closeDropdown(id, setId, that, leftPx = 0, topPx = '82px') {
        $(id).css('left', leftPx);
        $(id).css('top', topPx);
        $(id).css('opacity', 0);
        $(id).css('visibility', 'hidden');
        that.attr('id', setId);
    }

    $(document).on('click', '#settingButton', function () {
        openDropdown('#settingDropdown', 'unsettingButton', $(this), '17px');
    });

    $(document).on('click', '#unsettingButton', function () {
        closeDropdown('#settingDropdown', 'settingButton', $(this), '17px');
    });

    $(document).on('click', '#profileButton', function () {
        leftPx = parseInt($('#isDesktop').val()) ? '40px' : '-5px';
        topPx = parseInt($('#isDesktop').val()) ? '62px' : '50px';
        openDropdown('#profileDropdown', 'unprofileButton', $(this), leftPx, topPx);
    });

    $(document).on('click', '#unprofileButton', function () {
        closeDropdown('#profileDropdown', 'profileButton', $(this));
    });
});

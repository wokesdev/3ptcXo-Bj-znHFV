$(window).on('load', function () {
    onClickSearch();
});

// const crate = new Crate({
//     server: '631920413013966898',
//     // channel: '631925127524777985',
//     channel: '1038311677051031632',
//     location: [-70, 'right'],
//     color: '#e53637',
//     // glyph: ['https://cdn.discordapp.com/attachments/953231911885631498/953237081918939176/kurama-chat-white.png', '80%']
// });

function hideCrate() {
    typeof crateVar === 'object' ? crateVar.hide() : null;
}

function showCrate() {
    typeof crateVar === 'object' ? crateVar.show() : null;
}

function botRightCrate() {
    typeof crateVar === 'object' ? crateVar.setOptions({
        location: ['bottom', 'right'],
    }) : null;
}

function botRightUpCrate() {
    typeof crateVar === 'object' ? crateVar.setOptions({
        location: [-70, 'right'],
    }) : null;
}

function hideChatbro() {
    document.getElementById('kuramachat') ? document.getElementById('kuramachat').style.setProperty('display', 'none', 'important') : null;
}

function showChatbro() {
    document.getElementById('kuramachat') ? document.getElementById('kuramachat').style.setProperty('display', 'block', 'important') : null;
}

function hideOnesignal() {
    document.getElementById('onesignal-bell-container') ? document.getElementById('onesignal-bell-container').style.setProperty('display', 'none', 'important') : null;
}

function showOnesignal() {
    document.getElementById('onesignal-bell-container') ? document.getElementById('onesignal-bell-container').style.setProperty('display', 'block', 'important') : null;
}

function hideArc() {
    document.getElementById('arc-widget-container') ? document.getElementById('arc-widget-container').style.setProperty('display', 'none', 'important') : null;
}

function showArc() {
    document.getElementById('arc-widget-container') ? document.getElementById('arc-widget-container').style.setProperty('display', 'block', 'important') : null;
}

function onClickSearch() {
    var searchElements = document.getElementsByClassName("search-switch");
    var searchFn = function() {
        hideCrate();
        hideArc();
        hideOnesignal();
        hideChatbro();
    };
    for (var i = 0; i < searchElements.length; i++) {
        searchElements[i].addEventListener('click', searchFn, false);
    }

    var searchCloseElements = document.getElementsByClassName("search-close-switch");
    var searchCloseFn = function() {
        showCrate();
        showArc();
        showOnesignal();
        showChatbro();
    };
    for (var i = 0; i < searchCloseElements.length; i++) {
        searchCloseElements[i].addEventListener('click', searchCloseFn, false);
    }
}

function chatbroListener() {
    if (parseInt(document.getElementById('isDesktop').value)) {
        $(document).on('click', '.chatbro_minimize_button', function () {
            botRightUpCrate();
        });

        $(document).on('click', '.chatbro_minimized_header', function () {
            botRightCrate();
        });

        setTimeout(() => {
            if ($('.chatbro_opacity').hasClass('chatbro_chat')) {
                botRightCrate();
            } else {
                botRightUpCrate();
            }
        }, 1000);

    } else {
        $(document).on('click', '.chatbro_minimize_button', function () {
            showCrate();
            showArc();
            showOnesignal();
        });

        $(document).on('click', '.chatbro_minimized_header', function () {
            hideCrate();
            hideArc();
            hideOnesignal();
        });
    }
}

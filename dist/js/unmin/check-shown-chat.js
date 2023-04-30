$(window).on('load', function () {
    checkUseNewTab();
    checkShownChat();
});

function checkShownChat() {
    const shownChat = localStorage.getItem('shown_chat');
    switch (shownChat) {
        case 'only_discord':
            hideChatbro();
            showCrate();
            botRightCrate();
            break;

        case 'only_chatbro':
            showChatbro();
            hideCrate();
            break;

        case 'none':
            hideChatbro();
            hideCrate();
            break;

        default:
            showChatbro();
            showCrate();
            botRightUpCrate();
            break;
    }
}

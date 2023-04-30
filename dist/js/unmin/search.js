$(window).on('load', function() {
    $('#quicksearchLoading').hide();
    $(document).on('input', '#search-input', debounce(() => {
        // code you would like to run 1000ms after the keyup event has stopped firing
        // further keyup events reset the timer, as expected

        url = $('#search-anime-form').attr('action');
        search = $('#search-input').val();
        searchSort = $('#search-sort-input').val();
        queryParams = '?' + 'search=' + search + '&order_by=' + searchSort +  '&quicksearch=' + 1;
        fullUrl = url + encodeURI(queryParams);
        useQS = localStorage.getItem('use_quicksearch') ? parseInt(localStorage.getItem('use_quicksearch')) : true;

        if (search && useQS) {
            $('#quicksearchLoading').show();
            $('#quicksearchSection').load(fullUrl + ' #quicksearchSection>*', '', function () {
                $('#searchKeywords').text(search);
                $('#search-input').focusTextToEnd();
                setBg();
                checkUseNewTab();
                $('#quicksearchLoading').hide();
            });
        }
    }, 1000));
});

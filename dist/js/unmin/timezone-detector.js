$(window).on('load', function() {
    checkTzCookieAuto();
});

function checkTzCookieAuto() {
    if (
        document.cookie.split(';').some((item) => item.includes('auto_timezone_v2=yes'))
        || !document.cookie.split(';').some((item) => item.trim().startsWith('sel_timezone_v2='))
        || !document.cookie.split(';').some((item) => item.trim().startsWith('auto_timezone_v2='))
        || !document.cookie.split(';').some((item) => item.trim().startsWith('full_timezone_v2='))
        || !document.cookie.split(';').some((item) => item.trim().startsWith('short_timezone_v2='))
    ) {
        setTzCookie('auto');
    }
}

function getTimezoneName(timezone) {
    // const today = new Date();
    // const short = today.toLocaleDateString('id-ID');

    var abbrs = {
        // EST: 'Eastern Standard Time',
        // EDT: 'Eastern Daylight Time',
        // CST: 'Central Standard Time',
        // CDT: 'Central Daylight Time',
        // MST: 'Mountain Standard Time',
        // MDT: 'Mountain Daylight Time',
        // PST: 'Pacific Standard Time',
        // PDT: 'Pacific Daylight Time',
        WIB: 'Waktu Indonesia Barat',
        WITA: 'Waktu Indonesia Tengah',
        WIT: 'Waktu Indonesia Timur',
    };

    moment.fn.zoneName = function () {
        var abbr = this.zoneAbbr();
        return abbrs[abbr] || abbr;
    };

    if (timezone == 'auto') {
        var autoTz = moment.tz.guess(true);
        var fullTz = moment().tz(autoTz).format('zz');
        var shortTz = moment().tz(autoTz).format('z');
        // var fullTz = today.toLocaleDateString('id-ID', { timeZoneName: 'long' });
        // var shortTz = today.toLocaleDateString('id-ID', { timeZoneName: 'short' });
    } else {
        var fullTz = moment().tz(timezone).format('zz');
        var shortTz = moment().tz(timezone).format('z');
        // var fullTz = today.toLocaleDateString('id-ID', { timeZone: timezone, timeZoneName: 'long' });
        // var shortTz = today.toLocaleDateString('id-ID', { timeZone: timezone, timeZoneName: 'short' });
    }

    // Trying to remove date from the string in a locale-agnostic way
    // const shortIndex = fullTz.indexOf(short);
    // if (shortIndex >= 0) {
    //     const trimmed = fullTz.substring(0, shortIndex) + fullTz.substring(shortIndex + short.length);
    //     const trimmedShort = shortTz.substring(0, shortIndex) + shortTz.substring(shortIndex + short.length);

    //     // by this time `trimmed` should be the timezone's name with some punctuation -
    //     // trim it from both sides
    //     return {
    //         full: trimmed.replace(/^[\s,.\-:;]+|[\s,.\-:;]+$/g, ''),
    //         short: trimmedShort.replace(/^[\s,.\-:;]+|[\s,.\-:;]+$/g, '')
    //     };

    // } else {
    //     // in some magic case when short representation of date is not present in the long one, just return the long one as a fallback, since it should contain the timezone's name
    //     return {
    //         full: fullTz,
    //         short: shortTz
    //     };
    // }

    return {
        full: fullTz,
        short: shortTz,
    };
}

function setTzCookie(ovrValue) {
    var cookieDate = new Date();
    cookieDate.setFullYear(cookieDate.getFullYear() + 10);
    var cookieDateString = cookieDate.toUTCString();
    var cookieMaxAge = 3600 * 24 * 365 * 10; // 10 years

    cookieKey = 'sel_timezone_v2';
    value = ovrValue == 'auto' ? moment.tz.guess(true) : ovrValue;
    document.cookie = `${cookieKey}=${value}; expires=${cookieDateString}; max-age=${cookieMaxAge}; path=/`;

    cookieKey = 'auto_timezone_v2';
    value = ovrValue == 'auto' ? 'yes' : 'no';
    document.cookie = `${cookieKey}=${value}; expires=${cookieDateString}; max-age=${cookieMaxAge}; path=/`;

    timezoneName = getTimezoneName(ovrValue);

    cookieKey = 'full_timezone_v2';
    value = timezoneName.full;
    document.cookie = `${cookieKey}=${value}; expires=${cookieDateString}; max-age=${cookieMaxAge}; path=/`;

    cookieKey = 'short_timezone_v2';
    value = timezoneName.short;
    document.cookie = `${cookieKey}=${value}; expires=${cookieDateString}; max-age=${cookieMaxAge}; path=/`;
}

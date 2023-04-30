function app_get_url(e) {
    var n = document.createElement("a");
    return (n.href = e), n;
}
function app_get_host_name(e) {
    return null == e || "" === e || e.match(/^\#/) ? "" : -1 === (e = app_get_url(e)).href.search(/^http[s]?:\/\//) ? "" : e.href.split("/")[2].split(":")[0].toLowerCase();
}
function app_base64_encode(e) {
    return btoa(
        encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, n) {
            return String.fromCharCode("0x" + n);
        })
    );
}
function app_get_wildcard_domains(e) {
    var n = [];
    for (i = 0; i < e.length; i++) e[i].match(/^\*\./) && n.push(e[i].replace(/^\*\./, ""));
    return n;
}
function app_match_wildcard_domain(e, n) {
    var p = app_get_wildcard_domains(e);
    for (i = 0; i < p.length; i++) if (n.substr(-1 * p[i].length) === p[i]) return !0;
    return !1;
}
function app_domain_exist(e, n) {
    return -1 < e.indexOf(n) || app_match_wildcard_domain(e, n);
}
function kuramanime_sl(go_url, api, shorten_exclude) {
    if ("undefined" == typeof go_url) {
        return;
    }
    if ("undefined" == typeof api) {
        return;
    }
    "undefined" == typeof app_advert && (app_advert = 2);
    var n = 1;
    2 === app_advert && (n = 2), 0 === app_advert && (n = 0), "undefined" == typeof shorten_includ;
    var p = document.getElementsByTagName("a");
    if ("undefined" == typeof shorten_includ)
        if ("undefined" == typeof shorten_exclude);
        else
            for (a = 0; a < p.length; a++) {
                0 < (t = app_get_host_name(p[a].getAttribute("href"))).length && !1 === app_domain_exist(shorten_exclude, t)
                    ? (p[a].href = go_url + "full?api=" + encodeURIComponent(api) + "&url=" + app_base64_encode(p[a].href) + "&type=" + encodeURIComponent(n))
                    : "magnet:" === p[a].protocol && (p[a].href = go_url + "full?api=" + encodeURIComponent(api) + "&url=" + app_base64_encode(p[a].href) + "&type=" + encodeURIComponent(n));
            }
    else
        for (var a = 0; a < p.length; a++) {
            var t;
            0 < (t = app_get_host_name(p[a].getAttribute("href"))).length && app_domain_exist(shorten_includ, t)
                ? (p[a].href = go_url + "full?api=" + encodeURIComponent(api) + "&url=" + app_base64_encode(p[a].href) + "&type=" + encodeURIComponent(n))
                : "magnet:" === p[a].protocol && (p[a].href = go_url + "full?api=" + encodeURIComponent(api) + "&url=" + app_base64_encode(p[a].href) + "&type=" + encodeURIComponent(n));
        }
}

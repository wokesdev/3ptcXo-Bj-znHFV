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
    return e.indexOf(n) > -1 || app_match_wildcard_domain(e, n);
}
function kuramanime_atv(app_url, app_api_token, app_advert, app_exclude_domains) {
    if ("undefined" == typeof app_url) {
        if ("undefined" == typeof adlinkfly_url) return;
        app_url = adlinkfly_url;
    }
    if ("undefined" == typeof app_api_token) {
        if ("undefined" == typeof adlinkfly_api_token) return;
        app_api_token = adlinkfly_api_token;
    }
    "undefined" == typeof app_advert && ("undefined" != typeof adlinkfly_advert ? (app_advert = adlinkfly_advert) : (app_advert = 1));
    var n = 1;
    2 === app_advert && (n = 2), 0 === app_advert && (n = 0), "undefined" == typeof app_domains && "undefined" != typeof adlinkfly_domains && (app_domains = adlinkfly_domains);
    var p = document.getElementsByTagName("a");
    if ("undefined" == typeof app_domains)
        if (("undefined" == typeof app_exclude_domains && "undefined" != typeof adlinkfly_exclude_domains && (app_exclude_domains = adlinkfly_exclude_domains), "undefined" == typeof app_exclude_domains));
        else
            for (a = 0; a < p.length; a++) {
                (t = app_get_host_name(p[a].getAttribute("href"))).length > 0 && !1 === app_domain_exist(app_exclude_domains, t)
                    ? (p[a].href = app_url + "full/?api=" + encodeURIComponent(app_api_token) + "&url=" + app_base64_encode(p[a].href) + "&type=" + encodeURIComponent(n))
                    : "magnet:" === p[a].protocol && (p[a].href = app_url + "full/?api=" + encodeURIComponent(app_api_token) + "&url=" + app_base64_encode(p[a].href) + "&type=" + encodeURIComponent(n));
            }
    else
        for (var a = 0; a < p.length; a++) {
            var t;
            (t = app_get_host_name(p[a].getAttribute("href"))).length > 0 && app_domain_exist(app_domains, t)
                ? (p[a].href = app_url + "full/?api=" + encodeURIComponent(app_api_token) + "&url=" + app_base64_encode(p[a].href) + "&type=" + encodeURIComponent(n))
                : "magnet:" === p[a].protocol && (p[a].href = app_url + "full/?api=" + encodeURIComponent(app_api_token) + "&url=" + app_base64_encode(p[a].href) + "&type=" + encodeURIComponent(n));
        }
}

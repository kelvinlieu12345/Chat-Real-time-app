"use strict";

var conn = new signalR.HubConnectionBuilder().withUrl("/chattingplace").build();

document.getElementById("sdBtn").disabled = true;

conn.on("ReceiveMsg", function (name, msg) {
    var m = msg.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    var eM = name + " added: " + m;
    var li = document.createElement("li");
    li.textContent = eM;
    document.getElementById("msgList").append(li);

});

conn.start().then(function () {
    document.getElementById("sdBtn").disabled = false;

}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("sdBtn").addEventListener("click", function (event) {
    var name = document.getElementById("name").value;
    var msg = document.getElementById("msg").value;
    conn.invoke("SdMsg", name, msg).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});

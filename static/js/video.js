/// <reference path="./both.js" />


function initPlayer() {
    if (flvjs.isSupported()) {
        var videoElement = document.getElementById("videoElement");
        var flvPlayer = flvjs.createPlayer({
            type: "flv",
            url: "/live",
            isLive: false,
        }, {
            enableStashBuffer: true,
        });
        flvPlayer.attachMediaElement(videoElement);
        flvPlayer.load();
        flvPlayer.play();
    }
}

window.addEventListener("load", initPlayer);

function getVideo() {
    return document.getElementById("video");
}

function play() {
    var video = getVideo();
    video.play();
}

function pause() {
    var video = getVideo();
    video.pause();
}

function stop() {
    var video = getVideo();
    video.load();
}

function volume() {
    var video = getVideo();
    var range = document.getElementById("volume").value;

    if (range === "100") {
        range = 1;
    } else {
        range = parseFloat("0." + range).toFixed(1);
    }

    video.volume = range;
}
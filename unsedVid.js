/*function gotStream(stream) {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    var audioContext = new AudioContext();

    // Create an AudioNode from the stream
    var mediaStreamSource = audioContext.createMediaStreamSource(stream);

    // Connect it to destination to hear yourself
    // or any other node for processing!
    mediaStreamSource.connect(audioContext.destination);
    var video = document.querySelector('video');
    var videoTracks = stream.getVideoTracks();
    window.stream = stream; // make variable available to browser console
    video.srcObject = stream;
}

function onfail(error) {
    console.log("permission not granted or system don't have media devices."+error.name);
}*/

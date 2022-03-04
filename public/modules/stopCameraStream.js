

export function stopCameraStream() {
    const video = document.querySelector("video")
    const barcodeImg = document.querySelector("section:nth-of-type(3) img")
    const tracks = video.srcObject.getTracks()
    
    tracks.forEach(function(track) {
        track.stop();
    });

    video.srcObject = null
    for (let i = 1; i < 99999; i++)
    window.clearInterval(i);
        
    barcodeImg.src = "images/barcode.png"
}
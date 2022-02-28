import { createBarcodeDetector } from './createBarcodeDetector.js'

const scanButton = document.querySelector("section:nth-of-type(2) button")

//  Turn camera On and Off
async function toggleCameraStream() {

    const video = document.querySelector("video")
    const barcodeImg = document.querySelector("section:nth-of-type(2) img")

    if(scanButton.value == 1){
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: {
          ideal: "environment"
        }
      },
      audio: false
    });
    video.srcObject = stream;
    await video.play(); 
    createBarcodeDetector()

    barcodeImg.src = "images/border.png"
    scanButton.innerHTML = "Stop met scannen"
    scanButton.value = 0
  } 

  else {
      const tracks = video.srcObject.getTracks()
      tracks.forEach(function(track) {
        track.stop();
      });
      video.srcObject = null
    for (let i = 1; i < 99999; i++)
     window.clearInterval(i);

    barcodeImg.src = "images/barcode.png"
    scanButton.innerHTML = "Start met scannen"
    scanButton.value = 1
    }
  }

export{ scanButton, toggleCameraStream }
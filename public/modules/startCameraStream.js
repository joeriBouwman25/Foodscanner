import { createBarcodeDetector } from './createBarcodeDetector.js'

const scanButton = document.querySelector("section:nth-of-type(3) button")

//  Turn camera On and Off
async function startCameraStream() {

    const video = document.querySelector("video")
    const barcodeImg = document.querySelector("section:nth-of-type(3) img")

   
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

export{ scanButton, startCameraStream }
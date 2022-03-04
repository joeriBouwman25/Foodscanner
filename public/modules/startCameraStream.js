
export const scanButton = document.querySelector("section:nth-of-type(4) button")

//  Turn camera On
export async function startCameraStream() {
  window.location.hash = '#loading';
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

    barcodeImg.src = "images/border.png"

 
  }

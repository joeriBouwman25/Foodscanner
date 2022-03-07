const video = document.querySelector("video")
const barcodeImg = document.querySelector("section:nth-of-type(3) img")

//  Turn camera On
export async function startCameraStream() {
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

    
//  Turn camera Off
export function stopCameraStream() {
    const tracks = video.srcObject.getTracks()
        
    tracks.forEach(function(track) {
        track.stop();
    });

    video.srcObject = null
    for (let i = 1; i < 99999; i++)
    window.clearInterval(i);
            
    barcodeImg.src = "images/barcode.png"
}
  
// Create barcode scanner
export function createBarcodeDetector() {
    const barcodeDetector = new BarcodeDetector()
        
    window.setInterval(async () => {
          const barcodes = await barcodeDetector.detect(video);
          if (!barcodes.length <= 0){ 
            // console.log(await barcodes[0].rawValue)
            window.location.hash = '#' + barcodes[0].rawValue;
          return barcodes[0].rawValue
          } 
        }, 100)
    }
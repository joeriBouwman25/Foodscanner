
const video = document.querySelector("video")

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
  
    }

// Create barcode scanner
export function detectBarcode() {
    const barcodeDetector = new BarcodeDetector()
        
    window.setInterval(async () => {
          const barcodes = await barcodeDetector.detect(video);
          if (!barcodes.length <= 0){ 
            window.location.hash = '#' + barcodes[0].rawValue;

          return barcodes[0].rawValue
          } 
        }, 100)
    }
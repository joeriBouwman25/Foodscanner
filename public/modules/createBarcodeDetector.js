import { getProductFromApi } from "./getProductFromApi.js";

      // Create barcode scanner
function createBarcodeDetector() {
    const video = document.querySelector("video")
    const barcodeDetector = new BarcodeDetector()
        
    window.setInterval(async () => {
          const barcodes = await barcodeDetector.detect(video);
          if (!barcodes.length <= 0){ 
          getProductFromApi(barcodes[0].rawValue)
          } else {
            return; 
          }
        }, 100)
    }
 
    export { createBarcodeDetector }
import { createBarcodeDetector } from './createBarcodeDetector.js'
import { renderProductData } from './renderProductData.js'
import { startCameraStream } from './startCameraStream.js'
import { loadingState } from './states.js'
import { stopCameraStream } from './stopCameraStream.js'
import { updateUI } from './ui.js'


import './vendor/routie.min.js'

export function handleRoutes() {
    routie(
      {
      'camera': () => {
       startCameraStream().then(data => {
        createBarcodeDetector(data)
        updateUI('camera')
       })
        },
        'loading': () => {
            loadingState()
            updateUI('loading')
        },
        'productData': () => {

         updateUI('productData')
            // renderProductData()
        },
        'stopCamera': () => {
            stopCameraStream()
        },
        'error': () => {
            updateUI('error')
        }

})
}
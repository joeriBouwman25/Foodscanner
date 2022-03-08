import { cleanProductData, getProductFromApi, renderProductData } from './data.js'
import { createBarcodeDetector, startCameraStream } from './scanner.js'
import { loadingState } from './states.js'
import { updateUI } from './ui.js'
import './vendor/routie.min.js'

export function handleRoutes() {
    routie(
      {
      'scanner': () => {
        startCameraStream().then( () => {
            createBarcodeDetector()
            loadingState()
            updateUI('scanner')

        })
        },
        ':barcode': barcode => {
            getProductFromApi(barcode)
            .then(response => cleanProductData(response))
            .then(product => renderProductData(product))
            updateUI('productData')
            }     
})
}

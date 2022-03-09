import { cleanProductData, getProductFromApi, renderProductData } from './data.js'
import { detectBarcode, startCameraStream } from './scanner.js'
import { updateUI } from './ui.js'
import './vendor/routie.min.js'

export function handleRoutes() {
    routie(
      {
      'scanner': () => {
        updateUI('loading')
        startCameraStream().then( () => {
          updateUI('scanner')
            detectBarcode()

        })
        },
        ':barcode': barcode => {
          updateUI('loading')
            getProductFromApi(barcode)
            .then(response => cleanProductData(response))
            .then(product => renderProductData(product))
            .then(() => { updateUI('productData')})
            .catch(()=> updateUI('error'))
            }     
})
}

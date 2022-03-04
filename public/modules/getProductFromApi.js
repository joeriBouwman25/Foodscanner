import { defineProductData } from "./defineProductData.js"

async function getProductFromApi(barcode){
    const url = 'https://world.openfoodfacts.org/api/v0/product/'
    const data = await fetch(url + barcode + 'json')
    const res = await data.json()

              if(res.status == 1){ 
                defineProductData( barcode, res)
                console.log(res)
          } else {
            window.location.hash = "#error"
            console.log(res.status_verbose)
          }
}

export{ getProductFromApi }
import { defineProductData } from "./defineProductData.js"

function getProductFromApi(barcode){
    const url = 'https://world.openfoodfacts.org/api/v0/product/'
          fetch(url + barcode + 'json')
          .then(response => response.json())
          .then(data => {
              if(data.status){ 
                defineProductData( barcode, data)
                console.log(data)
          } else {
            console.log(data)
          }
  })
}

export{ getProductFromApi }
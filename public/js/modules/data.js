
// Fetching Data
export async function getProductFromApi(barcode){
    const url = 'https://world.openfoodfacts.org/api/v0/product/'
    const data = await fetch(url + barcode + 'json')
    const res = await data.json()
              if(res.status == 1){ 
                return res

          } else {
              return Promise.reject(res.status_verbose)
          }
}


// Clean Json Data
export async function cleanProductData(data) {
    const  productData = data.product
    const { 
        product_name, 
        image_front_url, 
        nutrition_data_per,
        _id
    } = productData

    const { 
        nutriments: {
        carbohydrates, 
        carbohydrates_unit, 
        sugars, 
        sugars_unit, 
        fat, 
        fat_unit 
        } 
    } = productData

   const product = {
        name: product_name,
        barcode: _id,
        nutrimentsPer: nutrition_data_per,
        nutriscoreFat: fat,
        nutriFatUnit: fat_unit,
        nutriscoreSugars: sugars,
        nutriSugarUnit: sugars_unit,
        nutriscoreCarbohydrates: carbohydrates,
        nutriCarboUnit: carbohydrates_unit,
        img: image_front_url
    }
    return product
}

// Render data in HTML
export async function renderProductData(product) {
    const markup = `
        <div>
            <img src=${product.img}>
            <h2>${product.name} </h2>
        </div>
        <h3>${product.barcode}</h3>
        <ul>
            <li>Fat:<p> ${product.nutriscoreFat.toFixed(2)} ${product.nutriFatUnit.toUpperCase()}</p></li>
            <li>Sugars: <p>${product.nutriscoreSugars.toFixed(2)} ${product.nutriSugarUnit.toUpperCase()}</p></li>
            <li>Carbohydrates: <p>${product.nutriscoreCarbohydrates.toFixed(2)} ${product.nutriCarboUnit.toUpperCase()}</p></li>
        </ul>
        <h3>Nutrients per ${product.nutrimentsPer}</h3>
        <button><a href="#scanner"><i class="fa fa-video"></i></a></button>
    `;

    
    document.querySelector("main section:nth-of-type(3)").innerHTML = markup;    
    
}
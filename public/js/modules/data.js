
// Fetching Data
export async function getProductFromApi(barcode){
    const url = 'https://world.openfoodfacts.org/api/v0/product/'
    const data = await fetch(url + barcode + 'json')
    const res = await data.json()
              if(res.status == 1){ 
                return res

          } else {
            console.log(res.status_verbose)
          }
}


// Clean Json Data
export async function cleanProductData(data) {
    const  productData = data.product
    console.log(productData)
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
        <h3>Nutrients per ${product.nutrimentsPer}:</h3>
        <ul>
            <li>Fat: <p>${product.nutriscoreFat}${product.nutriFatUnit.toUpperCase()}</p></li>
            <li>Sugars: <p>${product.nutriscoreSugars}${product.nutriSugarUnit.toUpperCase()}</p></li>
            <li>Carbohydrates: <p>${product.nutriscoreCarbohydrates}${product.nutriCarboUnit.toUpperCase()}</p></li>
        </ul>
        <button><a href="#scanner">back</a></button>
    `;

    document.querySelector("main section:first-of-type").innerHTML = markup;    
    
}
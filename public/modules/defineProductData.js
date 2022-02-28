import { renderProductData } from "./renderProductData.js"

function defineProductData(barcode, data) {
    const  productData = data.product
    const { 
        product_name, 
        image_front_url, 
        nutrition_data_per
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
        barcode: barcode,
        nutrimentsPer: nutrition_data_per,
        nutriscoreFat: fat,
        nutriFatUnit: fat_unit,
        nutriscoreSugars: sugars,
        nutriSugarUnit: sugars_unit,
        nutriscoreCarbohydrates: carbohydrates,
        nutriCarboUnit: carbohydrates_unit,
        img: image_front_url
    }


    renderProductData(product)
}

export { defineProductData }

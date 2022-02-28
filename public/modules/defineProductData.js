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

    renderProductData(product)
}

export { defineProductData }


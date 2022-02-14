getAndRenderData()

function getAndRenderData (req, res) {
    let productCode = 8710716028794;
    const getURL = 'https://world.openfoodfacts.org/api/v0/product/' + productCode + '.json'
    fetch(getURL).then(response => response.json())
    .then(response => {
        console.log(response.product)

        const product = {
            name: response.product.product_name,
            brand: response.product.brand_owner,
            nutriscore: response.product.nutriscore_grade,
            img: response.product.image_front_url
        }

        const markup = `
 <div class="person">
        <img src=${product.img}>
        <h2>${product.name} </h2>
    <h3>
        ${product.brand}
    </h3>
    <p class="location">${product.nutriscore}</p>
 </div>
`;

document.querySelector("main").innerHTML = markup;    
    })
    .catch(error => document.body.insertAdjacentHTML('beforebegin', error))
}


// And then create our markup:


if (!('BarcodeDetector' in window)) {
    console.log('Barcode Detector is not supported by this browser.');
  } else {
    console.log('Barcode Detector supported!');
  
    // create new detector
    var barcodeDetector = new BarcodeDetector({formats: ['code_39', 'codabar', 'ean_13']});
  }


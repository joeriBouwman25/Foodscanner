
getAndRenderData()
function getAndRenderData () {
    let productCode = 8710716028794;
    const getURL = 'https://world.openfoodfacts.org/api/v0/product/' + productCode + '.json'
    fetch(getURL).then(response => response.json())
    .then(response => {
        console.log(response.product)

        const product = {
            name: response.product.product_name,
            brand: response.product.brand_owner,
            nutriscore: response.product.nutrient_levels.fat,
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

document.querySelector("main section:first-of-type").innerHTML = markup;    
    })
    .catch(error => document.body.insertAdjacentHTML('beforebegin', error))
}

var video = document.querySelector("#video");

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function (stream) {
        video.srcObject = stream;
      })
      .catch(function (err0r) {
        console.log("Something went wrong!");
      });
  }

// // check compatibility
// if (!('BarcodeDetector' in window)) {
//     console.log('Barcode Detector is not supported by this browser.');
//   } else {
//     console.log('Barcode Detector supported!');
  
//     // create new detector
//     var barcodeDetector = new BarcodeDetector({formats: ['code_39', 'codabar', 'ean_13']});
//   }

//   // check supported types
// BarcodeDetector.getSupportedFormats()
// .then(supportedFormats => {
//   supportedFormats.forEach(format => console.log(format));
// });

// barcodeDetector.detect(imageEl)
// .then(barcodes => {
//   barcodes.forEach(barcode => console.log(barcode.rawData));
// })
// .catch(err => {
//   console.log(err);
// })
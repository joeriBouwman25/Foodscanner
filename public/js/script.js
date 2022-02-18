  // Global variables
    const scanButton = document.querySelector("section:nth-of-type(2) button")
    const barcodeImg = document.querySelector("section:nth-of-type(2) img")
    const video = document.querySelector("video");


      // Create barcode scanner
      async function barcodeDetector() {

        const barcodeDetector = new BarcodeDetector();
        window.setInterval(async () => {
          const barcodes = await barcodeDetector.detect(video);
          if (barcodes.length <= 0){ 
            return; 
          } else {
            console.log("geslaagd")
            getProductFromApi(barcodes[0].rawValue)
          }
        }, 100)
        };


      // //  Turn camera On and Off
        async function toggleCamera() {
          if(scanButton.value == 1){

          const stream = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: {
                ideal: "environment"
              }
            },
            audio: false
          });
          video.srcObject = stream;
          await video.play(); 
          
          barcodeImg.src = "images/border.png"
          scanButton.innerHTML = "Stop met scannen"
          scanButton.value = 0
          barcodeDetector()
        } 

        else {
          
          video.srcObject = stop()
          barcodeImg.src = "images/barcode.png"
          scanButton.innerHTML = "Start met scannen"
          scanButton.value = 1
          return barcodeDetector();

        }
        }

        scanButton.addEventListener('click', toggleCamera)

        function getProductFromApi(barcode){
          const getURL = 'https://world.openfoodfacts.org/api/v0/product/' + barcode + '.json'
                fetch(getURL).then(response => response.json())
                .then(data => {
                    if(data.status){ 
                      renderProductData(barcode, data)
                } else {
                  console.log("conjo")
                }
        })
      }

      

      function renderProductData(barcode, data) {
                    const product = {
                        name: data.product.product_name,
                        barcode: barcode,
                        nutrimentsPer: data.product.nutrition_data_per,
                        nutriscoreFat: data.product.nutriments.fat,
                        nutriFatUnit: data.product.nutriments.fat_unit,
                        nutriscoreSugars: data.product.nutriments.sugars,
                        nutriSugarUnit: data.product.nutriments.sugars_unit,
                        nutriscoreCarbohydrates: data.product.nutriments.carbohydrates,
                        nutriCarboUnit: data.product.nutriments.carbohydrates_unit,
                        img: data.product.image_front_url
                    }
            
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

            `;
            
            document.querySelector("main section:first-of-type").innerHTML = markup;    
        } 
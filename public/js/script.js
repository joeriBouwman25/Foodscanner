    window.onload = () => {
      detect();
    };
  
  
    async function detect() {
      const barcodeDetector = new BarcodeDetector();
      let itemsFound = [];
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" }
      });
    
      const video = document.querySelector("video");
      video.srcObject = mediaStream;
      video.autoplay = true;
    
    

      function render() {
        barcodeDetector
          .detect(video)
          .then((barcodes) => {
            barcodes.forEach((barcode) => {
              if (!itemsFound.includes(barcode.rawValue)) {
                itemsFound.push(barcode.rawValue);
                const newBarcode = barcode.rawValue; 
                // list.appendChild(li);
                const getURL = 'https://world.openfoodfacts.org/api/v0/product/' + newBarcode+ '.json'
                fetch(getURL).then(response => response.json())
                .then(data => {
                    if(data.status){
                    const product = {
                        name: data.product.product_name,
                        barcode: barcode.rawValue,
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
                    <section>
                      <div>
                        <img src=${product.img}>
                        <h2>${product.name} </h2>
                      </div>
                      <h3>${product.barcode}</h3>
                      <h3>Nutriments per ${product.nutrimentsPer}:</h3>
                      <ul>
                        <li>Fat: <p>${product.nutriscoreFat}${product.nutriFatUnit.toUpperCase()}</p></li>
                        <li>Sugars: <p>${product.nutriscoreSugars}${product.nutriSugarUnit.toUpperCase()}</p></li>
                        <li>Carbohydrates: <p>${product.nutriscoreCarbohydrates}${product.nutriCarboUnit.toUpperCase()}</p></li>
                      </ul>
                </section>
            `;
            
            document.querySelector("main section:first-of-type").insertAdjacentHTML('beforebegin', markup);    
            } else{
              console.log("niks kevonden")
            }      
          })
                .catch(error => document.body.insertAdjacentHTML('beforebegin', error))
              }
            });
          })
          .catch(console.error);
      }
    


      (function renderLoop() {
        requestAnimationFrame(renderLoop);
        render();
      })();
    }


function renderProductData(product) {
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
    window.location.hash = '#productData';
}

export{ renderProductData }
//different UI states


//Loading state 
function loadingState() {
    const loader = document.querySelector('section:nth-of-type(2)')
    const video = document.querySelector('video')
    const barcodeImg = document.querySelector("section:nth-of-type(3) img")
    const laser = document.querySelector('section:nth-of-type(3) span')
    
   const myInterval =  setInterval(myTimer, 500);

    function myTimer() {
        if(video.readyState === 0) {
            console.log(loader)
            loader.style.display = 'block'
            barcodeImg.style.display = 'none'
            laser.style.display = 'none'
        } else {
            console.log('complete')
            barcodeImg.style.display = 'block'
            loader.style.display = 'none'
            laser.style.display = 'block'
            clearInterval(myInterval)
            // window.location.hash = '#productData';
        }
    
    }

    // console.log(video.currentTime)

}

export { loadingState }
  //import script files
  import { scanButton, startCameraStream } from '../modules/startCameraStream.js'
  import { stopCameraStream } from '../modules/stopCameraStream.js'
  import { loadingState } from '../modules/states.js'
  import { handleRoutes } from '../modules/routes.js'

  // document.querySelector('main section img:first-of-type' ).classList.add('display')
  // document.querySelector('main section span').classList.add('display')
  
  function toggleCameraStream() {
    if(scanButton.value == 1){
      startCameraStream()
      loadingState()
    } else {
      stopCameraStream()
    }
  }

  handleRoutes()

  // scanButton.addEventListener('click', toggleCameraStream)



      

      
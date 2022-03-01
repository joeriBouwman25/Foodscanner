import { startCameraStream } from './startCameraStream.js'
import './vendor/routie.min.js'

export function handleRoutes() {
    routie(
      {
      'camera': () => {
       startCameraStream()
        }
})
}
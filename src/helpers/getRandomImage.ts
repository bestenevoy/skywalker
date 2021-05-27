import {IMAGES} from 'src/config'

export default function getRandomImage () {
    const index = Math.floor((Math.random() * IMAGES.length))
    return IMAGES[index]
}

import { defileText } from './defileText.js'

const textBox = document.querySelector(".textDefile")
const nosServices = defileText()

let index = 0


function afficherElement() {
    if (index < nosServices.length){
        textBox.innerHTML = nosServices[index]
        index++
    }else{
        index = 0
    }
    setTimeout(afficherElement, 2000)
}
afficherElement()


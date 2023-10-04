import{ scrollSpy } from '../../lib/ScrollSpy.js'
import '../css/style.css'

//On appelle la fonction ScrollSpy de la librairie
scrollSpy()

// Récuperation des informationd du formulaire
const myForm = document.getElementById('myForm')
const myData = new FormData(myForm)

for(const data of myData){
    // console.log(data[0], data[1])
}


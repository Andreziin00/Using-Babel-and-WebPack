import { allowedKeys, input } from "../src/script.js";
import calculate from "./calculate.js"

export function teclado(ev) {
    //previnir o comportamento padrao da função keyDown
    ev.preventDefault()
    if(allowedKeys.includes(ev.key)){
        input.value += ev.key
        return
    }
    if(ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }
    if(ev.key === 'Enter'){
        calculate()
    }
}

export function charKey(charKeyBtn){
    charKeyBtn.addEventListener('click', ()=>{
        const value = charKeyBtn.dataset.value
        input.value += value
    })
}

export function clear(){
    input.value = ""
    //adiciona o cursor como focado no input
    input.focus()
}
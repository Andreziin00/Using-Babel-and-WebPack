import calculate from "../modules/calculate.js"
import copyToClipboard from "../modules/copyToClipboard.js"
import { charKey, clear, teclado } from "../modules/keyDowns.js"
import themeSwitch from "../modules/themeSwitch.js"
import './styles/style.css'

const main = document.getElementById('mainSection')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

export { main, allowedKeys, root, resultInput, input }

//impedir o user de digitar as teclas que n podem ser usadas

//selecionar as keys e adicioonar evento a todas elas
document.querySelectorAll('.charKey').forEach(charKey)
//limpar oo input de calculo
document.getElementById('clear').addEventListener('click', clear)
input.addEventListener('keydown', teclado)
document.getElementById('equal').addEventListener('click', calculate)
//copiar para area de transferencia
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)
//trocar tema alterando css com o js
document.getElementById('themeSwitcher').addEventListener('click', themeSwitch)


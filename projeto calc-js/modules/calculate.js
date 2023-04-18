export default function calculate(){
    //mensagem de erro predefinida
    const resultInput = document.getElementById('result')
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    /*eval serve para avaliar o codigo e executa-lo
    é como se estivesse executando o código no console*/
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove('error')
}
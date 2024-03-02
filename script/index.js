const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));


function abrirModal() {
    const modal = document.getElementById('janela-modal')

    modal.classList.add('abrir')



    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-modal') {
            modal.classList.remove('abrir')
        }
    })
}
function abrirModal2() {
    const modal = document.getElementById('janela-modal2')

    modal.classList.add('abrir')



    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-modal2') {
            modal.classList.remove('abrir')
        }
    })
}
function abrirModal3() {
    const modal = document.getElementById('janela-modal3')

    modal.classList.add('abrir')



    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'janela-modal3') {
            modal.classList.remove('abrir')
        }
    })
}

function abrirModal4() {
    const modal = document.getElementById('resultadoIMC1')



    modal.classList.add('abrir')



    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'resultadoIMC1') {
            modal.classList.remove('abrir')

        }
    })
}

function abrirModal5() {
    const modal = document.getElementById('preencha-corretamente')



    modal.classList.add('abrir')



    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'preencha-corretamente') {
            modal.classList.remove('abrir')

        }
    })
}





const resultado = document.querySelector('#resultadoIMC')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

  if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let classification = ''

    if (imc < 18.5) {
      classification = 'Abaixo do peso'
      abrirModal4()
    } else if (imc < 25) {
      classification = 'Peso normal'
      abrirModal4()
    } else if (imc < 30) {
      classification = 'Sobrepeso'
      abrirModal4()
    } else if (imc < 35) {
      classification = 'Obesidade Grau I'
      abrirModal4()
    } else if (imc < 41) {
      classification = 'Obesidade Grau II'
      abrirModal4()
    } else {
      classification = 'Obesidade Grau III'
      abrirModal4()
    }
    
    resultado.innerHTML = ` ${imc} (${classification})`
  } else {
    resultado.innerHTML = 'Preencha os campos'
    abrirModal5()
  }
}
  





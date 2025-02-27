let bodyWeight = document.querySelector('#kilogramas')
let Height = document.querySelector('#altura')
let Age = document.querySelector('#age')
let Male = document.querySelector('#masculine')
let Female = document.querySelector('#female')
const Calcular = document.querySelector('#calcular')

Calcular.addEventListener("click", calcularGET)

let Tmb = 0
const activityLevel = {
    sendetario: 1.2,
    levemente_ativo: 1.375,
    moderamente_ativo: 1.55,
    muito_ativo: 1.725,
    extremamente_ativo: 1.9
}

function calcularGET() {
    let weight = Number(bodyWeight.value)
    let height = Number(Height.value)
    let age = Number(Age.value)

    if (Male.checked) {
        Tmb = (10 * weight) + (6.25 * height) - (5 * age) + 5
    } else if (Female.checked) {
        Tmb = (10 * weight) + (6.25 * height) - (5 * age) - 161
    }

    console.log("TMB:", Tmb)

    let trainingDays = document.querySelector('#trainingdays').value
    let Naf = activityLevel[trainingDays] || 1.2 // Se não for válido, usa 1.2 como padrão
    console.log("Nível de atividade (NAF):", Naf)

    let GET = Tmb * Naf 
    
    document.querySelector('#result').value = `Suas calorias necessárias para ganhar peso são de ${GET.toFixed(2)} kcal`

    if (GET == 0 || bodyWeight == 0 || Height == 0 || Age == 0 ) {
        document.querySelector('#result').value = 'Falta de informação'
    }
}

if (window.matchMedia("(max-width: 850px)").matches) {
    let tagBr = document.createElement('br')
    tagBr.id = 'brtag'
    let tagBrChild = document.querySelector('#tagbr')
    tagBrChild.appendChild(tagBr)
    
} else {
    let tagBrChild = document.querySelector('#tagbr')
    let brTag = document.querySelector('#brtag')
    tagBrChild.remove(brTag)
  }
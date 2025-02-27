## Calculadora GET

**Link:** https://getcalculator01.netlify.app/

Este projeto é uma calculadora de calorias diárias necessárias para ganhar peso, com base na Taxa Metabólica Basal (TMB) e no nível de atividade física da pessoa. Ele leva em consideração dados como peso, altura, idade e sexo, além de calcular as calorias necessárias para atingir o objetivo de ganho de peso.


### Funcionalidades do Código

1. **Entrada de Dados**: 
   - Peso corporal (`#kilogramas`)
   - Altura (`#altura`)
   - Idade (`#age`)
   - Sexo (masculino ou feminino)
   - Nível de atividade física (`#trainingdays`)

2. **Botão de Cálculo**: Ao clicar no botão "Calcular" (`#calcular`), o cálculo é executado e o resultado é exibido na tela.

3. **Cálculo do GET**: 
   - Para homens: `TMB = (10 * peso) + (6.25 * altura) - (5 * idade) + 5`
   - Para mulheres: `TMB = (10 * peso) + (6.25 * altura) - (5 * idade) - 161`
   - O GET é calculado multiplicando a TMB pelo valor do NAF correspondente.

4. **Exibição do Resultado**: O resultado da quantidade de calorias necessárias para ganhar peso é exibido na tela. Caso algum dado esteja faltando, a calculadora exibirá "Falta de informação".

### Como Usar

1. Insira seu peso, altura e idade nos campos correspondentes.
2. Selecione seu sexo (masculino ou feminino).
3. Escolha seu nível de atividade física (sedentário, levemente ativo, etc.).
4. Clique no botão "Calcular" para ver a quantidade de calorias necessárias para ganhar peso.

### Código

```javascript
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
        document.querySelector('#result').value = 'Falta informação'
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
```

### Contribuição

Sinta-se à vontade para contribuir com melhorias ou relatar problemas através de um **Pull Request** ou **Issue**.

### Licença

Este projeto está licenciado sob a **Licença GNU General Public License (GPL)**. Veja o arquivo LICENSE para mais detalhes.

--- 

**Autor:** dvcDaniel(eu)


const nome = "Daniel"

// console.log(`${nome} de Brito Frota`)

const objeto = {
  nome,
  idade: 32,
  endereco: {
    rua: "Afonso pena",
    numero: 45,
    cep: 7600000,
    bairro: "km1",
    senhaDaPresenca: "l7ss82"
  },
  somaIdadeMais10: somaIdade
}

// console.log(Object.keys(objeto))
// console.log(Object.values(objeto))
// console.log(Object.entries(objeto.endereco))

const { rua, ...rest } = objeto.endereco




// console.log(objeto.idade && `a minha idade é ${objeto.idade}`)


// objeto?.endereco?.rua ? console.log(objeto.endereco.rua) : console.log('não tem')

// if (objeto.endereco.rua) {
//   console.log(objeto.endereco.rua)
// } else {
//   console.log('não tem')
// }



const array3 = [{numero: 1}, {numero: 2}, {numero: 3}]



function somaIdade(idade) {
  return idade + 10;
}

const minhaFuncao = (idade) => { return idade + 10 }

() => {}

(function() {

})



// for (let i = 0; i < array.length; i++) {
//   console.log(array[i])
// }
// for (const el of array) {
//   console.log(`${el} é legal`)
// }

const array1 = [1, 2, 3]


// const meu_novo_array2 = array.forEach((el) => {
//   return el
// })

// const meu_novo_array = array.map((el) => {
//   return el + " ok"
// })

// const array = ["a", "b", "c", "d", "e", "f"]


// const percorre = array_misto.map( (el) => {
//   return `${el} - show`
// })

// console.log(percorre)


// const meu_filtro = array_misto.filter((e) => e === "a")
// const meu_filtro2 = array_misto.find((e) => e === "a")
// const meu_index = array_misto.findIndex((e) => e === "a")






const array_misto = [1, 2, 3,"a", "a","a","b", "c", 4, 5, 6, "d"]

// const valor_final = array_misto.reduce((a, e) => {
//   a = `${a} ${e}`;
//   return a
// }, "começa preenchido --> ")

// console.log(valor_final)


async function buscaDados () {
  try {
    const dados = await fetch("http://api.github.com/users/timedev-net")
    return dados
  } catch (error) {
    console.log(error)
  } 
}

console.log(buscaDados())
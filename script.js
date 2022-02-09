// Crie um array que receba 5 itens e exiba no console.
console.log("Crie um array que receba 5 itens e exiba no console.")

let nomes = ["Max", "Mini", "Tartaruga", "Oliver"]

for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}


// Utilize um método para adicionar um nome ao inicio do array.
console.log("Utilize um método para adicionar um nome ao inicio do array.")

nomes.unshift("Pretinha")

for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}

// Utilize um método para remover o último nome do array.
console.log("Utilize um método para remover o último nome do array.")

nomes.pop()

for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}

// Utilize um método para adicionar dois nomes ao fim do array.
console.log("Utilize um método para adicionar dois nomes ao fim do array.")

nomes.push("Joy", "Leticia")

for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}

// Utilize um método para remover o primeiro nome do array.

console.log("Utilize um método para remover o primeiro nome do array.")

nomes.shift()

for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}


// Utilize um método para organizar em ordem crescente o seguinte array:
console.log("Utilize um método para organizar em ordem crescente o seguinte array:")

const numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];

console.log(
    numbers.sort(
        function(a,b){
            return(a-b)
        }
    )
)
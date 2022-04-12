const {explorers} = require('./explorers')

//1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
const imprime01 = explorers.forEach(explorer => console.log(explorer.name))

//2- Imprime el stack de cada explorer, usa FOR EACH
const imprime02 = explorers.forEach(explorer => console.log(explorer.stack))

//3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const map01 = explorers.map((explorer) =>  explorer.stack)
console.log(map01)

//4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
const filter01 = explorers.filter((explorer) =>  explorer.stack.includes('js'))
console.log(filter01)
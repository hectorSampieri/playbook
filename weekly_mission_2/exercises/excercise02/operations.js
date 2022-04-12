const {explorers} = require('./explorers')

//1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log('1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH')
const imprime01 = explorers.forEach(explorer => console.log(explorer.name))

//2- Imprime el stack de cada explorer, usa FOR EACH
console.log('2- Imprime el stack de cada explorer, usa FOR EACH')
const imprime02 = explorers.forEach(explorer => console.log(explorer.stack))

//3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log('3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP')
const map01 = explorers.map((explorer) =>  explorer.stack)
console.log(map01)

//4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log('4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes')
const filter01 = explorers.filter((explorer) =>  explorer.stack.includes('js'))
console.log(filter01)

//5. Busca el primer explorer que sea de la CDMX, usa FIND
console.log('5. Busca el primer explorer que sea de la CDMX, usa FIND')
const find01 = explorers.find((explorer) =>  explorer.city==='CDMX')
console.log(find01)


//6. Obtén la suma de todos los exercises_completed, usa REDUCE
console.log('6. Obtén la suma de todos los exercises_completed, usa REDUCE')
const reduce01 = explorers.reduce((totalExcercises,explorer) =>  totalExcercises + explorer.exercises_completed,0)
console.log(reduce01)

//7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
console.log('7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME')
const some01 = explorers.some((explorer) =>  explorer.missions.frontend.exercisesFinished)
console.log(some01)

//8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
console.log('8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.')
const every01 = explorers.every((explorer) =>  explorer.missions.onboarding.isFinished)
console.log(every01)
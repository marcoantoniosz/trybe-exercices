// 1º
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  const hasIt = arr.some((element) => element === name);
  return hasIt;
}

console.log(hasName(names, 'Ana'))

// 2º

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    const isIt = arr.every((element) => element.age >= minimumAge);
    return isIt;
  }
  
  console.log(verifyAges(people, 18));
  
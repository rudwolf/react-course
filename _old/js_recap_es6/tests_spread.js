const numbers = [1, 2, 3, 4, 5];
const newnumber = [...numbers, 7, 12, 20];

//console.log (newnumber);

const person = {
  name: 'Rod'
}

const rodolfo = {
  ...person,
  age: 40
}

//console.log(rodolfo);

const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3, 1, 2));
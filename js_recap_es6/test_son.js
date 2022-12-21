const person = {
  'name': 'Buneque'
}

const personToo = {
  ...person
}

person.name = "Busha";

console.log(personToo);
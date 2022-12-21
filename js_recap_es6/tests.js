class Cicrano {
  constructor() {
    this.genero = 'binarie';
  }

  printGender() {
    console.log(this.genero);
  }
}

class Rodolfinson extends Cicrano {
  constructor() {
    super();
    this.name = "Rud";
    this.genero = "Aqui é macho porra!";
  }

  printMyName() {
    console.log(this.name);
  }
}

const fulanin = new Rodolfinson();
fulanin.printMyName();
fulanin.printGender();
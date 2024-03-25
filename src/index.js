import { promptSelect } from './lib/prompts.js';
import { PizzaStoreBrazil } from './classes/PizzaStoreBrazil.js'; // Importa a classe PizzaStoreBrazil
import { PizzaStoreJamaica } from './classes/PizzaStoreJamaica.js'; // Importa a classe PizzaStoreJamaica
import { PizzaType } from './classes/PizzaType.js'; // Importa o enum PizzaType

async function main() {
  const eunaPizzaBrazil = new PizzaStoreBrazil('Eunápolis/BRASIL');
  const kingstonPizza = new PizzaStoreJamaica('Kingston/JAMAICA'); // Instancia uma pizzaria na Jamaica
  let option: number = -1;

  while (option !== 4) {
    option = await promptSelect({
      message: 'Escolha uma pizza',
      choices: [
        'CALABRESA',
        'PORTUGUESA',
        'QUATROQUEIJOS',
        'VEGETARIANA',
        'Sair',
      ],
    });

    switch (option) {
      case 0:
        console.log('=====================');
        eunaPizzaBrazil.orderPizza(PizzaType.CALABRESA);
        break;
      case 1:
        console.log('=====================');
        eunaPizzaBrazil.orderPizza(PizzaType.PORTUGUESA);
        break;
      case 2:
        console.log('=====================');
        eunaPizzaBrazil.orderPizza(PizzaType.QUATROQUEIJOS);
        break;
      case 3:
        console.log('=====================');
        eunaPizzaBrazil.orderPizza(PizzaType.VEGETARIANA);
        break;
    }
  }
}

main();

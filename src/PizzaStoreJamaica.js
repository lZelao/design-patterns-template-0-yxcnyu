// PizzaStoreJamaica.ts
import { Pizza, IngredientType } from './Pizza';
import { PizzaType } from './PizzaType';
import { PizzaStoreFranchise } from './PizzaStoreFranchise';
import { PizzaCalabresaJamaica } from './PizzaCalabresaJamaica';
import { PizzaPortuguesaJamaica } from './PizzaPortuguesaJamaica';
import { PizzaQuatroQueijosJamaica } from './PizzaQuatroQueijosJamaica';
import { PizzaVegetarianaJamaica } from './PizzaVegetarianaJamaica';

export class PizzaStoreJamaica extends PizzaStoreFranchise {
  constructor(name: string) {
    super(name);
  }

  createPizza(type: PizzaType): Pizza {
    switch (type) {
      case PizzaType.CALABRESA:
        return new PizzaCalabresaJamaica([
          { name: 'queijo muçarela', quantity: 100 },
          { name: 'calabresa', quantity: 100 },
          { name: 'azeitona', quantity: 50 },
          { name: 'molho', quantity: 100 },
          { name: 'pimentão jamaicano', quantity: 50 }, 

      case PizzaType.PORTUGUESA:
        return new PizzaPortuguesaJamaica([
          { name: 'queijo muçarela', quantity: 100 },
          { name: 'tomate', quantity: 100 },
          { name: 'ovo cozido', quantity: 50 },
          { name: 'cebola', quantity: 50 },
          { name: 'molho', quantity: 100 },
          { name: 'pimentão jamaicano', quantity: 50 }, 
      case PizzaType.VEGETARIANA:
        return new PizzaVegetarianaJamaica([
          { name: 'queijo muçarela', quantity: 100 },
          { name: 'berinjela', quantity: 200 },
          { name: 'azeitonas', quantity: 50 },
          { name: 'molho', quantity: 100 },
          { name: 'pimentão jamaicano', quantity: 50 }, 
        ]);
      case PizzaType.QUATROQUEIJOS:
        return new PizzaQuatroQueijosJamaica([
          { name: 'queijo muçarela', quantity: 50 },
          { name: 'queijo gorgonzola', quantity: 50 },
          { name: 'queijo provolone', quantity: 50 },
          { name: 'queijo parmesão', quantity: 50 },
          { name: 'molho', quantity: 100 },
          { name: 'pimentão jamaicano', quantity: 50 }, 
        ]);
      default:
        throw new Error('Invalid pizza type');
    }
  }
}

import { PizzaType } from './PizzaType';
import { PizzaStoreFranchise } from './PizzaStoreFranchise';
import { PizzaCalabresa } from './PizzaCalabresa';
import { PizzaPortuguesa } from './PizzaPortuguesa';
import { PizzaQuatroQueijos } from './PizzaQuatroQueijos';
import { PizzaVegetariana } from './PizzaVegetariana';
export class PizzaStoreBrazil extends PizzaStoreFranchise {
    constructor(name) {
        super(name);
    }
    createPizza(type) {
        switch (type) {
            case PizzaType.CALABRESA:
                return new PizzaCalabresa([{ name: 'queijo muçarela', quantity: 100 }, { name: 'calabresa', quantity: 100 }, { name: 'azeitona', quantity: 50 }, { name: 'molho', quantity: 100 }]);
            case PizzaType.PORTUGUESA:
                return new PizzaPortuguesa([{ name: 'queijo muçarela', quantity: 100 }, { name: 'tomate', quantity: 100 }, { name: 'ovo cozido', quantity: 50 }, { name: 'cebola', quantity: 50 }, { name: 'molho', quantity: 100 }]);
            case PizzaType.VEGETARIANA:
                return new PizzaVegetariana([{ name: 'queijo muçarela', quantity: 100 }, { name: 'berinjela', quantity: 200 }, { name: 'azeitonas', quantity: 50 }, { name: 'molho', quantity: 100 }]);
            case PizzaType.QUATROQUEIJOS:
                return new PizzaQuatroQueijos([{ name: 'queijo muçarela', quantity: 50 }, { name: 'queijo gorgonzola', quantity: 50 }, { name: 'queijo provolone', quantity: 50 }, { name: 'queijo parmesão', quantity: 50 }, { name: 'molho', quantity: 100 }]);
            default:
                throw new Error('Invalid pizza type');
        }
    }
}

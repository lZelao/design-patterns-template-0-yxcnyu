// PizzaStoreFranchise.ts
import { Pizza, IngredientType } from './Pizza';
import { PizzaType } from './PizzaType';

export abstract class PizzaStoreFranchise {
  constructor(public name: string) {}

  getName(): string {
    return this.name;
  }

  abstract createPizza(type: PizzaType): Pizza;

  orderPizza(type: PizzaType): void {
    const pizza = this.createPizza(type);

    console.log('=====================');
    console.log(`Encomenda recebida para ${this.name}`);
    console.log(`Preparando ${PizzaType[type]} pizza`);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    console.log('=====================');
  }
}

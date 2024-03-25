import { PizzaType } from './PizzaType';
export class PizzaStoreFranchise {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    orderPizza(type) {
        const pizza = this.createPizza(type);
        console.log('=====================');
        console.log(`Order received for ${this.name}`);
        console.log(`Preparing ${PizzaType[type]} pizza`);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        console.log('=====================');
    }
}

// PizzaVegetariana.ts
import { Pizza } from './Pizza';
export class PizzaVegetariana extends Pizza {
    prepare() {
        console.log('Preparing Vegetariana pizza');
    }
    bake() {
        console.log('Baking Vegetariana pizza');
    }
}

// PizzaPortuguesa.ts
import { Pizza } from './Pizza';
export class PizzaPortuguesa extends Pizza {
    prepare() {
        console.log('Preparing Portuguesa pizza');
    }
    bake() {
        console.log('Baking Portuguesa pizza');
    }
}

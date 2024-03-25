// PizzaCalabresa.ts
import { Pizza } from './Pizza';
export class PizzaCalabresa extends Pizza {
    prepare() {
        console.log('Preparing Calabresa pizza');
    }
    bake() {
        console.log('Baking Calabresa pizza');
    }
}

// PizzaQuatroQueijos.ts
import { Pizza } from './Pizza';
export class PizzaQuatroQueijos extends Pizza {
    prepare() {
        console.log('Preparing Quatro Queijos pizza');
    }
    bake() {
        console.log('Baking Quatro Queijos pizza');
    }
}

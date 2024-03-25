// PizzaQuatroQueijos.ts
import { Pizza, IngredientType } from './Pizza';

export class PizzaQuatroQueijos extends Pizza {
  prepare(): void {
    console.log('Preparando  pizza Quatro Queijos');
  }

  bake(): void {
    console.log('Assando pizza Quatro Queijos ');
  }
}

// PizzaCalabresa.ts
import { Pizza, IngredientType } from './Pizza';

export class PizzaCalabresa extends Pizza {
  prepare(): void {
    console.log('Preparando pizza Calabresa ');
  }

  bake(): void {
    console.log('Assando  pizza Calabresa');
  }
}

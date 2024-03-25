// PizzaPortuguesa.ts
import { Pizza, IngredientType } from './Pizza';

export class PizzaPortuguesa extends Pizza {
  prepare(): void {
    console.log('Preparando pizza Portuguesa ');
  }

  bake(): void {
    console.log('Assando pizza Portuguesa ');
  }
}

// PizzaVegetariana.ts
import { Pizza, IngredientType } from './Pizza';

export class PizzaVegetariana extends Pizza {
  prepare(): void {
    console.log('Preparando pizza Vegetariana ');
  }

  bake(): void {
    console.log('Assando pizza vegetariana');
  }
}

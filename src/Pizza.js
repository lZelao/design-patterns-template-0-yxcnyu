// Pizza.ts
export interface IngredientType {
  name: string;
  quantity: number;
}

export abstract class Pizza {
  constructor(public ingredients: IngredientType[]) {}

  abstract prepare(): void;
  abstract bake(): void;

  cut(): void {
      console.log('Cortando a pizza em fatias ');
  }

  box(): void {
      console.log('Colocando a pizza na caixa oficial da PizzaStore');
  }
}

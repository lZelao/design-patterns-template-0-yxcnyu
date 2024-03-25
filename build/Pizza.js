export class Pizza {
    constructor(ingredients) {
        this.ingredients = ingredients;
    }
    cut() {
        console.log('Cutting the pizza into diagonal slices');
    }
    box() {
        console.log('Place pizza in official PizzaStore box');
    }
}

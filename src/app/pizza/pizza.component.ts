import { Component, OnInit } from '@angular/core';
import { PizzaService } from './pizza.service';
import { Pizzas, Top20Topping } from './Topping';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  dataLoaded = false;
  topToppings: Top20Topping[];

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.pizzaService.getPizzas()
      .subscribe((data: Pizzas[]) => {
        this.topToppings = this.processToppings(data);
        this.dataLoaded = true;
      });
  }

  processToppings(pizzas: Pizzas[]): Top20Topping[] {
    const hashMap = {};
    for (let i = 0; i < pizzas.length; i++) {
      for (let j = 0; j < pizzas[i].toppings.length; j++) {
        if (hashMap[pizzas[i].toppings[j]] === undefined) {
          hashMap[pizzas[i].toppings[j]] = 1;
        } else {
          hashMap[pizzas[i].toppings[j]]++;
        }
      }
    }
    const sortableToppings: Top20Topping[] = [];
    for (const topping in hashMap) {
      sortableToppings.push({topping, rank: hashMap[topping]});
    }
    sortableToppings.sort((a, b) => b.rank - a.rank);
    return sortableToppings.slice(0, 20);
  }

}

import { Component } from '@angular/core';
import { drinkService } from './app.drink.service';
import { Drink } from './app.drinks';

@Component({
  selector: 'my-app',
  template: `
 <main role="main" class="container wrapper">
			<h2> Den som släckt sin törst vänder redan ryggen åt källan. Det gör vi aldrig.<br> Välkommen till oss på ng-bar!</h2>
       <ol class="items list">
        <li class="item" *ngFor="let drink of drinks">
        <span class="">{{drink.productName}}</span>
        {{drink.productName}}
                <figure>
                    <img src="/assets/drink.png" alt="{{drink.productName}}">
                </figure>
						  	<figcaption class="summary">
						    	<h2 class="title">{{drink.productName}}</h2>
							    <span class="price fa-usd">{{drink.price}}</span>
							    <span class="category">{{drink.productCategory}}</span>
							    <span class="spirit">{{drink.spirit}}</span>
							    <span class="description">{{drink.description}}</span>
							    <button class="add-to-cart fa-shopping-cart">[TEXT]</button>
						  	</figcaption>
      </li>
    </ol>
    
		</main>
  `,
  providers: [drinkService]
})
export class AppComponent  { 
  drinks: Drink[];
  name = 'Angular';


getDrinks() {
  this.drinkService.getDrinks().then(drinks => this.drinks = drinks);
}

  constructor(private drinkService: drinkService) {
   
  }


ngOnInit(): void {
    this.getDrinks();
  }

}
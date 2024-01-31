import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/models/category.model';
import { categories } from 'src/app/shared/constants/data.model';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css'],
  animations: [
    trigger('toggleCategories', [
      state(
        'open',
        style({
          height: '*',
          opacity: 1,
          display: 'block',
        })
      ),
      state(
        'closed',
        style({
          height: '0',
          opacity: 0,
          display: 'none',
        })
      ),
      transition('open <=> closed', [animate('0.3s ease-in-out')]),
    ]),
  ],
})
export class ProductCategoryComponent implements OnInit {
  isCategoriesOpen = true;
  categories: ProductCategory[] = [];

  ngOnInit(): void {
    this.categories = categories;
  }

  toggleCategories() {
    this.isCategoriesOpen = !this.isCategoriesOpen;
  }
}

/*
Explanation
trigger('toggleCategories', [...]: This defines an animation trigger named toggleCategories. This trigger will be used to animate changes in the state of the categories container.

state('open', style({ height: '*', opacity: 1, display: 'block' })): This defines a state named open. When the state is open, the specified styles will be applied to the element. In this case, it sets the height to auto (allowing it to expand to its natural height), sets the opacity to 1 (fully visible), and sets the display to block.

state('closed', style({ height: '0', opacity: 0, display: 'none' })): This defines a state named closed. When the state is closed, the specified styles will be applied. It sets the height to 0 (collapsing the element), sets the opacity to 0 (invisible), and sets the display to none (hiding the element).

transition('open <=> closed', [animate('0.3s ease-in-out')]): This defines a transition between the open and closed states. The transition is triggered when there's a change from one state to the other. The animate function is used to specify the animation. In this case, it takes 0.3s to complete the animation with an ease-in-out timing function.

In summary, the animation trigger (toggleCategories) is designed to smoothly transition between the open and closed states, providing a visual effect of expanding and collapsing the categories container. The animate function specifies the duration and easing of the transition. The style functions define the CSS properties that change during the transition.
*/

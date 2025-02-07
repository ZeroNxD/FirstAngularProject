import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counting-page',
  imports: [],
  templateUrl: './counting-page.component.html',
  styleUrl: './counting-page.component.scss'
})
export class CountingPageComponent {
  productimage = "comingsoon.png"

  totalItem = signal(0);
  item1 = signal(0);
  item2 = signal(0);
  item3 = signal(0);
  item4 = signal(0);

  incrementitem1(){
    if (this.totalItem() < 10) {
      this.item1.update(val => val + 1);
      this.totalItem.update(total => total + 1);
    }
  }

  decrementitem1(){
    if (this.totalItem() > 0 && this.item1() > 0) {
      this.item1.update(val => val - 1);
      this.totalItem.update(total => total - 1);
    }
  }

  incrementitem2(){
    if (this.totalItem() < 10) {
      this.item2.update(val => val + 1);
      this.totalItem.update(total => total + 1);
    }
  }

  decrementitem2(){
    if (this.totalItem() > 0 && this.item2() > 0) {
      this.item2.update(val => val - 1);
      this.totalItem.update(total => total - 1);
    }
  }

  incrementitem3(){
    if (this.totalItem() < 10) {
      this.item3.update(val => val + 1);
      this.totalItem.update(total => total + 1);
    }
  }

  decrementitem3(){
    if (this.totalItem() > 0 && this.item3() > 0) {
      this.item3.update(val => val - 1);
      this.totalItem.update(total => total - 1);
    }
  }

  incrementitem4(){
    if (this.totalItem() < 10) {
      this.item4.update(val => val + 1);
      this.totalItem.update(total => total + 1);
    }
  }

  decrementitem4(){
    if (this.totalItem() > 0 && this.item4() > 0) {
      this.item4.update(val => val - 1);
      this.totalItem.update(total => total - 1);
    }
  }

}

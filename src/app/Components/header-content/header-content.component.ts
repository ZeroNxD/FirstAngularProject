import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-content',
  imports: [RouterLink],
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.scss'
})
export class HeaderContentComponent {
  HeaderContent = "UNIAIRCARGO.jpg"
  AboutMeContent = "KevinPetersen.jpg"
  programmer = "Programmer.png"
  foodimage = "counting.png"
  altimage = "comingsoon.png"
  crudimage = "CRUD.png"
  learnMore() {
    alert('Thank you for your interest! More features are coming soon.');
  }
}

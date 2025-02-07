import { Component } from '@angular/core';
import { HeaderMenuBarComponent } from '../Components/header-menu-bar/header-menu-bar.component';
import { HeaderWebsiteComponent } from '../Components/header-website/header-website.component';
import { HeaderContentComponent } from '../Components/header-content/header-content.component';

@Component({
  selector: 'app-home',
  imports: [HeaderContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

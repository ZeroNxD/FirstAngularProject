import { Component } from '@angular/core';
import { HeaderMenuBarComponent } from '../header-menu-bar/header-menu-bar.component';

@Component({
  selector: 'app-header-website',
  imports: [HeaderMenuBarComponent],
  templateUrl: './header-website.component.html',
  styleUrl: './header-website.component.scss'
})
export class HeaderWebsiteComponent {
  Logo = "Logo_Website.jpg"
}

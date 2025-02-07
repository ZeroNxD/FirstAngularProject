import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderMenuBarComponent } from './Components/header-menu-bar/header-menu-bar.component';
import { HeaderWebsiteComponent } from './Components/header-website/header-website.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderWebsiteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Task1HomePage';
}

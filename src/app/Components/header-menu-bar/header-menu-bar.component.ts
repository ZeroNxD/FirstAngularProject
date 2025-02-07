import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-menu-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-menu-bar.component.html',
  styleUrl: './header-menu-bar.component.scss'
})
export class HeaderMenuBarComponent {
  
}

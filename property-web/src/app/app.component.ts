import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ClickOutsideDirective } from './lib/directives/click-outside.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, ClickOutsideDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'pro-web';
  dropdownOpen = false;

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown() {
    this.dropdownOpen = false;
  }
    constructor(
    private router: Router
  ){}
route(path: any){
  console.log(path);
  this.router.navigate(path)
}
}

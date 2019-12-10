import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sideNav', {static : false}) sideNav;

  // Toggle Navigation
  toggleNavigation() {
    this.sideNav.toggle()
  }
}

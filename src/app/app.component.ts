import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage : string = 'receta';
  ChangePage(page : string) {
    this.currentPage = page;
  }
}

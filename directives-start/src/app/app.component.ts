import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rootItems = ['Apples', 'Bananas', 'Cherries'];

  onItemWasAdded(item: string) {
    this.rootItems.push(item);
    console.log(this.rootItems);
  }
}

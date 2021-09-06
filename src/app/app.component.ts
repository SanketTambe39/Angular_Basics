import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  imgUrl ="../assets/BridgeLabz.svg";
  ngOnInit(): void {
    this.title = "Hello From Bridgelabz"
  }

}

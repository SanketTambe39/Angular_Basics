import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  imgUrl ="../assets/BridgeLabz.svg";
  url ="https://www.bridgelabz.com/"
  ngOnInit(): void {
    this.title = "Hello From Bridgelabz"
  }
  onClick($event){
    console.log("Save Button Is Clicked..!",$event);
    window.open(this.url,"_blank");
  }
}

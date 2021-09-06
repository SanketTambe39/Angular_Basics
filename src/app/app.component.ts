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
  userName: string = "";
  nameError: string = "";
  ngOnInit(): void {
    this.title = "Hello From Bridgelabz"
  }
  onClick($event){
    console.log("Save Button Is Clicked..!",$event);
    window.open(this.url,"_blank");
  }
  onInput($event){
    console.log("Change Event Occured !!",$event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Wrong.";
  }
}

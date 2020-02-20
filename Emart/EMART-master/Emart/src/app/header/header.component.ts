import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  wText:string;
  wImage:string;
  headerText:string
  constructor() 
  {
    this.wText="Hello baby";
    this.wImage="assets/Images/nama.png";
    this.headerText="e mart";

   }

}

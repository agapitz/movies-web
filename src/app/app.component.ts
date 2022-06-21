import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from './local.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'salesforce';
  myDate: any = new Date();
  userInfo: any = {};
  showNav: any = true;
  constructor(public router: Router, public local: LocalService) {
  }
    
  
}

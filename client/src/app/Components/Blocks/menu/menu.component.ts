import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  otherMessage: any;
  date = Date.now();
  constructor(
    private loginService: Service
  ) { }

  ngOnInit(): void {
    this.otherMessage = this.loginService.currentMessage.subscribe(msg => this.otherMessage = msg);
  }

  checkLogin(){
    if(this.otherMessage === 'ok') { 
      return  true; 
    }
    else return false;
  }

  checkLogout(){
    return this.otherMessage = '';
  }

}

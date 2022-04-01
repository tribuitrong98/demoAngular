import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  date = Date.now();
  constructor(
    private loginService: Service
  ) { }

  ngOnInit(): void {
    
  }

  checkLogin(){
    if(this.loginService.currentMessage !== undefined) { 
      return  true; 
    }
    else return false;
  }

  checkLogout(){
    return this.loginService.currentMessage = undefined;
  }
}

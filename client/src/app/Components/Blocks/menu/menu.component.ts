import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service';
import { LoginComponent } from '../../Pages/login/login.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  date = Date.now();
  constructor(
    private loginService: Service, private lg: LoginComponent
  ) { }

  checkIsLogin = false
  
  ngOnInit(): void {
    
  }

  checkLogin(){
    this.checkIsLogin = this.lg.isLogin
    if(this.checkIsLogin == true) { 
      return this.checkIsLogin = true; 
    }
    else return this.checkIsLogin = false;
  }

  checkLogout(){
    return false;
  }
}

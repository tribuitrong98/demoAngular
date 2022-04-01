import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Service } from '../../../service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  isLogin = false;

  formLogin = new FormGroup({});
  constructor(private fb: FormBuilder,
     private loginService: Service,
     private router: Router
     ) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', checkEmail],
      password: ['', Validators.required]
    })
  }

  onsubmit() {
    this.loginService.postLogin(this.formLogin.value)
    .subscribe( res => {
      alert('Dang nhap thanh cong')
      this.isLogin= true
      this.router.navigate(['/']);
    }, err => {
      console.log(err);
    }
    )
  }

}

function checkEmail(formRegister: FormControl){
  if(formRegister.value.includes('@')){
    return null;
  }else return {gmail: true}
}

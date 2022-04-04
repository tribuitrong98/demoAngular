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

  changeText(text: string) {
    this.loginService.changeMessage(text);
   }
 
  onsubmit() {
    this.loginService.postLogin(this.formLogin.value)
    .subscribe( (result: any) => {
      if(result.kq == 1) {
        this.changeText('ok');
        this.router.navigate(['/']);
      }else {
        alert("Tên tài khoản hoặc mật khẩu không chính xác")
      }
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

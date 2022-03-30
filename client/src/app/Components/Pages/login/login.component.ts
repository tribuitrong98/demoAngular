import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  formLogin = new FormGroup({});
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', checkEmail],
      password: ['', Validators.required]
    })
  }

  onsubmit() {
    console.log(this.formLogin.value)
  }

}


function checkEmail(formRegister: FormControl){
  if(formRegister.value.includes('@gmail.com')){
    return null;
  }else return {gmail: true}
}

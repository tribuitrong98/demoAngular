import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Service } from '../../../service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister = new FormGroup({});
  constructor(private fb: FormBuilder, private register: Service) { }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      hoten: ['', Validators.required],
      email: ['', checkEmail],
      password: ['', Validators.required],
    })
  }

  onsubmit() {
    this.register.postRegister(this.formRegister.value)
    .subscribe( res => {
      alert("Đăng ký thành công!")
    }
    , err => {
      console.log(err);
    })
  }
}

function checkEmail(formRegister: FormControl){
  if(formRegister.value.includes('@gmail.com')){
    return null;
  }else return {gmail: true}
}


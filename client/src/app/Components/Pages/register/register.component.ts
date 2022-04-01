import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from '../../../service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister = new FormGroup({});
  constructor(private fb: FormBuilder,
     private register: Service, 
     private router: Router
     ) { }

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
      this.router.navigate(['/login']);
    }
    , err => {
      console.log(err);
    })
  }
}

function checkEmail(formRegister: FormControl){
  if(formRegister.value.includes('@')){
    return null;
  }else return {gmail: true}
}


import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { LoginService } from '../services/login.service';
import { AuthenticationRequest } from '../models/AuthenticationRequest';
import { Result } from '../models/Result';
import Swal from 'sweetalert2'
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Authdata?: AuthenticationRequest
  loginForm:FormGroup; 
  auth: boolean = false;

  constructor(private loginservice: LoginService,
    private router: Router) {
    this.loginForm =new FormGroup({
      custodianid: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(255),
        Validators.pattern(/^[a-z0-9]+$/i)
      ]),
      password: new FormControl('', [
  
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
     
      ]),
    });
  
  }
  ngOnInit(): void {

   
      

  }

  
  get custodianid() {
    return this.loginForm.controls['custodianid'];
  }
  get password() {
    return this.loginForm.controls['password'];
  }


  handleLogin() {

    let data = {
      custodianid: this.loginForm.controls['custodianid'].value,
      password: this.loginForm.controls['password'].value
    }

    
    this.Authdata = data;

    this.loginservice.checkAuth(this.Authdata).subscribe((result: Result)=>{

      // localStorage.setItem('token',result.data.toString() )
      this.loginservice.setItem('token',result.data.toString())
      localStorage.setItem('token',result.data.toString() )
      // this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      //   this.router.navigate(['/login']);
      // });

      this.router.navigate(['dashboard'])

    },(error)=>{
      console.log("erer")

        if(error.status==403){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid UserName or Password'
          })
        }
    

    })

  }


}

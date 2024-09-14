import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [NgIf,CommonModule,FormsModule],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css'
})
export class LoginSignupComponent {
activeForm:'login'|'register'='register';
registerObj:registerModel=new registerModel();
loginObj:loginModel=new loginModel();
toggleForm(form:'login'|'register'){
  this.activeForm=form;
}
constructor(private _snackbar:MatSnackBar, private _router:Router){

}
registerForm(){
  debugger;
  const localusers=localStorage.getItem('users');
  if (localusers!=null){
    const users=JSON.parse(localusers);
    users.push(this.registerObj);
    localStorage.setItem('users',JSON.stringify(users))
  }
  else{
    const users=[];
    users.push(this.registerObj);
    localStorage.setItem('users',JSON.stringify(users));
  }
  this._snackbar.open('user registered successfully','Close')
}
loginForm(){
  debugger;
  const localusers=localStorage.getItem('users');
  if (localusers!=null){
    const users=JSON.parse(localusers);
    const isUserExist=users.find((user:registerModel)=>user.email==this.loginObj.email&&user.password==this.loginObj.password)
    if(isUserExist!=undefined){
      this._snackbar.open('Login Successful','Close');
      // this._router.navigateByUrl('/dashboard');
      localStorage.setItem('loggedUser',JSON.stringify(isUserExist));
      this._router.navigateByUrl('/dashboard').catch(err => console.error('Navigation error:', err));
    }
    else{
      this._snackbar.open("Email and password are incorrect",'Close');
    }
  }

}
}
export class registerModel{
  name:string;
  email:string;
  password:string
  constructor(){
    this.name='';
    this.password='';
    this.email='';

  }
}
export class loginModel{
 
  email:string;
  password:string
  constructor(){
    this.password='';
    this.email='';

  }
}

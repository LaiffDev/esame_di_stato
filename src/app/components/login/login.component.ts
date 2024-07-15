import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide = true;

  userData : any
  carData : any
  userID: any

  constructor(private router: Router, private userService: AuthenticationService) {}

  ngOnInit(){
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('username')
      localStorage.removeItem('userID')
    }
  }

  /**********************************************
   * FORM CHE PRENDE I VALORI CHE METTE L'UTENTE
   *********************************************/
  UserCredentials = new FormGroup({
    email: new FormControl('', [Validators.required]),
    secret: new FormControl('', [Validators.required]),
  });


  loginUser(){
    
  }
}

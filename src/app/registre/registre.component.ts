import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from '../Models/user.model';
import { UserService } from '../services/user.service';
import * as bcrypt from 'bcrypt';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
FormInput!: FormGroup
password1: string = '';
password2: string = '';
passwordsMatch: boolean = false;
  constructor(private userservice: UserService, private fb : FormBuilder, private route :Router){

  }
  ngOnInit(): void {
    this.FormInput = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required, Validators.maxLength(20)]]
      
    });
    
  }

  registre(){
    let usr : user = new user(); 
 
  
  if (this.FormInput.valid && this.FormInput.controls['confirmPassword'].value == this.FormInput.controls['password'].value){
    usr.name = this.FormInput.controls['name'].value;
    usr.email = this.FormInput.controls['email'].value;
    usr.password = this.FormInput.controls['password'].value;
    usr.confirmPassword = this.FormInput.controls['confirmPassword'].value;
    this.userservice.adduser({ usr }).subscribe()
    this.route.navigate(['/'])
  }
    else{
      console.log("formulaire invalid");
    
      
    }}
    passwordMatchValidator() {
      const password1 = this.FormInput.controls['password'].value;
      const password2 = this.FormInput.controls['confirmPassword'].value;
  
      if (password1 === password2) {
        return null; // Aucune erreur
      } else {
        return { passwordMismatch: true };
      }
    }
    

  }


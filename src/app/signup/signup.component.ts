import { Component , OnInit  } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthRest } from '../Models/AuthRest';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  Formsign!: FormGroup
  
  
 
  constructor(private fs : FormBuilder, private router: Router, private userservice:UserService ) {
  
  } 
  
  ngOnInit(): void {
    this.Formsign = this.fs.group({
      
    
    email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
    password: ['', [Validators.required, Validators.maxLength(50)]]
    });

      
  }
  login(){
    if(this.Formsign.valid){

this.userservice.connect(this.Formsign.controls["email"].value,this.Formsign.controls['password'].value).subscribe(
  (authresult)=>{
  this.userservice.saveuser(authresult.accessToken,authresult.user);
  if(authresult.user.role == "admin"){
    this.router.navigate(['/listuser'])
  }
  else{
    this.router.navigate(['/home'])
  }
  }
  
)



    }
  }
 /* login() {
    const email = this.Formsign.controls['email'].value;
    const pass = this.Formsign.controls['pass'].value;

    const user = this.userservice.authenticate(email, pass);

    if (user) {
      this.router.navigate(['/home'])
    } else {
     console.log("hhh");
    }
  }*/
  }
  /*login() {
    const users = this.list.getListUsers();
    const user = users.find((u:user) => u.email === email && u.pass === password);
    const email = this.email;
    const password = this.password;
    if (user) {
      // Authentification réussie, utilisez le service d'authentification pour gérer l'authentification
      this.userservice.authenticate(email, password);
      // Redirigez l'utilisateur ou effectuez d'autres actions si nécessaire
    } else {
      // Authentification échouée, affichez un message d'erreur ou effectuez d'autres actions
    }
  }*/


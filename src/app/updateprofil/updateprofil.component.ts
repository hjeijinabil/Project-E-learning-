import { CSP_NONCE, Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { user } from '../Models/user.model';



@Component({
  selector: 'app-updateprofil',
  templateUrl: './updateprofil.component.html',
  styleUrls: ['./updateprofil.component.css']
})
export class UpdateprofilComponent implements OnInit
 {
  showElement: boolean = false;
  iduser!: number

  updateprofil! : FormGroup
  user: any
  constructor(private fb : FormBuilder, private route : Router, private userservice: UserService, private activate : ActivatedRoute){


  }

  ngOnInit(): void {
    
    this.updateprofil = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
     old_pass: ['', [Validators.required, Validators.maxLength(20)]],
     password: ['', [Validators.required, Validators.maxLength(20)]],
     confirmPassword: ['', [Validators.required, Validators.maxLength(20)]]
      
    });
      this.activate.params.subscribe(
        (parm)=>{this.iduser=parm['id']
        //console.log(this.iduser)
      this.userservice.getuserbyid(this.iduser).subscribe(
        (u)=>{
          this.updateprofil.controls['name'].setValue(u.name)
          this.updateprofil.controls['email'].setValue(u.email)
          this.updateprofil.controls['password'].setValue(u.password)
          this.updateprofil.controls['password'].setValue(u.password)
          this.updateprofil.controls['confirmPassword'].setValue(u.confirmPassword)
          

        }
      )}
      )
  }
 
 update(){
  let usr1  = new user()
 
  if((this.updateprofil.valid && this.updateprofil.controls['confirmPassword'].value == this.updateprofil.controls['password'].value)){
  usr1.name= this.updateprofil.controls['name'].value
  usr1.email= this.updateprofil.controls['email'].value
  usr1.password= this.updateprofil.controls['password'].value
  usr1.old_pass= this.updateprofil.controls['old_pass'].value
  usr1.password= this.updateprofil.controls['password'].value

  usr1.confirmPassword= this.updateprofil.controls['confirmPassword'].value
  this.userservice.updateuser(this.iduser,usr1).subscribe(
    (u)=>{
      this.route.navigate(['/listuser'])
    this.userservice.getpass()
  
    }
  )

  
 }
 
 else{
  console.log("error");
 }  
 }
 passwordMatchValidator() {
  const password1 = this.updateprofil.controls['password'].value
  const password2 = this.updateprofil.controls['confirmPassword'].value
  
   
  
 
  if (password1 === password2) {
    return null; // Aucune erreur
  } else {
    return { passwordMismatch: true };
  }
  
}
   /*getpass() {
  // Récupérez l'objet utilisateur du localStorage
 const userString = localStorage.getItem('user');
 if (userString) {
  
  const storedUser = JSON.parse(userString);

  // Accédez aux propriétés de l'utilisateur
  
  const password1 =  storedUser.confirmPassword
   const password2 = this.updateprofil.controls['old_pass'].value
 
 
   if (password1 === password2) {
  
  } else {
  
  
  }
}

}*/}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  newsleter! : FormGroup
  constructor(private ph : FormBuilder , private route: Router){

  }
  ngOnInit(): void {
    this.newsleter = this.ph.group({
    
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]]
    
      
    });
    
  }
sign(){

  console.log("bonjour");
  if (this.newsleter.valid){
    this.route.navigate(['/'])
  }
    else{
    console.log("formulaire invalid");
    
      
    }
}
}

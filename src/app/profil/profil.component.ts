import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { user } from '../Models/user.model';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  userr: any;
constructor( private route: Router, private userser: UserService){
 
}
ngOnInit(): void {
  this.userr = this.userser.getUser()
}



update(id : number){
  this.route.navigate(['/updateprofil', id])

}
}

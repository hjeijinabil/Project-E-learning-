import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { user } from '../Models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit{
  
   listuserr:user[]=[]
constructor(private userserive :UserService , private route:Router ) {}
 


ngOnInit(): void {
  this.userserive.getallservice().subscribe(
    (tab) => {
      this.listuserr=tab
    }


)
 }
 getListUsers(): user[] {
  return this.listuserr;
}


delete(id : number){
  this.userserive.deleteuser(id).subscribe(
    (x)=>{
      this.userserive.getallservice().subscribe(
        (listusr)=>{
          this.listuserr=listusr
        
        this.route.navigate(['/listuser'])
         } )
    }

  )


}
update(id : number){
  this.route.navigate(['/updateprofil', id])

}
}
  
    



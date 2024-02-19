import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { user } from '../Models/user.model';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usr !: user
  constructor(private userserv: UserService){

  }
  ngOnInit(): void {
     /* if (this.isconnected()){
        this.usr = this.userserv.getuserfromlocalstorage()
        
      }*/
  }
  isconnected(){
    return this.userserv.isconnected();
  }
  isdeconnectd(){
    return this.userserv.isdeconnectd();
  }
  logout(){
    this.userserv.logout();
  }
  //
  }


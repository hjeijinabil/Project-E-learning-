import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { user } from '../Models/user.model';
import { AuthRest } from '../Models/AuthRest';





@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  
  constructor(private httpclient : HttpClient  ){
    
  }
  adduser({ usr }: { usr: user; }):Observable<user> {
    return this.httpclient.post<user>(
      " http://localhost:3000/users", usr)}
getallservice():Observable<user[]>{
return this.httpclient.get<user[]>("http://localhost:3000/users")}
deleteuser(id : number):Observable<user>{
  return this.httpclient.delete<user>("http://localhost:3000/users/"+ id)
}

getuserbyid(id :number):Observable<user>{

  return this.httpclient.get<user>("http://localhost:3000/users/"+ id)
}

updateuser(id: number, usr : user):Observable<user>{
  return this.httpclient.put<user>("http://localhost:3000/users/"+ id, usr)
}

/*authenticate(email: string, pass: string): user | null {
  const userr = this.listuser.find((u) => u.email === email && u.pass === pass);
  return userr || null;
}*/
connect(email:string,pass:string):Observable<AuthRest>{
return this.httpclient.post<AuthRest>("http://localhost:3000/login/",{email:email, password:pass})
}
saveuser(accessToken:string, user:user){
  localStorage.setItem("jwt",accessToken);
  localStorage.setItem("user",JSON.stringify(user));
}
isconnected(){
  if(localStorage.getItem("jwt")!=null){
    return true}
    else{
      return false;
    }
    
  
}
isdeconnectd(){
  if(localStorage.getItem("jwt")==null){
    return true}
    else{
      return false;
    }
}
logout(){
  localStorage.clear()
}/*
updateprof(user: user){
  return localStorage.getItem("user",JSON.parse(user));
}*/
  // Récupérer l'utilisateur connecté
  getUser() {
    
    const user = localStorage.getItem("user");
    const jwt = localStorage.getItem("jwt");
    return user ? JSON.parse(user) : null;
    
    
    
    
  }
 getpass(){
  const userString = localStorage.getItem('user');
  if (userString) {
    const storedUser = JSON.parse(userString);
  
    // Accédez aux propriétés de l'utilisateur
    
    const confirmPasswordd =  storedUser.confirmPassword
  return confirmPasswordd
  
  }
  
  }
/*isAdmin(){
  let usr user = JSON.parse(localStorage.getItem("user")!)
  return (usr.role=="admin")
}*/
}



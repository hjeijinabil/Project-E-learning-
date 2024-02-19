import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { UpdateprofilComponent } from './updateprofil/updateprofil.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { WatchVideoComponent } from './watch-video/watch-video.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { RegistreComponent } from './registre/registre.component';
import { ListusersComponent } from './listusers/listusers.component';
import { AuthentificationComponent } from './authentification/authentification.component';


const routes: Routes = [{path:"header", component: HeaderComponent} ,
 {path: "footer", component : FooterComponent },
 {path : "home", component : HomeComponent},
 {path: "profil", component:ProfilComponent},
 {path:"", component:SignupComponent},
 {path:"contact", component:ContactComponent},
 {path:"updateprofil/:id" ,component:UpdateprofilComponent},
 {path:"user" , component:UserComponent},
 {path:"about",component:AboutComponent},
 {path:"courses",component:CoursesComponent},
 {path:"playlist",component:PlaylistComponent},
{path:"watch-video",component:WatchVideoComponent},
{path:"teachers",component:TeachersComponent},
{path:"teacher_profile",component:TeacherProfileComponent},
{path:"registre",component:RegistreComponent},
{path:"listuser" , component:ListusersComponent},
{path:"authentification",component:AuthentificationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

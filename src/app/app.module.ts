import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfilComponent } from './profil/profil.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { UpdateprofilComponent } from './updateprofil/updateprofil.component';
import { UserComponent } from './user/user.component';
import { CoursesComponent } from './courses/courses.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { WatchVideoComponent } from './watch-video/watch-video.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { RegistreComponent } from './registre/registre.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { ListusersComponent } from './listusers/listusers.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { DashbordComponent } from './Admin/dashbord/dashbord.component';
import { environment } from 'src/environment';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProfilComponent,
    SignupComponent,
    ContactComponent,
    UpdateprofilComponent,
    UserComponent,
    CoursesComponent,
    PlaylistComponent,
    WatchVideoComponent,
    TeachersComponent,
    TeacherProfileComponent,
    RegistreComponent,
    ListusersComponent,
    AuthentificationComponent,
    DashbordComponent,
    
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   

    
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

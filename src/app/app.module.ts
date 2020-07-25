import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth'
import {AngularFirestoreModule} from '@angular/fire/firestore'
import { FormsModule} from '@angular/forms'
import {environment} from '../environments/environment.prod';
import {MatCardModule, MatInputModule, MatIconModule, MatButtonModule} from '@angular/material';
import { WelcomeComponent } from './welcome/welcome.component'
import {UserModule} from './user/user.module'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    MatCardModule, MatInputModule, MatIconModule, MatButtonModule,
    UserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

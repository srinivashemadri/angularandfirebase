import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth'
import {AngularFirestoreModule} from '@angular/fire/firestore'
import { FormsModule} from '@angular/forms'

import {MatCardModule, MatInputModule, MatIconModule, MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    MatCardModule, MatInputModule, MatIconModule, MatButtonModule,
    
  ]
})
export class UserModule { }

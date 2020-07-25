import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth'
import {AngularFirestore} from 'angularfire2/firestore'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AngularFireAuth, private db: AngularFirestore, private router: Router ) { }

  ngOnInit() {
    //this.auth.auth.createUserWithEmailAndPassword("srinivashemadri2000@gmail.com","abcd1234").then((user)=>{console.log(user)}).catch((err)=>{console.log(err)})
    
    console.log(this.auth.auth.currentUser)
  }

  signup(Form: NgForm){

    if(Form.valid){
        if(Form.value.password == Form.value.confirmpassword){
          this.auth.auth.createUserWithEmailAndPassword(Form.value.email, Form.value.password).then((result)=>{
            console.log(result);
            result.user.updateProfile({displayName: Form.value.name})
            this.db.collection("users").doc(result.user.uid).set({"email": Form.value.email, "name": Form.value.name });
            this.router.navigate(['/user/profile/'+Form.value.email]);
            Form.resetForm();
          }).catch((err)=>{
            console.log(err);
          })
        }
    }
    
    
    
  }

}

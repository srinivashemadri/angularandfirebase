import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private ar: ActivatedRoute, private auth: AngularFireAuth, private db: AngularFirestore) { }
  readonlyenabled: boolean;
  name: String;
  email: String;
  userfound:boolean= false;
  pageloading: boolean= false;

  ngOnInit() {

    this.ar.paramMap.subscribe((param)=>{
      this.pageloading= true;
      console.log(param.get('email'));
      if(param.get('email')== this.auth.auth.currentUser.email){
        this.readonlyenabled= false;
        this.name = this.auth.auth.currentUser.displayName;
        this.email = this.auth.auth.currentUser.email;
        this.userfound= true;
        this.pageloading=false;
      }
      else{
        this.readonlyenabled = true;
        this.db.collection('users').get().forEach((querysnapshot)=>{
          querysnapshot.forEach((doc)=>{
            console.log(doc.data());
            if(doc.get('email')== param.get('email')){
              this.userfound= true;
              this.name = doc.get('name');
              this.email = doc.get('email');
            }
          })
        }).finally(()=>{
          this.pageloading=false;
        })
      }
       
    })

  }

}

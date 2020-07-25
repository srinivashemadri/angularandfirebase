import { Component, OnInit } from '@angular/core';
import { CentraldataService } from './centraldata.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'firebaseandangularislit';
  user;
  loading:boolean = false;

  ngOnInit(){

    console.log((new Date()).getSeconds())
    this.loading = true
    this.auth.authState.subscribe((u)=>{
      this.loading = false;
      
      this.user = u;
      
    })
    
  }
  constructor(private auth: AngularFireAuth, private router: Router){

  }
  logout(){
    
    this.auth.auth.signOut();
    this.router.navigate([''])
  }
}

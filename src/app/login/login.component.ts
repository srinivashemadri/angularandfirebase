import { Component, OnInit } from '@angular/core';
import { CentraldataService } from '../centraldata.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ds: CentraldataService, private router: Router) { }

  ngOnInit() {
  }

  login(Form: NgForm){
    if(Form.valid){
      this.ds.auth.auth.signInWithEmailAndPassword(Form.value.email, Form.value.password).then((result)=>{
        
        if(result["emailVerified"]== false){
          alert("Please verify email before login")
        }
        else
        {
          this.router.navigate(['/user/profile/'+Form.value.email]);
            Form.resetForm();
        }
          

      }).catch((err)=>{
        console.log(err);
      })
    }
  }

}

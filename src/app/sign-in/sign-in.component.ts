import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../authorization.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  ngOnInit() {
  }

  constructor(public afAuth: AngularFireAuth,
    public router: Router,
    private signInService:AuthorizationService) {

  }

  goToCreateUser() {
    this.router.navigate(['create-user']);
  }
 
}

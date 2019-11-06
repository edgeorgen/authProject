import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../authorization.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  ngOnInit() {
  }
  constructor( public afAuth:AngularFireAuth,
    public router: Router,
    private service:AuthorizationService) {

}

goToSignIn() {
  this.router.navigate(['sign-in']);
}
  
}

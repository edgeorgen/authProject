import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../authorization.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  ngOnInit() {
  }
  constructor( public afAuth:AngularFireAuth,
    public router: Router,
    private dashService: AuthorizationService) {

}

}

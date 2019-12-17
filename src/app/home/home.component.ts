import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthService, private router : Router) { }

  sidenav: MatSidenav


  ngOnInit() {
  }

  logout() {

    if(this.authService.logout())
    {
      this.router.navigate(['login']);
    }
  }

}

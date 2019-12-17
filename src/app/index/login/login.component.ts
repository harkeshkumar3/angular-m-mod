import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {




  public loginForm: FormGroup;
  public hide: boolean = true; // Password hiding

  constructor(public router: Router,private fb: FormBuilder, private authService: AuthService) {
  
  }

  public ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  /* public onLogin(): void {
    this.markAsDirty(this.loginForm);
  } */

  private markAsDirty(group: FormGroup): void {
    group.markAsDirty();
    // tslint:disable-next-line:forin
    for (const i in group.controls) {
      group.controls[i].markAsDirty();
    }
  }

  loginAction() {
    if (this.loginForm) {
      if (this.authService.login(this.loginForm)) {
        this.router.navigate(['']);
      }
    } else {
      //this.errorText = 'Please give valid data';
    }
  }
}
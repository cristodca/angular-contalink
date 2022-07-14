import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // providers: [AuthService]
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    pass: new FormControl(),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  async login() {
    let user: User = this.loginForm.value;

    
    let login$: Observable<User> = this.authService.login(user.email, user.pass);

    // let result = await lastValueFrom(login$)

    login$.subscribe(value => {
      console.log(value);
      this.authService.setUser(user);
    })

    // this.router.navigate(['home']);
  }
}

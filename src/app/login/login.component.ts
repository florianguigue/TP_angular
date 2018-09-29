import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userlogin: string;
  public userpwd: string;
  public error: string;
  public title: 'Connexion';


  constructor(
    private sharedService: SharedService,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  login(): void {
    this.loginService.getUser(this.userlogin).subscribe(
      (user) => {
        if (this.userpwd === user.userpwd) {
          this.sharedService.isConnected = true;
          this.router.navigate(['/home']);
        } else {
          this.error = 'Login ou mot de passe incorrect !';
        }
      },
      (error) => {
        console.log(error);

        this.error = error.message;
      });
  }

}

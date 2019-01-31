import { Component, OnInit } from '@angular/core';
import {SharedService} from '../services/shared.service';
import {Client} from '../models/client';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  public client: Client;

  public error: string;

  constructor(
    private sharedService: SharedService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.client = this.sharedService.getClient();
  }



  validate() {
    if (!this.client.idClient) {
      this.loginService.addCustomer(this.client).subscribe(
        () => {
          this.router.navigate(['/home']);
        }, (error) => {
          this.error = error;
        }
      );
    } else {
      this.loginService.editCustomer(this.client).subscribe(
        () => {
          this.router.navigate(['/home']);
        }, (error) => {
          this.error = error;
        }
      );
    }
  }

}

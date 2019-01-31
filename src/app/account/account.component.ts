import {Component, Input, OnInit} from '@angular/core';
import {Client} from '../models/client';
import {Auteur} from '../models/auteur';
import {LoginService} from '../services/login.service';
import {SharedService} from '../services/shared.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public title: string;
  public error: string;

  constructor(private loginService: LoginService,
              public sharedService: SharedService) {
  }

  ngOnInit() {
    if (this.sharedService.getClient() !== undefined || this.sharedService.getAuteur() !== undefined) {
      this.title = 'Edition du compte';
    } else {
      this.title = 'Création d\'un compte';
    }
  }

}

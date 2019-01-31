import {Component, OnInit} from '@angular/core';
import {SharedService} from '../services/shared.service';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';
import {ArticleService} from '../services/article.service';
import {Article} from '../models/article';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userlogin: string;
  public userpwd: string;
  public error: string;
  public title: string;


  constructor(
    private sharedService: SharedService,
    private router: Router,
    private loginService: LoginService,
    private articleService: ArticleService
  ) {
  }

  ngOnInit() {
    this.title = 'Authentification';
  }

  login(): void {
    this.loginService.connectCustomer(this.userlogin).subscribe(
      (customer) => {
        if (this.userpwd === customer.pwdClient) {
          this.sharedService.setClient(customer);
          this.connect(1);
        } else {
          this.error = 'Login ou mot de passe incorrect !';
        }
      },
      () => {
        this.loginService.connectAuteur(this.userlogin).subscribe(
          (auteur) => {
            if (this.userpwd === auteur.pwdAuteur) {
              this.sharedService.setAuteur(auteur);
              this.connect(2);
            } else {
              this.error = 'Login ou mot de passe incorrect !';
            }
          }, (error) => {
            this.error = error.error.message;
          }
        );
      });
  }

  connect(typeCompte: number) {
    this.sharedService.setTypeCompte(typeCompte);
    this.sharedService.isConnected = true;
    let id;
    if (typeCompte === 1) {
      id = this.sharedService.getClient().idClient;
    }  else {
      id = this.sharedService.getAuteur().idAuteur;
    }

    this.articleService.getAcheteByClient(id).subscribe(
      (achats) => {
        achats.forEach(
          (achat) => {
            this.sharedService.addArticleAcheter(achat.article);
          }
        );
      }, () => {
    }
    );
    if (this.sharedService.getOriginalUrl() === '/panier') {
      this.router.navigate([this.sharedService.getOriginalUrl()]);
    } else {
      this.router.navigate(['/home']);
    }
  }

}

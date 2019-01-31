import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import {SharedService} from './services/shared.service';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { LoginComponent } from './login/login.component';
import {LoginService} from './services/login.service';
import { ErrorComponent } from './error/error.component';
import { ArtByDomComponent } from './art-by-dom/art-by-dom.component';
import { DomainComponent } from './domain/domain.component';
import { ArtListComponent } from './art-list/art-list.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { AccountComponent } from './account/account.component';
import { ClientComponent } from './client/client.component';
import {ArticleService} from './services/article.service';
import { PanierComponent } from './panier/panier.component';
import { AchatsComponent } from './achats/achats.component';
import { OeuvresAuteurComponent } from './oeuvres-auteur/oeuvres-auteur.component';
import { VentesComponent } from './ventes/ventes.component';
import { AjoutOeuvreComponent } from './ajout-oeuvre/ajout-oeuvre.component';
import { FileUploadModule } from 'ng2-file-upload';
import { FileUploader } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ArticleComponent,
    LoginComponent,
    ErrorComponent,
    ArtByDomComponent,
    DomainComponent,
    ArtListComponent,
    DetailArticleComponent,
    AccountComponent,
    ClientComponent,
    PanierComponent,
    AchatsComponent,
    OeuvresAuteurComponent,
    VentesComponent,
    AjoutOeuvreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FileUploadModule
  ],
  providers: [SharedService, LoginService, ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

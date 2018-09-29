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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ArticleComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SharedService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

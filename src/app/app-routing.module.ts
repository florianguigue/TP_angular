import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ArtByDomComponent} from './art-by-dom/art-by-dom.component';
import {DetailArticleComponent} from './detail-article/detail-article.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search',
    children: [
      { path: '', component: ArtByDomComponent },
      { path: ':idDomaine', component: ArtByDomComponent }
  ]},
  { path: 'article/:idArticle', component: DetailArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

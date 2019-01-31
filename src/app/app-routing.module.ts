import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ArtByDomComponent} from './art-by-dom/art-by-dom.component';
import {DetailArticleComponent} from './detail-article/detail-article.component';
import {AccountComponent} from './account/account.component';
import {PanierComponent} from './panier/panier.component';
import {AchatsComponent} from './achats/achats.component';
import {OeuvresAuteurComponent} from './oeuvres-auteur/oeuvres-auteur.component';
import {VentesComponent} from './ventes/ventes.component';
import {AjoutOeuvreComponent} from './ajout-oeuvre/ajout-oeuvre.component';

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
  { path: 'account', component: AccountComponent },
  { path: 'myArticles', component: AchatsComponent },
  { path: 'myBooks', component: OeuvresAuteurComponent },
  { path: 'ventes', component: VentesComponent },
  { path: 'ajout', component: AjoutOeuvreComponent },
  { path: 'panier', component: PanierComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

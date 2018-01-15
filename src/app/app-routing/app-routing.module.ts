import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleSearchComponent } from '../article-search/article-search.component';
import { ArticleWishlistComponent } from '../article-wishlist/article-wishlist.component';
import { LandingComponent } from '../landing/landing.component';

const routes: Routes = [
  { path: '',component: LandingComponent, pathMatch: 'full' },
  { path: 'search', component: ArticleSearchComponent },
  { path: 'wishlist', component: ArticleWishlistComponent },
  { path: '**', component: LandingComponent, redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

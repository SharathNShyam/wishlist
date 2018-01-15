import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatCardHeader, MatCardSubtitle, MatCardTitle, MatCardContent, MatCardImage } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ArticleSearchComponent } from './article-search/article-search.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleWishlistComponent } from './article-wishlist/article-wishlist.component';
import { LandingComponent } from './landing/landing.component';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { AppService } from './services/app.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { WishlistService }  from './services/wishlist.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticleSearchComponent,
    LandingComponent,
    ArticleDetailComponent,
    ArticleWishlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    HttpClientInMemoryWebApiModule.forRoot(
      WishlistService, { dataEncapsulation: false }
    )
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

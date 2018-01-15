import { Component } from '@angular/core';
import { Articles, Currency, Article } from '../lib/Shoe';
import { AppService } from '../services/app.service';


@Component({
  selector: 'article-wishlist',
  templateUrl: './article-wishlist.component.html',
  styleUrls: ['./article-wishlist.component.css'],
})

export class ArticleWishlistComponent {

  public articles : Article[] =[];

  constructor(private appService: AppService) {
    this.articles = appService.getArticlesInWishlist();
  }

  ngOnInit() {
    this.updateArticleList();  
  }  

  onDeleteArticle(){
    this.updateArticleList();
  }

  updateArticleList(){
    this.appService.getArticles().subscribe(articleList => this.articles = articleList.filter(art => art.url!== ""));
  }

}
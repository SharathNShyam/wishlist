import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { of } from 'rxjs/observable/of';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { MatCardModule, MatCardHeader, MatCardSubtitle, MatCardTitle, MatCardContent, MatCardImage } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Articles, Currency, Article } from '../lib/Shoe';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.css']
})
export class ArticleSearchComponent implements OnInit {
  private articles: Article[];
  private searchTerms = new Subject<string>();

  constructor(private appService: AppService) {

  }


  getNextArticle(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {

    this.appService.searchArticlesFor(this.searchTerms)
      .subscribe(results => {
        this.articles = results.products;
      });
  }

  getJson(priceValue : string) : Currency[] {
    var res= JSON.parse(priceValue);
    return res;
  }
}

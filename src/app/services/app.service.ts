import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Article, Currency, Articles, Suggestion } from '../lib/Shoe';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/map';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AppService {

  private searchUrl = 'https://www.adidas.co.uk/api/suggestions/';
  private articlesUrl = 'api/articles';
  private wishListArticles : Article[];

  constructor(private httpClient: HttpClient, private http: Http) { }

  getArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.articlesUrl)
      .pipe(
      tap(articles => {
        console.log('fetched articles');
        articles = articles.filter(z=>z.url!="");
        this.wishListArticles = articles;
      }),
      catchError(this.handleError('getArticles', []))
      );
  }
  
  addArticle(article: Article): Observable<Article> {
    return this.httpClient.post<Article>(this.articlesUrl, article, httpOptions).pipe(
      tap((article: Article) => console.log(`added article with url=${article.url}`)),
      catchError(this.handleError<Article>('addArticle'))
    );
  }

  removeArticle (article: Article | number): Observable<Article> {
    const id = typeof article === 'number' ? article : article.id;
    const url = `${this.articlesUrl}/${id}`;

    return this.httpClient.delete<Article>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted the article with url=${id}`)),
      catchError(this.handleError<Article>('removeArticle'))
    );
  }

  getArticlesInWishlist(){
    return this.wishListArticles;
  }

  searchArticlesFor(terms: Observable<string>) {
    return terms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap(term => this.searchEntries(term)),
    );
  }

  searchEntries(term): Observable<Articles> {
    return this.getDataObservable(this.searchUrl + `${term}`).pipe(
      tap(_ => console.log(`found articles matching "${term}"`)),
      catchError(this.handleError<any>('searchEntries', []))
    );
  }
  getDataObservable(url: string) {
    return this.http.get(url)
      .map(data => {
        return data.json();
      });
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}

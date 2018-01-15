import { Component, OnInit,EventEmitter  } from '@angular/core';
import {
    MatCardModule, MatCardHeader, MatCardSubtitle, MatCardTitle,
    MatCardContent, MatCardImage, MatCardSmImage
} from '@angular/material/card';

import { MatIconModule } from '@angular/material/icon';
import { Articles, Currency, Article } from '../lib/Shoe';
import { AppService } from '../services/app.service';
import { Input, Output } from '@angular/core';

@Component({
    selector: 'app-article-detail',
    templateUrl: './article-detail.component.html',
    styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

    @Input() article: Article;
    @Input() isWishlist: boolean;
    @Output() delete: EventEmitter<any> = new EventEmitter();
    favorite : boolean = false;
    constructor(private appService: AppService) {

    }

    ngOnInit(): void {
    }
    getJson(priceValue: string): Currency[] {
        var res = JSON.parse(priceValue);
        return res;
    }

    onAddToBasket(){
        this.favorite=!this.favorite;
        this.appService.addArticle(this.article).subscribe();
        
    }

    removeArticle() {
        this.appService.removeArticle(this.article).subscribe();
        this.delete.emit(null);
      }
    
}
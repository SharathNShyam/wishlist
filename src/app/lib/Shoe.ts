export class Article {
    id : number;
    suggestion: string;
    image: string;
    url: string;
    rating: string;
    reviews: string;
    separatedSalePrice: [Currency];
    subTitle: string;
    isPreorder: string;
}

export class Currency {
    isCurrency: boolean;
    value: string;
}

export class Articles {
    suggestions : Suggestion[];
    suggestionsGroups : Suggestion [];
    categories : Suggestion[];
    products : Article[]
}

export class Suggestion {

}
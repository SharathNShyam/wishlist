import { InMemoryDbService } from 'angular-in-memory-web-api';

export class WishlistService implements InMemoryDbService {
  createDb() {
    const articles = [
      {
        id : 0,
        suggestion: '',
        image: '',
        url: '',
        rating: '',
        reviews: '',
        separatedSalePrice: JSON.stringify([{ 'isCurrency' : true, 'value' : ''}]),
        subTitle: '',
        isPreorder: '',
      }
    ];
    return { articles };
  }
}

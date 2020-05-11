import { action, observable } from 'mobx';

import Beer from '../constants/Beer';
import TabView from '../constants/TabView';

export default class ProductsStore {
    @observable basketItems: Beer[] = [];
    @observable loading: boolean = true;
    @observable views: TabView[] = [
        {
            id: 0,
            beers: [],
            currentPage: 1,
            title: 'All'
        },
        {
            id: 1,
            beers: [],
            currentPage: 1,
            title: 'Pizza',
            pairing: 'pizza'
        },
        {
            id: 2,
            beers: [],
            currentPage: 1,
            title: 'Steak',
            pairing: 'steak'
        },
    ];
    @observable selectedProduct?: Beer;

    @action async loadAllViews(): Promise<void> {
        // Depending on the size of the application I might add separate calls on each component mount to load the beers - to reduce initial load time. For the demo example I will loop through and load all the views at once
        for (let i = 0; i < this.views.length; i++) {
            const pageNumber = this.views[i].currentPage;
            const pairing = this.views[i].pairing;

            this.views[i].beers = await this.loadBeers(pageNumber, pairing);
        }

        this.loading = false;
    }

    @action async loadBeers(pageNumber: number, foodPairing?: string): Promise<[]> {
        try {
            const url = foodPairing
                ? `https://api.punkapi.com/v2/beers?page=${pageNumber}&food=${foodPairing}`
                : `https://api.punkapi.com/v2/beers?page=${pageNumber}`;
            const response = await fetch(url);
            return await response.json();
        } catch (e) {
            // Add more error handling here - i.e. Pop up with instruction on how to fix / options to retry
            return e;
        }
    }

    @action addProductToBasket = (product: Beer) => this.basketItems.push(product);

    @action onSelectProduct = (product: Beer) => this.selectedProduct = product;
}

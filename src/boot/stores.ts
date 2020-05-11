import ProductsStore from '../stores/ProductsStore';

export class RootStore {
    products: ProductsStore;

    constructor() {
        this.setStores();
        this.products = new ProductsStore();
    }

    getStores = (): Stores => {
        return {
            productsStore: this.products
        };
    };

    setStores() {
        this.products = new ProductsStore();
    }
}

export default (): Stores => {
    const rootStore = new RootStore();
    return rootStore.getStores();
};

export interface Stores {
    productsStore: ProductsStore;
}

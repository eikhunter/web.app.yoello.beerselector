import RegisterStore from '../stores/RegisterStore';

export class RootStore {
    register: RegisterStore;

    constructor() {
        this.setStores();
        this.register = new RegisterStore();
    }

    getStores = (): Stores => {
        return {
            registerStore: this.register
        };
    };

    setStores() {
        this.register = new RegisterStore();
    }
}

export default (): Stores => {
    const rootStore = new RootStore();
    return rootStore.getStores();
};

export interface Stores {
    registerStore: RegisterStore;
}

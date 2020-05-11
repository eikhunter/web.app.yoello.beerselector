import React from 'react';
import { observer } from 'mobx-react';
import SwipeableViews from 'react-swipeable-views';

import Beer from '../../constants/Beer';
import Modal from '../../components/Layout/Modal/Modal';
import ProductList from '../../components/Product/ProductList/ProductList';
import ProductModal from '../../components/Product/ProductModal/ProductModal';
import ProductBasket from '../../components/Product/ProductBasket/ProductBasket';
import ProductsStore from '../../stores/ProductsStore';
import Tabs from '../../components/Layout/Tabs/Tabs';

import './Products.scss';

interface Props {
    productsStore: ProductsStore;
}

const initialState = () => ({
    activeTabIndex: 0,
    basketOpen: false,
    modalOpen: false
});

type State = ReturnType<typeof initialState>;

@observer
class Products extends React.Component<Props, State> {
    state: State = initialState();

    async componentDidMount(): Promise<void> {
        const { productsStore } = this.props;

        await productsStore.loadAllViews();
    }

    _addProductToBasket = (product: Beer) => {
        const { productsStore } = this.props;

        productsStore.addProductToBasket(product);
        this.setState({ modalOpen: false });
    };

    _closeBasket = () => this.setState({ basketOpen: false });

    _closeModal = () => this.setState({ modalOpen: false });

    _onActiveIndexChange = (index: number) => {
        window.scrollTo(0,0);
        this.setState({ activeTabIndex: index });
    };

    _onClickProduct = (product: Beer) => {
        const { productsStore } = this.props;

        this.setState({ basketOpen: false, modalOpen: true });
        productsStore.onSelectProduct(product)
    };

    _openBasket = () => this.setState({ basketOpen: true });

    render() {
        const { productsStore } = this.props;
        const { activeTabIndex, basketOpen, modalOpen } = this.state;
        const basketItems = productsStore.basketItems;
        const selectedProduct = productsStore.selectedProduct;
        const views = productsStore.views;

        return (
            <div className="prd-Products">
                <header className="prd-Products_Header">
                    <div className="prd-Products_Heading">
                        <h1 className="prd-Products_Title">Beer Pair</h1>
                    </div>

                    <div className="prd-Products_Tabs">
                        <Tabs
                            activeTabIndex={activeTabIndex}
                            views={views}
                            setActiveIndex={this._onActiveIndexChange}
                        />
                    </div>
                </header>

                <div className="prd-Products_Body">
                    <SwipeableViews
                        index={activeTabIndex}
                        onChangeIndex={this._onActiveIndexChange}
                    >
                        {views.map(view =>
                            <ProductList
                                key={view.id}
                                onClickProduct={this._onClickProduct}
                                products={view.beers}
                            />
                        )}
                    </SwipeableViews>
                </div>

                <Modal closeModal={this._closeModal} modalOpen={modalOpen}>
                    {selectedProduct && (
                        <ProductModal
                            addProductToBasket={this._addProductToBasket}
                            product={selectedProduct}
                        />
                    )}
                </Modal>

                <ProductBasket
                    active={basketItems.length > 0}
                    basketItems={basketItems}
                    deleteBasketItem={productsStore.deleteProductFromBasket}
                    closeBasket={this._closeBasket}
                    open={basketOpen}
                    openBasket={this._openBasket}
                />
            </div>
        );
    }
}

export default Products;

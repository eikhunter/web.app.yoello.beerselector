import React from 'react';

import Beer from '../../../constants/Beer';
import ProductCard from '../ProductCard/ProductCard';

import './ProductBasket.scss';
import Button from '../../Layout/Button/Button';
import {currencyFormat} from '../../../utils/currencyFormat';

interface Props {
    active: boolean;
    basketItems: Beer[];
    basketTotal: number;
    closeBasket: () => void;
    deleteBasketItem: (index: number) => void;
    open: boolean;
    openBasket: () => void;
}

const ProductBasket: React.FC<Props> = ({
                                            active,
                                            closeBasket,
                                            basketItems,
                                            basketTotal,
                                            deleteBasketItem,
                                            open,
                                            openBasket
                                        }) => {
    const className = `prd-Basket${active ? ' prd-Basket-active' : ''}
    ${open && active ? ' prd-Basket-open' : ''}`;

    return (
        <div className={className}>
            <button onClick={closeBasket} className="prd-Basket_Close">Close</button>

            <div className="prd-Basket_Content">
                <div className="prd-Basket_Inner">
                    <div className="prd-Basket_Header" onClick={!open ? openBasket : undefined}>
                        <h4 className="prd-Basket_Title">{`View basket(${basketItems.length})`}</h4>
                    </div>

                    <div className="prd-Basket_Body">
                        <ul className="prd-Basket_Items">
                            {basketItems.map((item, index) => (
                                <li key={item.id + index} className="prd-Basket_Item">
                                    <ProductCard
                                        abv={item.abv}
                                        deleteItem={() => deleteBasketItem(index)}
                                        imageUrl={item.image_url}
                                        name={item.name}
                                        tagline={item.tagline}
                                        small
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="prd-Basket_Footer">
                        <Button
                            onClick={() => console.log('payment')}
                            text={`Purchase ${currencyFormat(basketTotal, 'GBP')}`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductBasket;

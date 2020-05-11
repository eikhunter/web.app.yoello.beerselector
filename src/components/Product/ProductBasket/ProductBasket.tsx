import React from 'react';

import Beer from '../../../constants/Beer';
import ProductCard from '../ProductCard/ProductCard';

import './ProductBasket.scss';
import Button from '../../Layout/Button/Button';

interface Props {
    active: boolean;
    basketItems: Beer[];
    closeBasket: () => void;
    open: boolean;
    openBasket: () => void;
}

const ProductBasket: React.FC<Props> = ({ active, closeBasket, basketItems, open, openBasket }) => {
    const className = `prd-Basket${active ? ' prd-Basket-active' : ''}
    ${open ? ' prd-Basket-open' : ''}`;

    return (
        <div className={className}>
            <button onClick={closeBasket} className="prd-Basket_Close">Close</button>

            <div className="prd-Basket_Content" onClick={!open ? openBasket : undefined}>
                <div className="prd-Basket_Inner">
                    <div className="prd-Basket_Body">
                        <h4 className="prd-Basket_Title">{`View basket(${basketItems.length})`}</h4>

                        <ul className="prd-Basket_Items">
                            {basketItems.map(item => (
                                <li key={item.id} className="prd-Basket_Item">
                                    <ProductCard
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
                        <Button onClick={() => console.log('payment')} text="Purchase"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductBasket;

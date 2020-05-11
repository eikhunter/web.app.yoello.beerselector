import React from 'react';

import Beer from '../../../constants/Beer';
import Button from '../../Layout/Button/Button';

import './ProductModal.scss'

interface Props {
    addProductToBasket: (product: Beer) => void;
    product: Beer;
}

const ProductModal: React.FC<Props> = ({ addProductToBasket, product }) => {
    return (
        <div className="prd-Modal">
            <header className="prd-Modal_Header">
                <div className="prd-Modal_ImageContainer">
                    <img alt="" src={product.image_url} className="prd-Modal_Image"/>
                </div>
            </header>

            <div className="prd-Modal_Body">
                <h4 className="prd-Modal_Title">{product.name}</h4>
                <p className="prd-Modal_Tag">{product.tagline}</p>

                <p className="prd-Modal_Subtitle">Perfect with</p>

                <div className="prd-Modal_Pairing">
                    {product.food_pairing.slice(0, 3).map(food =>
                        <p key={food} className="prd-Modal_Text">{food}</p>
                    )}
                </div>
            </div>

            <footer className="prd-Modal_Footer">
                <Button onClick={() => addProductToBasket(product)} text="Add to basket"/>
            </footer>
        </div>
    );
};

export default ProductModal;

import React from 'react';

import Beer from '../../../constants/Beer';
import ProductCard from '../ProductCard/ProductCard';

import './ProductList.scss';

interface Props {
    onClickProduct: (product: Beer) => void;
    products: Beer[]
}

const ProductList: React.FC<Props> = ({ onClickProduct, products }) => {
    return (
        <div className="prd-List">
            <div className="prd-List_Inner">
                <div className="prd-List_Body">
                    <ul className="prd-List_Items">
                        {products.map(product => (
                            <li
                                className="prd-List_Item"
                                key={product.id}
                                onClick={() => onClickProduct(product)}
                            >
                                <ProductCard
                                    abv={product.abv}
                                    imageUrl={product.image_url}
                                    name={product.name}
                                    tagline={product.tagline}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductList;

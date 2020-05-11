import React from 'react';

import './ProductCard.scss';

interface Props {
    imageUrl: string;
    name: string;
    tagline: string;
    small?: boolean;
}

const ProductCard: React.FC<Props> = ({ imageUrl, name, tagline, small }) => {
    return (
        <div className={small ? 'prd-Card prd-Card-small' : 'prd-Card'}>
            <div className="prd-Card_ImageContainer">
                <img alt="" src={imageUrl} className="prd-Card_Image"/>
            </div>

            <div className="prd-Card_Body">
                <h4 className="prd-Card_Title">{name}</h4>
                <p className="prd-Card_Text">{tagline}</p>
            </div>
        </div>
    );
};

export default ProductCard;

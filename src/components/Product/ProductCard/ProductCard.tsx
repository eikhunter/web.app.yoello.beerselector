import React from 'react';

import './ProductCard.scss';
import Arrow from '../../../assets/svg/Arrow';

interface Props {
    imageUrl: string;
    name: string;
    tagline: string;
    deleteItem?: () => void;
    small?: boolean;
}

const ProductCard: React.FC<Props> = ({ imageUrl, name, tagline, deleteItem, small }) => {
    return (
        <div className={small ? 'prd-Card prd-Card-small' : 'prd-Card'}>
            <div className="prd-Card_ImageContainer">
                <img alt="" src={imageUrl} className="prd-Card_Image"/>
            </div>

            <div className="prd-Card_Body">
                <h4 className="prd-Card_Title">{name}</h4>
                <p className="prd-Card_Text">{tagline}</p>
                <p className="prd-Card_Link">Learn more
                    <Arrow/>
                </p>
            </div>

            {deleteItem && (
                <button onClick={deleteItem} className="prd-Card_Delete">x</button>
            )}
        </div>
    );
};

export default ProductCard;

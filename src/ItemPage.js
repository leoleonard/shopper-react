import React from 'react';
import PropTypes from 'prop-types';
import './ItemPage.css';
import Item from "./Item";

const ItemPage = ({items, onAddToCart}) => (
    <ul className="ItemPage-items">
        {items.map(item =>
        <li key={item.id} className="ItemPage-item">
            <Item item={item} />
            <button
                className="Item-addToCart"
                onClick={() => onAddToCart(item)}
            >
                Add to cart
            </button>
        </li>
    )}
    </ul>
);

ItemPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func
};

export default ItemPage;

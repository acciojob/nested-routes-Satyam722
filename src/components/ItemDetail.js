import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = ({ items }) => {
    // Get the item ID from the nested URL path
    const { itemId } = useParams();

    // Find the specific item based on the ID
    const item = items.find(i => i.id === itemId);

    if (!item) {
        return (
            <div className="item-detail-box">
                <p>Item details not found for ID: **{itemId}**</p>
            </div>
        );
    }

    return (
        <div className="item-detail-box">
            <h4>Item Details</h4>
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Price:</strong> {item.price}</p>
            <p>---</p>
            <p>This content is rendered by the deeply nested route: `/category/{item.id}/{itemId}`</p>
        </div>
    );
};

export default ItemDetail;

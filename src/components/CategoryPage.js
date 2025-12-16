import React from 'react';
// Note: useRouteMatch is essential for dynamic nested routing in v5
import { Link, Route, useRouteMatch, useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

// Mock Data for Items
const ALL_ITEMS = {
    'women': [
        { id: 'dress-101', name: 'Summer Dress', price: '$50' },
        { id: 'shoe-202', name: 'Running Sneakers', price: '$80' }
    ],
    'men': [
        { id: 'shirt-303', name: 'Oxford Shirt', price: '$45' },
        { id: 'jeans-404', name: 'Slim Fit Jeans', price: '$75' }
    ],
    'kids': [
        { id: 'toy-505', name: 'Building Blocks', price: '$20' }
    ]
};

const CategoryPage = () => {
    // 1. Get the current URL path and dynamic parameter from React Router
    let { path, url } = useRouteMatch(); // For configuring nested routes in v5
    let { categoryName } = useParams(); // For getting the category slug from the URL

    // Get the items specific to the current category
    const items = ALL_ITEMS[categoryName.toLowerCase()] || [];

    return (
        <div className="category-page">
            <h2>{categoryName.toUpperCase()} Collection</h2>
            
            <div className="nested-content">
                {/*
                  Nested Routes Definition:
                  The Route path is built using the parent path (`path`)
                  which holds the :categoryName slug.
                */}
                <Route exact path={path}>
                    <div className="item-list">
                        <h3>Available Items:</h3>
                        {items.length > 0 ? (
                            <ul>
                                {items.map(item => (
                                    <li key={item.id}>
                                        {/* Link is built using the parent URL: `${url}/:itemId` */}
                                        <Link to={`${url}/${item.id}`}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No items found for this category.</p>
                        )}
                    </div>
                </Route>

                {/* The NESTED Route:
                  Displays the ItemDetail component when an item ID is present in the URL.
                */}
                <Route path={`${path}/:itemId`}>
                    <ItemDetail items={items} />
                </Route>
            </div>
        </div>
    );
};

export default CategoryPage;

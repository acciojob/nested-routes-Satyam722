import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CategoryPage from './CategoryPage';
import './App.css'; 

// Mock Data Structure
const CATEGORIES = [
    { name: 'Women', path: 'women', id: 1 },
    { name: 'Men', path: 'men', id: 2 },
    { name: 'Kids', path: 'kids', id: 3 }
];

// Main Layout Component
const Layout = ({ children }) => (
    <div className="layout-container">
        <h1>Nested Routes Example</h1>
        <nav className="main-nav">
            <ul>
                {/* Links to Categories */}
                {CATEGORIES.map(cat => (
                    <li key={cat.id}>
                        <Link to={`/category/${cat.path}`}>{cat.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
        <div className="content-area">
            {children}
        </div>
    </div>
);

// Home Component
const Home = () => (
    <div className="page-content">
        <h2>Welcome to the Store</h2>
        <p>Select a category above to view items.</p>
    </div>
);

const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    {/* Index Route */}
                    <Route exact path="/" component={Home} />

                    {/* Category Parent Route - Renders the CategoryPage component */}
                    {/* The CategoryPage component will handle all the nested routing */}
                    <Route path="/category/:categoryName" component={CategoryPage} />

                    {/* Fallback 404 Route */}
                    <Route path="*">
                        <div className="page-content">
                            <h2>404 Not Found</h2>
                        </div>
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;

import React from 'react';
import MainNav from './nav/MainNav.js';

class Home extends React.Component {
    render() {
        return (
            <div>
                <MainNav></MainNav>
                <h2>Home</h2>
                <p>Welcome to the site!</p>
            </div>
        );
    }
}

export default Home;

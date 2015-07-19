import React from 'react';
import { NavLink } from 'fluxible-router';

class MainNav extends React.Component {
    render() {
        const selected = this.props.selected;
        // const links = this.props.links;

        // const linkHTML = Object.keys(links).map((name) => {
        //     var className = '';
        //     var link = links[name];

        //     if (selected === name) {
        //         className = 'pure-menu-selected';
        //     }

        //     return (
        //         <li className={className} key={link.path}>
        //             <NavLink routeName={link.page} activeStyle={{backgroundColor: '#eee'}}>{link.title}</NavLink>
        //         </li>
        //     );
        // });
        // {linkHTML}
        return (
            <nav className="main-header">
                <h1 className="main-header_logo" id="logo">
                    <NavLink routeName="home">ylr</NavLink>
                </h1>
                <ul>
                    <li>
                        <NavLink routeName="blog">Blog</NavLink>
                        <NavLink routeName="account">User</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

// Nav.defaultProps = {
//     selected: 'home',
//     links: {}
// };

export default MainNav;

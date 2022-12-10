import './Nav.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

function Nav(props){
    const { pages } = props;

    return (
        <nav className="nav">
            
            <ul className="nav-bar">
                {pages.map((page) => (
                    <li key={`${page.id}`}>
                        <NavLink
                            to={page.id}
                            className={({ isActive }) => 
                            isActive ? "link is-active" : "link"
                            }
                        >
                            {page.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <CartWidget/>
        
        </nav>

    );
};

export default Nav;
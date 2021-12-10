import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to='/poems/all'>Всички стихове</Link></li>
                <li><Link to='/poems/mine'>Моите стихове</Link></li>
                <li><Link to='/poems/favourite'>Любими стихове</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
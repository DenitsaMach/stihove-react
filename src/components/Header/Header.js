import './Header.css';
import { Link } from 'react-router-dom';

function Header () {
	return (
		<header>
			<span id="logo">Стихосбирка.КОМ</span>
			<div id="login">
            <Link to='/register'>Регистрация</Link> |  
            <Link to='/login'>Вход</Link>
            (<Link to='/logout'>Изход</Link>)
            </div>
		</header>
	);
}

export default Header;
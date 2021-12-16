import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

import './Header.css';

function Header () {
	const { user, isAuthenticated } = useAuthContext();
	return (
		<header>
			<span id="logo">Стихосбирка.КОМ</span>
			<div id="login">
			{isAuthenticated ? <>
				<span>Здравей {user.firstName}! </span>
				<Link to='/logout'>(Изход)</Link>
			</> : <>
				<Link to='/register'>Регистрация</Link> |
				<Link to='/login'>Вход</Link>
			</>}
            </div>
		</header>
	);
}

export default Header;